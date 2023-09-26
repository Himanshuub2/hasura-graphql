// import { GoogleLogin } from '@react-oauth/google';
// import { useEffect, useState } from 'react';
// import {Button, styled} from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";

import Admin from "./component/Admin/Admin";
import User from "./component/User/User";
import Home from "./component/Home/Home";

export default function App() {

  const [auth,setAuth] = useState("")
  return (
    <div>
      <BrowserRouter>
      {console.log(auth.access_token)}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isAuth = {setAuth}/>} />
          
            
            <>
            <Route path="/admin" element={<Admin />} />
            {
            auth !=="" ?
            <Route path="/customer" element={<User />} />
            :
            <Route path ='/notsigned' element={<h1>Authenticate yourself first</h1>} />
            
          }
            </>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
