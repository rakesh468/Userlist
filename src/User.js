import { useState } from "react";
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import{useHistory}from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export function User({ pic, name, username, email, phone,id,deleteButton,editButton}) {
  const [show, setshow] = useState(true);
  const styles = { display: show ? "block" : "none" };
  const history=useHistory();
  return (
    <Card className="container">
      <img src={pic} alt={name} className="profile-pic" />
      <CardContent>
      <div className="details">
      <Button variant="Text"  onClick={() => setshow(!show)} 
       startIcon={ show?<ExpandLessIcon />:<ExpandMoreIcon/>}>{show ?"hide" : "show"} details
      </Button>
      <IconButton onClick={()=>history.push("/users/"+id)} aria-label="more-info" color="primary">
      < InfoIcon/>
     </IconButton>
     {editButton}
     {deleteButton}
        <p style={styles}>Name : {name}</p>
        <p style={styles}>UserName : {username}</p>
        <p style={styles}>Email : {email}</p>
        <p style={styles}>Phone No : {phone}</p>
       
       
       
      </div>
      </CardContent>
    </Card>

  );
}
