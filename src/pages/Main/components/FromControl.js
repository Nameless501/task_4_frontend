import {
    Container,
    ButtonGroup,
    Button,
    ButtonToolbar,
    Stack,
} from 'react-bootstrap';
import IconButton from './IconButton';
import { FiLock, FiUnlock } from 'react-icons/fi';
import { BiBlock } from 'react-icons/bi';

function FormControl({
    selectAll,
    unselectAll,
    handleUsersBlock,
    handleUsersUnblock,
    handleUsersDelete,
    isValid,
}) {
    return (
        <Container className="px-0 d-flex justify-content-between align-items-end">
            <ButtonToolbar>
                <Stack direction="horizontal" gap={1}>
                    <Button variant="secondary" size="sm" onClick={selectAll}>
                        Select all
                    </Button>
                    <Button variant="secondary" size="sm" onClick={unselectAll}>
                        Unselect all
                    </Button>
                </Stack>
            </ButtonToolbar>
            <ButtonGroup>
                <IconButton
                    variant="secondary"
                    icon={FiUnlock}
                    tooltip="Unblock users"
                    handleClick={handleUsersUnblock}
                    disabled={!isValid}
                />
                <IconButton
                    variant="secondary"
                    icon={FiLock}
                    tooltip="Block users"
                    handleClick={handleUsersBlock}
                    disabled={!isValid}
                />
                <IconButton
                    variant="secondary"
                    icon={BiBlock}
                    tooltip="Delete users"
                    handleClick={handleUsersDelete}
                    disabled={!isValid}
                />
            </ButtonGroup>
        </Container>
    );
}

export default FormControl;
