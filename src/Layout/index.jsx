import React from 'react'
import Navbar from '../Component/Layout/Navbar'

function index({children}) {
  return (
    <div>
      <Navbar />
      {children}</div>
  )
}

export default index