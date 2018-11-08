import React from 'react';
import styled from 'styled-components';
import { Statistic } from 'semantic-ui-react';

const StyledStatisticGroup = styled(Statistic.Group)`
    justify-content: center;
`;

const RatesStatus = ({ date, base }) => (
    <StyledStatisticGroup size="small">
        <Statistic>
            <Statistic.Label>Date</Statistic.Label>
            <Statistic.Value>{date || 'Unknown'}</Statistic.Value>
        </Statistic>
        <Statistic>
            <Statistic.Label>Base</Statistic.Label>
            <Statistic.Value>{base || 'Unknown'}</Statistic.Value>
        </Statistic>
    </StyledStatisticGroup>
);

export default RatesStatus;
