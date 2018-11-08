import React from 'react';
import { Table } from 'semantic-ui-react';

const RateItem = ({ rate }) => (
    <Table.Row>
        <Table.Cell>{rate.code}</Table.Cell>
        <Table.Cell>{rate.rate}</Table.Cell>
    </Table.Row>
);

export default RateItem;
