import { useSelector, useDispatch } from "react-redux";
import { Stack, Button, Alert } from 'react-bootstrap';

function ProfileMenu() {
    const { user } = useSelector((state) => state.authentication);

    return (
        <Stack direction="horizontal" gap={2}>
            <Alert vaian='primary' className="py-1 px-2 m-0">
                {user.email}
            </Alert>
            <Button variant="danger">
                Sign out
            </Button>
        </Stack>
    );
}

export default ProfileMenu;