import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import { ReduxProvider } from '../../providers';
import RatesList from '../containers/RatesList';
import FetchButton from '../containers/FetchButton';

const StyledContainer = styled(Container)`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const App = () => (
    <ReduxProvider>
        <StyledContainer>
            <FetchButton />
            <RatesList />
        </StyledContainer>
    </ReduxProvider>
);

export default App;
