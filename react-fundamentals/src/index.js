import React from 'react'
import ReactDOM from 'react-dom/client'

// Normal function to create the documents:
// function Greeting() {
//   return <h1>MyFirst Components</h1>
// }

//  Create the function and return the element using javscript react methods:
// function Greeting() {
//   return React.createElement('h1', {}, 'Hello World')
// }

// Adding jsx methods uisng react javascript

function Greeting() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
