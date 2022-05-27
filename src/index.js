/**
 Challenge:  Project setup

 

 -Import and render the App component inside of index.js using ReactDOM
 -At this point have the "Navbar goes here". Showing up in the mid-browser.

 Go to Google fonts and get the "Inter font" with weights 400, 600 and 700.
 Put the links to those fonts ABOVE the style.css link in index.html

 -Use the <link /> elemsts instead of the  or npm options for getting the fonts
 


 */

import React from 'react'

import ReactDOM from 'react-dom'
// import Navbar from './Navbar';
// import Main from './Main';

import App from './App'
// import Navbar from './Navbar'
// import Main from './Main'
// import './index.css'

const page = ReactDOM.createRoot(document.getElementById('root'));
page.render(
    <React.StrictMode>
         <App /> 
        
       
    </React.StrictMode>
)




        
    




