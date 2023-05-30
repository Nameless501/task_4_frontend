import { apiErrorsConfig } from './configs';

export function handleThunkPending(state) {
    state.status = 'pending';
}

export function handleThunkRejected(state, { payload }) {
    state.error = apiErrorsConfig[payload];
    state.status = 'rejected';
}

export function handleThunkFulfilled(state) {
    state.error = '';
    state.status = 'fulfilled';
}
