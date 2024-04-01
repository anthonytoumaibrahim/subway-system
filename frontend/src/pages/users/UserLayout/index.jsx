import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import React from 'react'

const UserLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default UserLayout