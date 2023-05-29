import { useSelector } from "react-redux";
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AuthMenu from './AuthMenu';
import ProfileMenu from "./ProfileMenu";
import { SiTask } from 'react-icons/si'
import { routesConfig } from '../utils/configs';

function Header() {
    const { isAuthorized } = useSelector((state) => state.authentication);

    return (
        <Navbar expand="md" bg="dark" variant="dark">
            <Container>
                <Link to={routesConfig.main}>
                    <Navbar.Brand className="d-inline-block">
                        <SiTask />
                        {' '}
                        Task 4
                    </Navbar.Brand>
                </Link>
                {
                    isAuthorized ?
                        <ProfileMenu />
                        :
                        <AuthMenu />
                }
            </Container>
        </Navbar>
    );
}

export default Header;
