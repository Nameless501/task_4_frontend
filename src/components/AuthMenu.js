import { Nav, ButtonToolbar, Button, Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { routesConfig } from '../utils/configs';

function AuthMenu() {
    const navigate = useNavigate();

    return (
        <Nav>
            <ButtonToolbar>
                <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" onClick={() => navigate(routesConfig.signIn)}>
                        Sign-in
                    </Button>
                    <Button variant="success" onClick={() => navigate(routesConfig.signUp)} >Sign-up</Button>
                </Stack>
            </ButtonToolbar>
        </Nav>
    );
}

export default AuthMenu;
