import React from 'react'

function Navbar() {
  return (
    <nav
        style={{
          fontFamily: "Roboto",
          textAlign: "center",
          backgroundImage: "linear-gradient(violet,#f7eef7)",
          height: "60px",
          lineHeight: "60px",
        }}
      >
        <h1 style={{ color: "black" }}>GraphQL-Hasura</h1>
      </nav>
  )
}

export default Navbar