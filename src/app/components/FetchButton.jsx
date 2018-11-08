import React from 'react';
import { Button } from 'semantic-ui-react';

const FetchButton = ({ loading, onClick }) => (
    <Button onClick={onClick} disabled={loading} size="big" primary fluid>
        Fetch Rates
    </Button>
);

export default FetchButton;
