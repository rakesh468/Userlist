import { useState } from "react";
import Button from "@mui/material/Button";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CardActions from "@mui/material/CardActions";
import "./user.css";

export function User({
  poster,
  name,
  username,
  email,
  phone,
  id,
  deleteButton,
  editButton,
}) {
  const [show, setshow] = useState(true);
  const styles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <Card className="container">
      <img
        src={poster}
        alt={name}
        className="profile-pic"
        onClick={() => history.push("/users/" + id)}
      />
      <CardContent className="details">
        <Button
          variant="Text"
          onClick={() => setshow(!show)}
          startIcon={show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {show ? "hide" : "show"} details
        </Button>
        <IconButton
          style={{ marginLeft: "auto" }}
          aria-label="more-info"
          onClick={() => history.push("/users/" + id)}
          color="primary"
        >
          <InfoIcon />
        </IconButton>
        {editButton}
        <p style={styles}><b>Name:</b> {name}</p>
        <p style={styles}><b>UserName:</b>  {username}</p>
        <p style={styles}><b>Email :</b> {email}</p>
        <p style={styles}><b>Phone No :</b> {phone}</p>
      </CardContent>
      <CardActions>{deleteButton}</CardActions>
    </Card>
  );
}
