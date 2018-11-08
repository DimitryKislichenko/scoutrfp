const initialState = {
    error: null,
    loading: false,
    rates: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Reset to initia state and turn on loading status
        case 'FETCH_RATES': {
            return Object.assign({}, initialState, {
                loading: true,
            });
        }
        // Fetching was successfull, save rates
        case 'FETCH_RATES_SUCCESS': {
            return Object.assign({}, state, {
                loading: false,
                rates: action.rates,
            });
        }
        // Fetching has failed, save error
        case 'FETCH_RATES_ERROR': {
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        }
        default: {
            return state;
        }
    }
};
