import { Routes, Route, Navigate } from 'react-router-dom';
import { Stack } from 'react-bootstrap'
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';
import Main from './pages/Main';
import Sign from './pages/Sign';
import { routesConfig } from './utils/configs';

function App() {
    return (
        <Stack gap={5}>
            <Header />
            <Routes>
                <Route element={<PrivateRoutes />} >
                    <Route path={routesConfig.main} element={<Main />} exact />
                </Route>
                <Route path={routesConfig.signIn} element={<Sign />} />
                <Route path={routesConfig.signUp} element={<Sign />} />
                <Route path="*" element={<Navigate to={routesConfig.main} replace />} />
            </Routes>
        </Stack>
    );
}

export default App;
