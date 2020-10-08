// Requiring specific classes/objects from packages
  //Ruby 'require'
import React from 'react'; // Always need to import this line, we import from the package
import ReactDOM from 'react-dom'; // Only here

// Importing things from other files
import './index.css';
import App from './App';

// let h1Object = <h1 id="chicken">Hello <span>World</span></h1>
// let secondh1Object = React.createElement("h1", {id: "chicken"}, "Hello World!!!")
// console.log(secondh1Object)
// console.log(h1Object)

ReactDOM.render(
  < App />, //JSX - we can write JS code as if its HTML
  document.getElementById('root')
);


