import React from 'react'

// Class components can have state

// Controled Components -
    // State cotmrolling input - `value`
    // Input controlling state - `onChange`

// Foro you to use `evt.target.name`, the keys of your state has to match the name of your inputs

class Form extends React.Component{

    state = {
        teamName: "",
        games: 4
    }

    handleInputChange = (evt) => {
        // console.log(evt.target.value)
        this.setState({
            [evt.target.name]: evt.target.value
        })

        //evt.target.value is only going to return strings
            // parseInt to turn it into number
    }

    render(){
        return(
            <div>
                <h2>Create a new team</h2>
                <form>
                    <label htmlFor="t_name">Name</label>
                    <input type="text" 
                    id="t_name" 
                    value={this.state.teamName} 
                    onChange={this.handleInputChange}
                    name="teamName"
                    />
                    <label htmlFor="t_game">Game</label>
                    <input type="number" 
                    id="t_game" 
                    value={this.state.games}
                    onChange={this.handleInputChange}
                    name="games"
                    />
                    <input type="submit" value="Create a new team"/>
                </form>
            </div>
            
        )
    }

}

export default Form