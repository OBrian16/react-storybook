import React, { Component } from 'react';
import Table from './components/Table';

class App extends Component {
  state = {
    characters: [
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
    ]
  };

  // removeCharacter = index => {
  //   return (
  //     <div className="container">
  //       <Table
  //         characterData={characters}
  //         removeCharacter={this.removeCharacter}
  //       />
  //     </div>
  //   );
  //   const { characters } = this.state;

  //   this.setState({
  //     characters: characters.filter((character, i) => {
  //       return i !== index;
  //     })
  //   });
  // }

  render() {
    let { characters } = this.state;
    let removeCharacter = index => {
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index;
        })
      })
    }

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={removeCharacter}
        />
      </div>
    );
  }
}


export default App;