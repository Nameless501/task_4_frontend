import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handleAuthorization } from '../../../store/currentUser/currentUserSlice';
import AuthorizationContext from '../context/AuthorizationContext';
import { apiConfig } from '../../../utils/configs';

export function AuthorizationContextProvider({ children }) {
    const dispatch = useDispatch();

    const checkAuthorization = useCallback(() => {
        dispatch(handleAuthorization(apiConfig.currentUser));
    }, [dispatch]);

    useEffect(() => {
        checkAuthorization();
    }, [checkAuthorization]);

    return (
        <AuthorizationContext.Provider value={{ checkAuthorization }}>
            {children}
        </AuthorizationContext.Provider>
    );
}
