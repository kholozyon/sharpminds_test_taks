import React from 'react';
import '../assets/styles/index.sass';
import Tabs from '../shared/components/tabs/Tabs.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Tabs/>
        </div>
      </div>
    );
  }
}

export default App;
