import React from 'react'
import arrayOfTeams from './database'
import Team from './Team'

// class components can have state, functional cant
// functional components dont need a word RENDER

// Inside a functional component, `this` is udefined 

function TeamContainer(props){
    // [{}, {}, {}, {}] -> [<>, <>, <>, <>]
    // console.log(props.stores)
    let arrayOfComponents = props.teams.map((singularTeamObj) => {
        return <Team key={singularTeamObj.id} team={singularTeamObj}/>
    })
    return(
        <ul>
            {arrayOfComponents}
        </ul>
    )
}

export default TeamContainer