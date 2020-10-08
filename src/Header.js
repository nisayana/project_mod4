import React from 'react'

// Functional Component: Function that returns ONE chunk of JSX (<></>)
    // The function name should be capitilized
    // Fucnctional componennts get their props from the argument of the function 

function Header(props) {
    return ( <h1>{props.title}</h1>)
}

//Write your export

export default Header