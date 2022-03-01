import { User } from "./User";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

const API_URL = "https://to-do-backendcode.herokuapp.com";

export function Userlist() {
  const [users, setusers] = useState([]);

  const getusers = () => {
    fetch(`${API_URL}/details`, {
      method: "GET",
      headers:{"X-auth-token":localStorage.getItem('token')}
      
    })
      .then((data) => data.json())
      .then((usr) => setusers(usr));
  };
  useEffect(getusers, []);

  const deleteuser = (id) => {
    fetch(`${API_URL}/details/${id}`, {
      method: "DELETE",
      headers:{"X-auth-token":localStorage.getItem('token')}
    }).then(() => getusers());
  };

  const history = useHistory();
  return (
    <section className="cover">
      {users.map(({ poster, name, username, email, phone, id, _id }) => (
        <User
          poster={poster}
          name={name}
          username={username}
          email={email}
          phone={phone}
          key={id}
          id={_id}
          deleteButton={
            <IconButton
              onClick={() => deleteuser(_id)}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("/edit-user/" + _id)}
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
