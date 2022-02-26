import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { formvalidation } from "./Addusers";
import { useFormik } from "formik";

const API_URL = "https://to-do-backendcode.herokuapp.com";

export function Editusers() {
 
  const { id } = useParams();

  const [user, setuser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/details/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((usr) => setuser(usr));
  }, [id]);

  return user ? <Updateuser user={user} /> : "";
}

function Updateuser({ user }) {
  const history = useHistory();

  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues: {
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        poster: user.poster,
      },
      validationSchema: formvalidation,
      onSubmit: (updateduser) => {
        console.log("onSubmit", updateduser);
        edituser(updateduser);
      },
    });
  const edituser = (updateduser) => {
    console.log(updateduser);

    fetch(`${API_URL}/details/${user._id}`, {
      method: "PUT",
      body: JSON.stringify(updateduser),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/users"));
  };

  return (
    <form className="movies-form" onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Enter the Name"
        error={errors.name && touched.name}
        variant="standard"
        helperText={errors.name && touched.name && errors.name}
      />
      <TextField
        value={values.username}
        label="Enter UserName"
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username && touched.username}
        id="username"
        name="username"
        helperText={errors.username && touched.username && errors.username}
      />
      <TextField
        value={values.email}
        label="Enter the Email"
        variant="standard"
        id="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email}
        helperText={errors.email && touched.email && errors.email}
      />
      <TextField
        value={values.phone}
        label="Enter Phone Number"
        variant="standard"
        onChange={handleChange}
        id="phone"
        name="phone"
        onBlur={handleBlur}
        error={errors.phone && touched.phone}
        helperText={errors.phone && touched.phone && errors.phone}
      />
      <TextField
        value={values.poster}
        label="Add Poster Url"
        variant="standard"
        id="poster"
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster && errors.poster}
      />
      <Button variant="outlined" type="submit">
        Add Users
      </Button>
    </form>
  );
}
