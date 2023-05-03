import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Item from "../pages/Item";
import Login from "../pages/Login";

const RoutesTemplate = () => {

  const checkUser = () => {
    if (localStorage.getItem('userToken') == null && window.location.pathname !== '/login') {
      window.location.href = '/login'
    } else if (localStorage.getItem('userToken') != null && window.location.pathname === '/login') {
      window.location.href = '/'
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/item" element={<Item/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesTemplate;
