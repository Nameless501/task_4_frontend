import { useSelector, useDispatch } from 'react-redux';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { handleSignOut } from '../store/currentUser/currentUserSlice';
import AuthMenu from './AuthMenu';
import ProfileMenu from './ProfileMenu';
import { SiTask } from 'react-icons/si';
import { routesConfig, apiConfig } from '../utils/configs';

function Header() {
    const { user, status, isAuthorized } = useSelector((state) => state.currentUser);

    const dispatch = useDispatch();

    return (
        <Navbar expand="md" bg="dark" variant="dark">
            <Container>
                <Link to={routesConfig.main}>
                    <Navbar.Brand className="d-inline-block">
                        <SiTask /> Task 4
                    </Navbar.Brand>
                </Link>
                {isAuthorized ? (
                    <ProfileMenu
                        handleClick={() =>
                            dispatch(handleSignOut(apiConfig.signOut))
                        }
                        user={user}
                        disabled={status === 'pending'}
                    />
                ) : (
                    <AuthMenu />
                )}
            </Container>
        </Navbar>
    );
}

export default Header;
