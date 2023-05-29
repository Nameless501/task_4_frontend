import { Button, OverlayTrigger, Tooltip, ButtonGroup } from 'react-bootstrap';

function IconButton({ variant, icon: Icon, tooltip, handleClick, disabled }) {
    return (
        <OverlayTrigger placement="top" overlay={<Tooltip>{tooltip}</Tooltip>}>
            <ButtonGroup>
                <Button
                    variant={variant}
                    onClick={handleClick}
                    disabled={disabled}
                >
                    <Icon />
                </Button>
            </ButtonGroup>
        </OverlayTrigger>
    );
}

export default IconButton;
