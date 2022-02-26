import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Notfound } from "./routes/Notfound";
import { Welcome } from "./routes/Welcome";
import { Addusers } from "./routes/Addusers";
import { Editusers } from "./routes/Editusers";
import { Userlist } from "./routes/Userlist";
import { Navbar } from "./component/Navbar";
import { Userdetails } from "./routes/Userdetails";
import { Login } from "./user/Login";
import { Signup } from "./user/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/customers">
          <Redirect to="/users" />
        </Route>
        <Route path="/users/:id">
          <Userdetails />
        </Route>
        <Route path="/edit-user/:id">
          <Editusers />
        </Route>
        <Route path="/users">
          <Userlist />
        </Route>
        <Route path="/create-users">
          <Addusers />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
