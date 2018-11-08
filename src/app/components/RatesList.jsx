import React from 'react';
import { map } from 'lodash';
import { Table } from 'semantic-ui-react';

import RateItem from './RateItem';
import RatesStatus from './RatesStatus';

const RatesList = ({ date, base, rates }) => (
    <Table striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={2} textAlign="center">
                    <RatesStatus base={base} date={date} />
                </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>Code</Table.HeaderCell>
                <Table.HeaderCell>Rate</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {map(rates, (rate, idx) => (
                <RateItem key={idx} rate={rate} />
            ))}
        </Table.Body>
    </Table>
);

export default RatesList;
