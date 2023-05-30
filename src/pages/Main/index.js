import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Container, Form, Spinner } from 'react-bootstrap';
import {
    getUsersData,
    toggleUsersBlock,
    deleteUsers,
} from '../../store/users/usersSlice';
import { useAuthorizationContext } from '../../contexts/AuthorizationContext';
import FormControl from './components/FromControl';
import UsersTable from './components/UsersTable';

function Main() {
    const [selected, setSelected] = useState([]);

    const { users, status } = useSelector((state) => state.users);

    const { checkAuthorization } = useAuthorizationContext();

    const dispatch = useDispatch();

    function handleUserSelect(evt) {
        const id = Number(evt.target.value);
        setSelected((cur) =>
            cur.includes(id)
                ? cur.filter((elem) => elem !== id)
                : [...cur, Number(id)]
        );
    }

    function selectAll() {
        setSelected(users.map((user) => Number(user.id)));
    }

    function unselectAll() {
        setSelected([]);
    }

    function handleDispatch(fn) {
        dispatch(fn)
            .then(() => unselectAll())
            .then(() => checkAuthorization());
    }

    useEffect(() => {
        dispatch(getUsersData());
    }, [dispatch]);

    return (
        <Stack as="main" gap={4}>
            <h1 className="text-center">Users data table</h1>
            <Container>
                <Form>
                    <Stack gap={3}>
                        <FormControl
                            unselectAll={unselectAll}
                            selectAll={selectAll}
                            handleUsersBlock={handleDispatch.bind(null, toggleUsersBlock({ id: selected, block: true }))}
                            handleUsersUnblock={handleDispatch.bind(null, toggleUsersBlock({ id: selected, block: false }))}
                            handleUsersDelete={handleDispatch.bind(null, deleteUsers({ id: selected }))}
                            isValid={
                                selected.length > 0 && status !== 'pending'
                            }
                        />
                        {status === 'pending' && (
                            <Container className="my-5 py-5 d-flex justify-content-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            </Container>
                        )}
                        {status === 'fulfilled' && (
                            <UsersTable
                                handleSelect={handleUserSelect}
                                selected={selected}
                                users={users}
                                status={status}
                            />
                        )}
                    </Stack>
                </Form>
            </Container>
        </Stack>
    );
}

export default Main;
