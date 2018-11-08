import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';

import FetchButton from '../FetchButton';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('FetchButton', () => {
    it('should render without crashing', () => {
        shallow(<FetchButton />);
    });

    it('should be disable while loading data', () => {
        const component = render(<FetchButton loading />);
        expect(component).toMatchSnapshot();
    });

    it('should trigger onClick event when button is clicked', () => {
        const onClick = jest.fn();
        const component = shallow(<FetchButton onClick={onClick} />);
        component.simulate('click');

        expect(onClick).toBeCalled();
    });
});
