import { Form } from 'react-bootstrap';

function FormInput({
    type,
    label,
    placeholder,
    id,
    name,
    validation,
    value = '',
    error,
    handleChange,
}) {
    return (
        <Form.Group controlId={id}>
            <Form.Label column="lg">{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
                {...validation}
                size="lg"
                required={true}
                isInvalid={error}
                isValid={!error && value.length > 0}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default FormInput;
