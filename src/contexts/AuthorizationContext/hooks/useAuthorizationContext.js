import { useContext } from 'react';
import AuthorizationContext from '../context/AuthorizationContext';

export function useAuthorizationContext() {
    const contextValue = useContext(AuthorizationContext);
    return { ...contextValue };
}
