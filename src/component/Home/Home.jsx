import React from "react";
import { styled, Button } from "@mui/material";
import LoginForm from "../LoginForm";
import { useState } from "react";
import { GoogleLogin,useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  background: "#f7eef7",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: "sans-serif",
});

const Box = styled("div")({
  width: "30rem",
  height: "30rem",
  border: "2px solid violet",
  borderRadius: "10px",
});

const StyledButton = styled(Button)({
  marginTop: "4rem",
  // marginLeft:"4.5rem",ss
  marginRight: "15px",
  width: "8rem",
  textAlign: "center",
});

export default function Home({isAuth}) {
  const [user, setUser] = useState("");
  const [flag, setFlag] = useState(false);

    const navigate = useNavigate()

  const responseMessage = (res) => {
    console.log(res);
    isAuth(res.credential)
    navigate("/customer")
  };
  const errorMessage = (err) => {
    console.log(err);
  };

  function handleClick(e) {
    setFlag(true);
    setUser(e.target.name);
  }
  return (
    <div>
      <Wrapper>
        <Box>
          <h1>Select Type of User</h1>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleClick}
            name="Admin"
          >
            Admin
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleClick}
            name="Customer"
          >
            Customer
          </StyledButton>

          {flag ? (
            user === "Admin" ? (
              <LoginForm />
            ) : (
              <div
                style={{
                  marginTop: "2rem",
                  width: "15rem",
                  marginLeft: "7rem",
                }}
              >
                
                <GoogleLogin 
                  onSuccess={responseMessage}
                  onError={errorMessage}
                  
                />
              </div>
            )
          ) : (
            ""
          )}
        </Box>
      </Wrapper>
    </div>
  );
}
