import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <div className="logotext">{props.logotext}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>More</li>
        </ul>
    </div>
  )
}

export default Navbar
