import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { entries, map } from 'lodash';

import RatesList from '../components/RatesList';

/**
 * Extract date and base currency, as also convert
 * rates into array of objects.
 */
const normalizeRates = withProps(({ error, rates }) => {
    if (error) return;

    return {
        date: rates.date,
        base: rates.base,
        rates: map(entries(rates.rates), ([rate, code]) => ({
            code,
            rate,
        })),
    };
});

export default compose(
    connect(({ rates }) => ({ ...rates })),
    normalizeRates,
)(RatesList);
