export const BASE_API_URL = 'https://task4api-production.up.railway.app';

export const SIGN_UP_API_URL = BASE_API_URL + '/signup';

export const SIGN_IN_API_URL = BASE_API_URL + '/signin';

export const SIGN_OUT_API_URL = BASE_API_URL + '/signout';

export const CURRENT_USER_API_URL = BASE_API_URL + '/authorization';

export const USERS_API_URL = BASE_API_URL + '/users';

export const WRONG_LOGIN_MESSAGE = 'Неправильные почта или пароль';

export const USER_IS_BLOCKED_MESSAGE =
    'Ошибка доступа: данный аккаунт заблокирован';

export const EMAIL_CONFLICT_MESSAGE = 'Такой email уже зарегистрирован';

export const DEFAULT_ERROR_MESSAGE =
    'Произошла ошибка. Попробуйте повторить попытку позже.';

export const WRONG_LOGIN_CODE = 401;

export const FORBIDDEN_CODE = 403;

export const EMAIL_CONFLICT_CODE = 409;

export const DEFAULT_ERROR_CODE = 500;

export const CREATED_CODE = 201;

export const DATA_UPDATED_CODE = 204;

export const EMAIL_VALIDATION_MESSAGE = 'Must be a valid email';

export const NAME_VALIDATION_MESSAGE = 'Must be from 2 to 30 characters';

export const PASSWORD_VALIDATION_MESSAGE = 'Required field';
