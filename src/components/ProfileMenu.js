import { Stack, Button, Alert } from 'react-bootstrap';

function ProfileMenu({ user, handleClick, disabled }) {
    return (
        <Stack direction="horizontal" gap={2}>
            <Alert variant="light" className="py-1 px-2 m-0">
                {user.email}
            </Alert>
            <Button variant="danger" onClick={handleClick} disabled={disabled} >
                Sign out
            </Button>
        </Stack>
    );
}

export default ProfileMenu;
