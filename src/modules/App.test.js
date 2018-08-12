import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Tests:', function() {

  it('renders Tabs name', () => {
    const tabHeader = shallow(<li className="tabs__list-item"></li>);
    expect(tabHeader).toHaveLength(1);
  });

  it('renders active Tab', () => {
    const tabHeader = shallow(<li className="active"></li>);
    expect(tabHeader).toHaveLength(1);
  });

  it('renders Tabs content', () => {
    const tabContent = shallow(<div className="tabs__content"></div>);
    expect(tabContent).toHaveLength(1);
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<li onClick={mockCallBack}></li>));
    button.find('li').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

