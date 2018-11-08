import React from 'react';
import { Button } from 'semantic-ui-react';

const FetchButton = ({ onClick }) => (
    <Button onClick={onClick} size="big" primary fluid>
        Fetch Rates
    </Button>
);

export default FetchButton;
