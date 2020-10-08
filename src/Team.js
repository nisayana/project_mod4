import React from 'react'

// Class Component: Need a function called 'render' that returns ONE chunk of JSX
    // Class Components should be capitilized
    // Class Components gets their props via `this.props` 

// State (its an attribure of the instance (oop/class), its always an object{someKey: initialValue}) can only exist inside of a class component
// Anything dynamically rendered in your frontend app should come from state somewhere
    // setState -> triggers a rerender -> modifies the DOM



class Team extends React.Component{
    //event listeners should be defined in the same component as its being passed in

    // Creating an instance method to pass in not anonoumous funciton into onClick
    // evt.target - which specfic element has been clicked, evt.currentTarget - which element has an eventListener on it
        // your event listeners inside class components should be arrow functions

    // state = {
    //     count: 10
    // }

    // handleOrderClick = (evt) => {
    //     // Using arrow functions ,ake `this` the instance
    //         // Using `bind` is annoying
    //     // console.log("THIS INSIDE EVENT LISTENER", this)
    //     // console.log(evt.currentTarget)

    //     // Any time that state needs to change, use `this.setState`
    //         // setState triggers a rerender 
    //         // first option:
    //     let partialStateObj = {count: this.state.count + 1}
    //     this.setState(partialStateObj)

    //     // SECOND ARGUMENT OF this.setState is a callback (seState is async)
    //     // this.setState({}, => {
    //         // what to do after state has changed
    //     // })

    //     // Any time that your new state is dependent on your old state, you might want to use functional setState
    //         // the return value of the callback is a POJO
    //         // That POJO gets merged into old state

    //         // second option:
    //     // this.setState((oldState) => {
    //     //     return {
    //     //         count: oldState.count + 1
    //     //     }
    //     // })


    //     // DONT DO THIS
    //     // this.state.count += 1

    // }

    handleOrderClick = (evt) => {
        console.log("later")
    }

    render() {
        console.log(this.props, "TEAM PROPS")
        let {teamName, games} = this.props.team

        // console.log("FROM RENDER", this)
        // console.log(this.props.teamName)
        // In class components write your console.log above your return, below your render
        return(
            <li className="container">

                <img src="https://img.jakpost.net/c/2019/05/16/2019_05_16_72382_1557949331._large.jpg" alt="laliga"/>
                <p>Team Name: <span>{this.props.team.teamName}</span></p>
                <button onClick={this.handleOrderClick}>
                    Games: {this.props.team.games}
                    </button>
            </li>
        )
    }
}

export default Team