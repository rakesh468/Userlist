import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {useHistory} from 'react-router-dom';

export function Addusers({ users, setusers }) {
    const history=useHistory();

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [pic, setpic] = useState("");

  const adduser = () => {
    console.log("adding users!!", name, username, email, phone);
    const newuser = {
      name,
      username,
      email,
      phone,
      pic,
    };
    console.log(newuser);
    setusers([...users, newuser]);
    history.push("/users")
  };
  return (
    <div className="movies-form">
      <TextField value={name} onChange={(event) => setname(event.target.value)} label="Enter the Name" variant="standard" />
      <TextField value={username} onChange={(event) => setusername(event.target.value)} label="Enter the UserName" variant="standard" />
      <TextField value={email} onChange={(event) => setemail(event.target.value)} label="Enter the Email" variant="standard" />
      <TextField value={phone} onChange={(event) => setphone(event.target.value)} label="Enter Phone Number" variant="standard" />
      <TextField value={pic} onChange={(event) => setpic(event.target.value)} label="Upload-pic" variant="standard" />
      <Button variant="outlined" onClick={adduser}>Add Users</Button>
    </div>
  );
}
