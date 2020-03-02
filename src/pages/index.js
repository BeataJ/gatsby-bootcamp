import React from "react"
import { Link } from "gatsby"

import Footer from "./components/footer"
import Header from "./components/header"

const index = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>
        I'm Andrew, a full-stock developer living in beautiful Philadelphia
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default index
