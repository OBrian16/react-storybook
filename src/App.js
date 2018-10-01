import React, { Component } from 'react';
import Table from './components/Table';

class App extends Component {
  render() {
      const characters = [
        {
          'name': 'Tommie',
          'job': 'Sales Manager'
        },
        {
          'name': 'Jammie',
          'job': 'Club Owner'
        },
        {
          'name': 'Angela',
          'job': 'Attoney'
        },
        {
          'name': 'Dre',
          'job': 'Distro'
        },
      ];

      return (
          <div className="container">
            <Table characterData={characters} />
          </div>
      );
  }
}

export default App;