import React from 'react';
import Header from './Header'
import TeamContainer from './TeamContainer'
import Team from './Team'
import arrayOfTeams from './database'
import Form from './Form'
import './App.css';

// arrayOfTeams -> [{}, {}, {}]
// arrayOfTeams needs to be saved to state somewhere, so we can dynamically decide of the umber of store render
// Only class components can have state

// Props is info coming from a Parent Component down to its children
  // Info thats passed when the component is created
    // Props is always received as a POJO

// jS code can be interpolated in JSX with {}

// Parent's state can be sent down as props
  // state -> props (OK)
// Child's props should not become child's state
  // props -> state (X)


class App extends React.Component {

  state = {
    teams: arrayOfTeams
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        < Header title="Here are the soccer teams"/> 
        < Form />
        < TeamContainer teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
