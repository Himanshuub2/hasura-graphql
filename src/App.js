import {gql,useQuery,useMutation} from "@apollo/client"
import { useEffect, useState} from "react";
import './App.css';
// import { client } from "./index.js";
import {TextField,Button, TableContainer,Table, TableHead, TableRow, TableCell} from "@mui/material"



const initial = {
  "first_name":"",
  "last_name":"",
  "age":null,
}
function App() {

  // const [newval,setNewVal] = useState();
  const [userValues,setUserValues]  = useState(initial);

  const userr = gql`
    query{
      Users{
        first_name,
        last_name
      }
    }
  `

  const ADDUSER = gql`
    
 mutation addUser ($first_name:String!,$last_name:String! , $age:Int){
  insert_Users(objects:{first_name:$first_name, last_name:$last_name , age:$age}){
    returning{
      first_name,
      last_name,
      age
    }
  }
 }
  
  `


const handleChange = (e)=>{
  setUserValues({...userValues,[e.target.name]:e.target.value});
  
}
// console.log(userValues)


const handleSubmit = ()=>{

  addUser ({
    variables:{
      first_name:userValues.first_name,
      last_name:userValues.last_name,
      age:userValues.age,
    }
  })
}




const {data,loading} = useQuery(userr,{fetchPolicy:"no-cache"})

const [addUser , {nloading , error}] = useMutation(ADDUSER);







  
  return (
    <>
    <nav style ={{fontFamily: 'Roboto',textAlign:"center",backgroundImage:"linear-gradient(violet,#f7eef7)",height:"60px",lineHeight:"60px"}}>
          <h1 style ={{color:"black"}}>GraphQL-Hasura</h1>
    </nav>
    <div className="App" style = {
      {
        display:"flex",
        flexDirection:"column",
        height:"100vh",
        justifyContent:"center",
        alignItems:"center",
        background:"#f7eef7"
       
      }
    }>

        <TextField placeholder = "first name" name = "first_name" onChange = {handleChange}> </TextField>
        <br/>
        <TextField placeholder = "last name" name = "last_name" onChange = {handleChange}></TextField> 
        <br/>
        <TextField placeholder = "Age" name = "age" type ="number" onChange = {handleChange}></TextField> 
        <br/>
        <Button variant = "contained" style ={{background:"#eaa2ea"}}  onClick = {handleSubmit}>Submit</Button>
        <br/>
        <br/>

        <h5 style ={{fontStyle:"italic"}}>* Below Data is fetched from Hasura Postres SQL database</h5>
      
        {
           !loading && 
           
           
              <>
              <TableContainer>  
                <Table aria-label="customized table">
                  <TableHead style ={{backgroundColor:"black",

                }}>
                    <TableRow>
                      <TableCell style ={{color:"white"}}>
                          First Name
                      </TableCell>
                      <TableCell style ={{color:"white"}}>
                        LastName
                      </TableCell>
                      <TableCell style ={{color:"white"}}>
                        Age
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {
                    data.Users.map(item=>(
                      <TableRow>
                        <TableCell>
                          {item.first_name}
                        </TableCell>

                        <TableCell>
                          {item.last_name}
                        </TableCell>

                        <TableCell>
                          {item.age}
                        </TableCell>
                     
                      </TableRow>))
                  }
                  
                </Table>
              </TableContainer>
              </>
            
          }


    </div>
    </>
  );
}

export default App;
