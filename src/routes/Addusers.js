import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export const formvalidation = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().max(10).required(),
  poster: yup.string().required(),
});

const API_URL = "https://to-do-backendcode.herokuapp.com";

export function Addusers() {
  const history = useHistory();

  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        phone: "",
        poster: "",
      },
      validationSchema: formvalidation,
      onSubmit: (newuser) => {
        console.log("Onsubmit", newuser);
        adduser(newuser);
      },
    });

  const adduser = (newuser) => {
    console.log(newuser);

    fetch(`${API_URL}/details`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { 
        "X-auth-token":localStorage.getItem('token'),
        "Content-Type": "application/json" },
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
