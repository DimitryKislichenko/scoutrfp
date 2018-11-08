import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';

import RatesList from '../RatesList';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('RatesList', () => {
    it('should render without crashing', () => {
        shallow(<RatesList />);
    });

    it('should show spinner while loading data', () => {
        const component = render(<RatesList loading />);
        expect(component).toMatchSnapshot();
    });

    it('should show warning if list of rates is empty', () => {
        const component = render(<RatesList rates={[]} />);
        expect(component).toMatchSnapshot();
    });

    it('should show error if was unable to fetch rates', () => {
        const component = render(<RatesList error="Some error" />);
        expect(component).toMatchSnapshot();
    });

    it('should show rates if data was successfully loaded', () => {
        const component = render(
            <RatesList base="EUR" date="2018-11-08" rates={[{ EUR: '1' }]} />,
        );
        expect(component).toMatchSnapshot();
    });
});
