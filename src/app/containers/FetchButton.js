import { connect } from 'react-redux';

import FetchButton from '../components/FetchButton';

// An action to trigger rates fetching
const fetchRates = () => ({
    type: 'FETCH_RATES',
});

export default connect(
    null,
    { onClick: fetchRates },
)(FetchButton);
