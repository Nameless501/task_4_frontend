import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Stack } from 'react-bootstrap';
import { handleAuthentication } from '../../store/authentication/authenticationSlice';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import SignForm from './components/SignForm';
import { signFormConfig } from '../../utils/configs';

function Sign() {
    const location = useLocation();

    const { inputsValue, errorMessages, formIsValid, handleChange } =
        useFormStateAndValidation();

    const { users, status, statusCode } = useSelector(
        (state) => state.authentication
    );

    const dispatch = useDispatch();

    const navigate = useNavigate();

    async function handleSubmit(evt) {
        evt.preventDefault();
        dispatch(
            handleAuthentication({
                payload: inputsValue,
                path: signFormConfig.api[location.pathname],
            })
        ).then(({ meta: { requestStatus } }) => {
            if (requestStatus === 'fulfilled') {
                navigate(signFormConfig.redirect[location.pathname]);
            }
        });
    }

    return (
        <Stack gap={3}>
            <h2 className="text-center">
                {signFormConfig.title[location.pathname]}
            </h2>
            <Container className="col-xs-10 col-md-8 col-lg-6 bg-light p-3">
                <SignForm
                    inputs={signFormConfig.inputs[location.pathname]}
                    handleChange={handleChange}
                    inputsValue={inputsValue}
                    isValid={formIsValid}
                    errorMessages={errorMessages}
                    handleSubmit={handleSubmit}
                />
            </Container>
        </Stack>
    );
}

export default Sign;
