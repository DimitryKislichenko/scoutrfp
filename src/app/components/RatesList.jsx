import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { map, isEmpty } from 'lodash';
import { Table, Loader } from 'semantic-ui-react';

import RateItem from './RateItem';
import RatesStatus from './RatesStatus';
import ErrorMessage from './ErrorMessage';
import EmptyMessage from './EmptyMessage';

const RatesList = ({ date, base, rates }) => (
    <Table fixed striped>
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

/**
 * Spinner to show whole loading list of rates
 */
const Spinner = () => (
    <Loader size="big" content="Loading, please wait..." active />
);

// Show spinner while loading list of rates
const withSpinner = branch(({ loading }) => loading, renderComponent(Spinner));

// Show message clarifying that list of rates is empty
const withEmptyMessage = branch(
    ({ rates }) => isEmpty(rates),
    renderComponent(EmptyMessage),
);

/**
 * Show error message if there is any
 */
const withErrorMessage = branch(
    ({ error }) => !!error,
    renderComponent(({ error }) => <ErrorMessage reason={error} />),
);

export default compose(
    withSpinner,
    withErrorMessage,
    withEmptyMessage,
)(RatesList);
