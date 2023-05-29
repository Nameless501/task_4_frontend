import { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useFormStateAndValidation(initialValue = {}) {
    const [inputsValue, setInputsValues] = useState(initialValue);

    const [errorMessages, setErrorMessages] = useState({});

    const [formIsValid, setFormValidity] = useState(false);

    const location = useLocation();

    function handleStoreValues(name, value) {
        setInputsValues((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleErrorMessage(name, message) {
        setErrorMessages((current) => ({
            ...current,
            [name]: message,
        }));
    }

    function handleValidation(evt, name, validationMessage) {
        const isValid = evt.target.closest('form').checkValidity();
        handleErrorMessage(name, validationMessage);
        setFormValidity(isValid);
    }

    function handleChange(evt) {
        const { name, value, validationMessage } = evt.target;
        handleStoreValues(name, value);
        handleValidation(evt, name, validationMessage);
    }

    const resetFormValues = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setInputsValues(newValues);
            setErrorMessages(newErrors);
            setFormValidity(newIsValid);
        },
        [setInputsValues, setErrorMessages, setFormValidity]
    );

    useEffect(() => {
        resetFormValues();
    }, [location, resetFormValues]);

    return {
        inputsValue,
        errorMessages,
        formIsValid,
        handleChange,
        resetFormValues,
    };
}

export default useFormStateAndValidation;
