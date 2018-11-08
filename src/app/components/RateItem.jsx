import React from 'react';

const RateItem = ({ rate }) => (
    <tr>
        <td>{rate.code}</td>
        <td>{rate.rate}</td>
    </tr>
);

export default RateItem;
