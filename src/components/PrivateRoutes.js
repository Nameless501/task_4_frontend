import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routesConfig } from '../utils/configs';
import { Spinner, Container } from 'react-bootstrap';

function PrivateRoutes() {
    const [isAllowed, setIsAllowed] = useState();

    const { status, isAuthorized } = useSelector((state) => state.currentUser);

    useEffect(() => {
        if (status !== 'pending' && status !== 'idle') {
            setIsAllowed(isAuthorized);
        }
    }, [isAuthorized, status]);

    if (isAllowed === undefined)
        return (
            <Container className="mt-5 d-flex justify-content-center">
                <Spinner animation="border" role="status" />
            </Container>
        );

    return isAllowed ? <Outlet /> : <Navigate to={routesConfig.signIn} />;
}

export default PrivateRoutes;
