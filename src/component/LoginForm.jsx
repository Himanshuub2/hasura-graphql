import { TextField,Button, styled } from '@mui/material'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Wrapper =styled('div')({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"15px",

    "&>*":{
        marginTop:"12px",
        marginBottom:"12px"
    }
})

const userDetails = {
    username:"",
    password:""
}

export default function LoginForm() {
    const [user,setUser]=useState(userDetails)
    const navigate = useNavigate()

    function handleClick(){
        if(user.username === process.env.REACT_APP_ADMIN_USER && user.password === process.env.REACT_APP_ADMIN_PASS){
            navigate("/admin")
        }
    }
    
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <Wrapper>
        <TextField placeholder='Enter Username/Email' name="username" onChange={handleChange}></TextField>
        <br/>
        <TextField placeholder='Enter Password' name="password" onChange={handleChange}></TextField>
        <br/>
        <Button variant='contained' sx = {{background:"black",color:"white"}} onClick={handleClick}>Submit</Button>    
    </Wrapper>
    )
}
