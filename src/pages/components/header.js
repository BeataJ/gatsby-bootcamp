import React from "react"
import Link from "gatsby"

const Header = () => {
  return (
    <header>
      <h2>Header</h2>
      <Link to="/src/pages/index.js">Home</Link>
      <Link to="/src/pages/contact.js">Contact</Link>
      <Link to="/src/pages/blog.js">Blog</Link>
      <Link to="/src/pages/about.js">About</Link>
    </header>
  )
}

export default Header
