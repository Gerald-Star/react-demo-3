/**Building the main section 
 Plce the react gray logo in the background.

 Don't use an img elelment but rather set it as background image of the
 main element.

 Hint: Use the following properties-
 -background-image
 -background-repeat
 -bacground-position

 or the shorthand



*/


import React from 'react';
import './main.css'

export default function Main() {
  return (
    <div>
      <main>
        <h1 className='main--title'>Fun facts about React</h1>
        <ul className='main--facts'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walker</li>
          <li>Over 100k stars on Github</li>
          <li>Maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
          
      
      </div>
  )
}
