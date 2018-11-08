import React from 'react';
import { Container } from 'semantic-ui-react';

import { ReduxProvider } from '../../providers';
import RatesList from '../containers/RatesList';
import FetchButton from '../containers/FetchButton';

const App = () => (
    <ReduxProvider>
        <Container>
            <FetchButton />
            <RatesList />
        </Container>
    </ReduxProvider>
);

export default App;
