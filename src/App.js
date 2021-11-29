import './App.css';
import {Link,Switch,Route,Redirect} from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/ArrowBack';
import { Notfound } from './Notfound';
import { Welcome } from './Welcome';
import { Addusers } from './Addusers';
import { Editusers } from './Editusers';
import { Userlist } from './Userlist';
function App() {

  const intial_users=[
    { pic:"https://wallpaperaccess.com/full/2213424.jpg",
    name:"Rakesh Kumar",
    username:"rakesh07",
    email:"rakesh334@gmail.com",
    phone:"  9276432789"},
    { pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISqQQ6Qn2SZyJrbPlTU5c3imVZBDsf1K8_Q&usqp=CAU",
    name:"Mukesh ",
    username:"kiran47",
    email:"kiranroi7@gmail.com",
    phone:" 9085473256"},
    {pic:"https://i.pinimg.com/474x/a6/29/02/a62902c0458a23d705492bb701371a43--cool-wallpapers-for-iphone-wallpaper-for-iphone.jpg",
     name:"Harish Kumar",
     username:"akash97",email:"akashmahi@gmail.com",
     phone:" 9987654876"},
    {pic:"https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg", 
    name:"Sanjay Srinivasan",
    username:"sanjay7",
    email:"sanjay001@gmail.com",
    phone:" 9342123579"},
    {pic:"https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/05/Whatsapp-Profile-Images-wallpaper-hd-300x300.gif",
    name:"Pramod Reddy",
    username:"pramod9",
    email:"pramod001@gmail.com",
    phone:" 9342189578"},
    {pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-a1RvNX477ObyH9a868y826ZXaXlYuI1oFQ&usqp=CAU",
    name:"Sachin Jain",
    username:"sachin3",
    email:"sachinrama@gmail.com",
    phone:" 8876543212"},
    {pic:"https://bestprofilepictures.com/wp-content/uploads/2020/06/Anonymous-Profile-Picture-1024x1024.jpg", 
    name:"Varun Charavathy",
    username:"varun143",
    email:"varunvali@gmail.com",
    phone:" 8877665432"},
    {pic:"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
    name:"Prem Kumar",
    username:"prem332",
    email:"premscam@gmail.com",
    phone:" 8877667632"},
  ]; 
  const[users,setusers]=useState(intial_users);
return (
    <div className="App">
      <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/create-users">Add Users</Link>
       </nav>
       <Switch>
       <Route exact path="/">
           <Welcome/>
           </Route>
        <Route path="/customers">
            <Redirect to ="/users"/>
         </Route>
         <Route path="/users/:id">
           <Userdetails users={users} />
           </Route>
           <Route path="/edit-user/:id">
            <Editusers users={users} setusers={setusers} />
             </Route>
         <Route  path="/users">
         <Userlist users={users} setusers={setusers} />
         </Route>
         <Route path="/create-users">
         <Addusers users={users} setusers={setusers} />  
         </Route>
         <Route path="**">
           <Notfound/>
         </Route>
         
         </Switch>
      
      
      
    </div>
  );
}
function Userdetails({users}){
  const history=useHistory()
  const {id}=useParams();
  const user=users[id];
  console.log(user);
  
  return(
    <div className="detail-container">
       <img src={user.pic} alt={user.name} className="profile-pic" />
       <p >Name : {user.name}</p>
        <p >UserName : {user.username}</p>
        <p >Email : {user.email}</p>
        <p >Phone No : {user.phone}</p>
        <Button onClick={()=>history.goBack("/users")} variant="outlined" aria-label="back" >
          < KeyboardBackspaceIcon/>Back
          </Button>
    </div>
  )
}



export default App;
