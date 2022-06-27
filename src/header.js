import React from 'react'
import {Link} from 'react-router-dom'

function header() {
  return (
    <div className='navBar'>
        <h1><Link to="/" style={{color: "white"}}>DSA Sheet Tracker</Link></h1>
    </div>
  )
}

export default header