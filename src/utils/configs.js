import { SIGN_UP_API_URL, SIGN_IN_API_URL, USERS_API_URL } from './constants';

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
};
