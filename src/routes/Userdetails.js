import { useParams } from "react-router-dom";
import "./userdetail.css";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";

const API_URL = "https://to-do-backendcode.herokuapp.com";

export function Userdetails() {
  const { id } = useParams();

  const [users, setusers] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/details/${id}`, {
      method: "GET",
      headers:{ "X-auth-token":localStorage.getItem('token'),}
    })
      .then((data) => data.json())
      .then((usr) => setusers(usr));
  }, [id]);

  return (
    <div className="detail-container">
      <Card>
        <img src={users.poster} alt={users.name} className="profile-pic" />
        <CardContent className="detail-info">
          <p>Name : {users.name}</p>
          <p>UserName : {users.username}</p>
          <p>Email : {users.email}</p>
          <p>Phone No : {users.phone}</p>
        </CardContent>
      </Card>
    </div>
  );
}
