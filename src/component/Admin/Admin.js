import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import "../../App.css";
// import { client } from "./index.js";
import {
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const initial = {
  first_name: "",
  last_name: "",
  age: null,
};
function Admin() {
  // const [newval,setNewVal] = useState();
  const [userValues, setUserValues] = useState(initial);

 

  const ADDUSER = gql`
    mutation addUser($first_name: String!, $last_name: String!, $age: Int) {
      insert_Users(
        objects: { first_name: $first_name, last_name: $last_name, age: $age }
      ) {
        returning {
          first_name
          last_name
          age
        }
      }
    }
  `;

  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };
  // console.log(userValues)

  const handleSubmit = () => {
    addUser({
      variables: {
        first_name: userValues.first_name,
        last_name: userValues.last_name,
        age: userValues.age,
      },
    });
  };



  const [addUser, { nloading, error }] = useMutation(ADDUSER);

  return (
    <>
      
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          background: "#f7eef7",
        }}
      >
        <TextField
          placeholder="first name"
          name="first_name"
          onChange={handleChange}
        >
          {" "}
        </TextField>
        <br />
        <TextField
          placeholder="last name"
          name="last_name"
          onChange={handleChange}
        ></TextField>
        <br />
        <TextField
          placeholder="Age"
          name="age"
          type="number"
          onChange={handleChange}
        ></TextField>
        <br />
        <Button
          variant="contained"
          style={{ background: "#eaa2ea" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <br />
        <br />

        
      </div>
    </>
  );
}

export default Admin;
