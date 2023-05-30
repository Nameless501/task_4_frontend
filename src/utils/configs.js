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
} from './constants';

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

export const signFormConfig = {
    inputs: {
        [routesConfig.signUp]: [
            {
                type: 'text',
                label: 'Name',
                placeholder: 'Enter your name',
                id: 'name-input',
                name: 'name',
                validation: {
                    minLength: 2,
                    maxLength: 30,
                },
            },
            {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
                id: 'email-input',
                name: 'email',
                validation: {},
            },
            {
                type: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                id: 'password-input',
                name: 'password',
                validation: {},
            },
        ],
        [routesConfig.signIn]: [
            {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
                id: 'email-input',
                name: 'email',
                validation: {},
            },
            {
                type: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                id: 'password-input',
                name: 'password',
                validation: {},
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
};

export const apiErrorsConfig = {
    [WRONG_LOGIN_CODE]: WRONG_LOGIN_MESSAGE,
    [FORBIDDEN_CODE]: USER_IS_BLOCKED_MESSAGE,
    [EMAIL_CONFLICT_CODE]: EMAIL_CONFLICT_MESSAGE,
    [DEFAULT_ERROR_CODE]: DEFAULT_ERROR_MESSAGE,
};
