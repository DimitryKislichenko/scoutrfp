const initialState = {
    error: null,
    rates: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Fetching was successfull, save rates
        case 'FETCH_RATES_SUCCESS': {
            return Object.assign({}, state, {
                rates: action.rates,
            });
        }
        // Fetching has failed, save error
        case 'FETCH_RATES_ERROR': {
            return Object.assign({}, state, {
                error: action.error,
            });
        }
        default: {
            return state;
        }
    }
};
