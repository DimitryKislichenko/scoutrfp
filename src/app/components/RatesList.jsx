import React from 'react';
import { map } from 'lodash';

import RateItem from './RateItem';

const RatesList = ({ date, base, rates }) => (
    <table>
        <thead>
            <tr>
                <th colSpan={2}>
                    Date: {date}; Base {base}
                </th>
            </tr>
            <tr>
                <th>Code</th>
                <th>Rate</th>
            </tr>
        </thead>
        <tbody>
            {map(rates, (rate, idx) => (
                <RateItem key={idx} rate={rate} />
            ))}
        </tbody>
    </table>
);

export default RatesList;
