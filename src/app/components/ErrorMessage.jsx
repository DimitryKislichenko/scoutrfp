import React from 'react';

import { Message, List } from 'semantic-ui-react';

/**
 * An error to show if something bad has pappened while fetching rates
 */
const ErrorMessage = ({ reason }) => (
    <Message error>
        <p>Failed to load list of rates</p>
        <List bulleted>
            <List.Item>{reason}</List.Item>
        </List>
    </Message>
);

export default ErrorMessage;
