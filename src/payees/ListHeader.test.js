import React from 'react';
import { ListHeader } from './PayeesList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ListHeader', () => {
  let config, mockHandler;

  beforeEach(() => {
    config = {
      field: 'name',
      label: 'First Name',
    };

    mockHandler = jest.fn();
  });

  it('should be a basic test', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5);
  });

  it('should render a table header', () => {
    const wrapper = shallow(<ListHeader config={config} />);
    expect(wrapper.text()).toBe(config.label);
  });

  it('should fire the sortData custom event', () => {
    const wrapper = shallow(
      <ListHeader config={config} sortData={mockHandler} />
    );

    expect(mockHandler).not.toHaveBeenCalled();
    expect(mockHandler.mock.calls).toHaveLength(0);
    wrapper.find('th').simulate('click');
    expect(mockHandler).toHaveBeenCalled();
    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0]).toBe(config.field);
  });
});
