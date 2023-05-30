import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Stack, Alert } from 'react-bootstrap';
import {
    handleAuthentication,
    resetErrors,
} from '../../store/currentUser/currentUserSlice';
import useFormStateAndValidation from '../../hooks/useFormStateAndValidation';
import SignForm from './components/SignForm';
import { signFormConfig } from '../../utils/configs';

function Sign() {
    const location = useLocation();

    const { inputsValue, errorMessages, formIsValid, handleChange } =
        useFormStateAndValidation(signFormConfig.validation[location.pathname]);

    const { status, error } = useSelector((state) => state.currentUser);

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

    useEffect(() => {
        dispatch(resetErrors());
    }, [location, dispatch]);

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
                    isLoading={status === 'pending'}
                />
                {status === 'rejected' && error && (
                    <Alert
                        variant="danger"
                        className="text-center p-2 mb-0 mt-2"
                    >
                        {error}
                    </Alert>
                )}
            </Container>
        </Stack>
    );
}

export default Sign;
