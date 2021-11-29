import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export function Editusers({ users, setusers }) {
    const history=useHistory();
    const {id}=useParams();
    const user=users[id];
    console.log(id,user);
  const [name, setname] = useState(user.name);
  const [username, setusername] = useState(user.username);
  const [email, setemail] = useState(user.email);
  const [phone, setphone] = useState(user.phone);
  const [pic, setpic] = useState(user.pic);

  const edituser = () => {
    console.log("adding users!!", name, username, email, phone);
    const updateduser = {
      name,
      username,
      email,
      phone,
      pic,
    };
    console.log(updateduser);
   const copyuserlist=[...users]
   copyuserlist[id]=updateduser;
   setusers(copyuserlist);
   history.push("/users")
  };
  return (
    <div className="movies-form">
      <TextField value={name} onChange={(event) => setname(event.target.value)} label="Enter the Name" variant="standard" />
      <TextField value={username} onChange={(event) => setusername(event.target.value)} label="Enter the UserName" variant="standard" />
      <TextField value={email} onChange={(event) => setemail(event.target.value)} label="Enter the Email" variant="standard" />
      <TextField value={phone} onChange={(event) => setphone(event.target.value)} label="Enter Phone Number" variant="standard" />
      <TextField value={pic} onChange={(event) => setpic(event.target.value)} label="Upload-pic" variant="standard" />
      <Button variant="outlined" onClick={edituser}>Save</Button>
    </div>
  );
}
