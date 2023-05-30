import {
    SIGN_UP_API_URL,
    SIGN_IN_API_URL,
    CURRENT_USER_API_URL,
    USERS_API_URL,
    WRONG_LOGIN_CODE,
    FORBIDDEN_CODE,
    EMAIL_CONFLICT_CODE,
    DEFAULT_ERROR_CODE,
    WRONG_LOGIN_MESSAGE,
    USER_IS_BLOCKED_MESSAGE,
    EMAIL_CONFLICT_MESSAGE,
    DEFAULT_ERROR_MESSAGE,
    SIGN_OUT_API_URL,
    EMAIL_VALIDATION_MESSAGE,
    NAME_VALIDATION_MESSAGE,
    PASSWORD_VALIDATION_MESSAGE,
} from './constants';

import { object, string } from 'yup';

export const usersTableConfig = {
    cols: [
        '',
        'Id',
        'Username',
        'Email',
        'Last login',
        'Registration time',
        'Status',
    ],
};

export const routesConfig = {
    main: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
};

export const apiConfig = {
    users: USERS_API_URL,
    block: USERS_API_URL,
    delete: USERS_API_URL,
    singIn: SIGN_IN_API_URL,
    signUp: SIGN_UP_API_URL,
    signOut: SIGN_OUT_API_URL,
    currentUser: CURRENT_USER_API_URL,
};

export const validationConfig = {
    name: string()
        .min(2, NAME_VALIDATION_MESSAGE)
        .max(30, NAME_VALIDATION_MESSAGE)
        .required(),
    email: string().email(EMAIL_VALIDATION_MESSAGE),
    password: string().required(PASSWORD_VALIDATION_MESSAGE),
};

export const signFormConfig = {
    inputs: {
        [routesConfig.signUp]: [
            {
                type: 'text',
                label: 'Name',
                placeholder: 'Enter your name',
                id: 'name-input',
                name: 'name',
            },
            {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
                id: 'email-input',
                name: 'email',
            },
            {
                type: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                id: 'password-input',
                name: 'password',
            },
        ],
        [routesConfig.signIn]: [
            {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
                id: 'email-input',
                name: 'email',
            },
            {
                type: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                id: 'password-input',
                name: 'password',
            },
        ],
    },
    title: {
        [routesConfig.signIn]: 'Login',
        [routesConfig.signUp]: 'Register',
    },
    api: {
        [routesConfig.signIn]: apiConfig.singIn,
        [routesConfig.signUp]: apiConfig.signUp,
    },
    redirect: {
        [routesConfig.signIn]: routesConfig.main,
        [routesConfig.signUp]: routesConfig.signIn,
    },
    validation: {
        [routesConfig.signIn]: object({
            email: validationConfig.email,
            password: validationConfig.password,
        }),
        [routesConfig.signUp]: object({
            name: validationConfig.name,
            email: validationConfig.email,
            password: validationConfig.password,
        }),
    },
};

export const apiErrorsConfig = {
    [WRONG_LOGIN_CODE]: WRONG_LOGIN_MESSAGE,
    [FORBIDDEN_CODE]: USER_IS_BLOCKED_MESSAGE,
    [EMAIL_CONFLICT_CODE]: EMAIL_CONFLICT_MESSAGE,
    [DEFAULT_ERROR_CODE]: DEFAULT_ERROR_MESSAGE,
};
