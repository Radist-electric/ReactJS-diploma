import React from 'react';
import {Row} from 'reactstrap';
import {mount} from 'enzyme';
import CoffeeService from '../../services/coffeeService';

describe('Testing <CoffeeItem/>', () => {
    const service = new CoffeeService();
    const list = mount(<Row>
        {/* getData={service.getAllCoffee} */}
        onCoffeeLoaded={service.getAllCoffee}
        </Row>);
    // const item = shallow(<CoffeeItem/>);
    describe('Testing snap & state', () => {
        it('CoffeeItem has rendered correctly', () => {
            expect(list).toMatchSnapshot();
        });
    });
});