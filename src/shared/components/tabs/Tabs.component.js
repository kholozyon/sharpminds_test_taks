import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = [
      {
        header: 'Tab 1',
        body: 'Tab content 1'
      },
      {
        header: 'Tab name 2 loooong',
        body: 'Tab content 2 lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor'
      },
      {
        header: 'Tab name 3',
        body: 'Tab content 3 lorem ipsum dolor lorem ipsum dolor'
      },
      {
        header: 'Tab name 4',
        body: 'Tab content 4'
      },
    ];
    this.state = {
      activeTab: 0,
    };
  }

  changeTab = (key) => {
    this.setState({
      activeTab: key,
    });
  };

  render() {
    return (
      <div className="tabs">

        {/* tabs names */}
        <ul className="tabs__list">
          {this.tabs.map((item, key) => {
            return (
              <li className={this.state.activeTab === key ? 'tabs__list-item active' : 'tabs__list-item'} key={key}
                  onClick={() => this.changeTab(key)}>
                {item.header}
              </li>
            );
          })}
        </ul>

        {/*tabs content*/}
        <div className="tabs__content">
          {this.tabs[this.state.activeTab].body}
        </div>
      </div>
    );
  }
}