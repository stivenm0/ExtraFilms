import React from 'react'
import Nav  from '../Nav'
import {  Outlet } from "react-router-dom";

function Layout() {
  

  return (<>
    <Nav></Nav>
    <Outlet  ></Outlet>
    </>
  )
}

export default Layout