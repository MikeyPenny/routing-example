import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
    return (
        <div>
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Dashboard">Dashboard</Link>
        </div>
    )
}
