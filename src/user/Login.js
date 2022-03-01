import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const formValidationSchema = yup.object({
  email: yup.string().required("Email Id Required"),
  password: yup.string().min(8).required("Password Required"),
});

const API_URL = "https://to-do-backendcode.herokuapp.com";

export function Login() {
  const [open, setOpen] = React.useState(false);
  const [Msg, setMsg] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const history = useHistory();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (newuser) => {
        console.log("Onsubmit", newuser);
        loginuser(newuser);
      },
    });
  const loginuser = (newuser) => {
    console.log(newuser);
    fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
         } else {
          setMsg({ Message: "Invalide Credentials", status: "error" });
          setOpen(true);
        }
      })
      .then((response)=>{
        console.log(response)
        localStorage.setItem('token',response.token)
        setMsg({ Message: "Login Successfully", status: "success" });
        setOpen(true);
        setTimeout(() => history.push("/users"), 3000);
      })
      .catch((err) => {
        setMsg({ message: "error", status: "error" });
        setOpen(true);
      });
  };

  return (
    <div className="mains">
      <div className="sub-mains">
        <form onSubmit={handleSubmit}>
          <header>Login</header>
          <TextField
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            label="Enter Email Id"
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />

          <TextField
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter Password"
            error={errors.password && touched.password}
            value={values.password}
            helperText={errors.password && touched.password && errors.password}
          />
          <Button type="submit" variant="contained" color="success">
            <LoginIcon />
            Login
          </Button>
          <p>Create an Account ?</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/signup")}
          >
            <PersonAddAltIcon />
            Sign up
          </Button>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={Msg.status}
          sx={{ width: "100%" }}
        >
          {Msg.Message}
        </Alert>
      </Snackbar>
    </div>
  );
}
