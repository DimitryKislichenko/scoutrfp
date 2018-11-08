import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { fetchRatesAsync } from '../rates';

describe('fetchRatesAsync', () => {
    it('shuld log an error, if it failed to fetch rates', () => {
        const error = new Error('Some error');

        return expectSaga(fetchRatesAsync)
            .provide([[matchers.call.fn(fetch), throwError(error)]])
            .put({ type: 'FETCH_RATES_ERROR', error: 'Some error' })
            .dispatch({ type: 'FETCH_RATES' })
            .run();
    });

    it('should fetch rates and save them in store', () => {
        const json = {
            date: '2018-11-07',
            base: 'EUR',
            rates: { BGN: 1.9558 },
        };

        const fakeRates = {
            json: () => Promise.resolve(json),
        };

        return expectSaga(fetchRatesAsync)
            .provide([[matchers.call.fn(fetch), fakeRates]])
            .put({ type: 'FETCH_RATES_SUCCESS', rates: json })
            .dispatch({ type: 'FETCH_RATES' })
            .run();
    });
});
