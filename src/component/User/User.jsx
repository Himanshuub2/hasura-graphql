import {
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { gql, useQuery, useMutation } from "@apollo/client";

function User() {
  const users = gql`
    query {
      Users {
        first_name
        last_name
      }
    }
  `;
  const { data, loading } = useQuery(users, { fetchPolicy: "no-cache" });

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <h1>Customer Details</h1>
      {!loading ? (
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead style={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>First Name</TableCell>
                <TableCell style={{ color: "white" }}>LastName</TableCell>
                <TableCell style={{ color: "white" }}>Age</TableCell>
              </TableRow>
            </TableHead>
            {data.Users?.map((item) => (
              <TableRow>
                <TableCell>{item.first_name}</TableCell>

                <TableCell>{item.last_name}</TableCell>

                <TableCell>{item.age}</TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default User;
