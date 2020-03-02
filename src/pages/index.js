import React from "react"
import { Link } from "gatsby"

const index = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>
        I'm Andrew, a full-stock developer living in beautiful Philadelphia
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </div>
  )
}

export default index
