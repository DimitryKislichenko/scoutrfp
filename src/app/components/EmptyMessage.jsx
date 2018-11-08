import React from 'react';

import { Message } from 'semantic-ui-react';

/**
 * Message to show if provided list of rates is empty
 */
const EmptyMessage = () => (
    <Message warning>
        List of rates is empty, try to click refresh button
    </Message>
);

export default EmptyMessage;
