import React from 'react';
import { ReduxProvider } from '../../providers';

import RatesList from '../containers/RatesList';
import FetchButton from '../containers/FetchButton';

const App = () => (
    <ReduxProvider>
        <div>
            <FetchButton />
            <RatesList />
        </div>
    </ReduxProvider>
);

export default App;
