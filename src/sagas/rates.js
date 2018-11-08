import { takeLatest, put } from 'redux-saga/effects';

const RATES_API_URL = 'https://api.exchangeratesapi.io/latest';

/**
 * Fetch exchange rates and place them in redux cache.
 */
export function* fetchRatesAsync() {
    try {
        const rates = yield fetch(RATES_API_URL);
        yield put({ type: 'FETCH_RATES_SUCCESS', rates });
    } catch (error) {
        yield put({ type: 'FETCH_RATES_ERROR', error });
    }
}

export function* watchFetchRatesAsync() {
    yield takeLatest('FETCH_RATES', fetchRatesAsync);
}
