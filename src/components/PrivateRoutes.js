import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routesConfig } from '../utils/configs';

function PrivateRoutes() {
    const { isAuthorized } = useSelector((state) => state.authentication);

    return isAuthorized ? <Outlet /> : <Navigate to={routesConfig.signIn} />;
}

export default PrivateRoutes;
