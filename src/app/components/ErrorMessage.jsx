import React from 'react';

import { Message, List } from 'semantic-ui-react';

const ErrorMessage = ({ reason }) => (
    <Message error>
        <p>Failed to load list of rates</p>
        <List bulleted>
            <List.Item>{reason}</List.Item>
        </List>
    </Message>
);

export default ErrorMessage;
