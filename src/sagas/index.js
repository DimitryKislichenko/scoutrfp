import { all } from 'redux-saga/effects';

import { watchFetchRatesAsync } from './rates';

// Combine all sagas for starting them all together
export default function* rootSaga() {
    yield all([watchFetchRatesAsync()]);
}
