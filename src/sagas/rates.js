import { takeLatest, put, call } from 'redux-saga/effects';

const RATES_API_URL = 'https://api.exchangeratesapi.io/latest';

/**
 * Fetch exchange rates and place them in redux cache.
 */
export function* fetchRatesAsync() {
    try {
        const response = yield call(fetch, RATES_API_URL);
        const rates = yield call([response, 'json']);

        yield put({ type: 'FETCH_RATES_SUCCESS', rates });
    } catch (error) {
        yield put({ type: 'FETCH_RATES_ERROR', error: error.message });
    }
}

export function* watchFetchRatesAsync() {
    yield takeLatest('FETCH_RATES', fetchRatesAsync);
}
