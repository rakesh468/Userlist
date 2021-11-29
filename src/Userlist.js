import { User } from './User';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router';
export function Userlist({ users,setusers }) {
  const history=useHistory()
  return (
    <section className="cover">
      {users.map(({ pic, name, username, email, phone },index) => (
        <User
          pic={pic} 
          name={name} 
          username={username} 
          email={email} 
          phone={phone} 
          id={index} 
          key={index}
          deleteButton={
            <IconButton 
            onClick={()=>{
              console.log("deleting",index);
              const deleteIndx=index;
              const remainingusers=users.filter((us,idx)=>idx !== deleteIndx);
              setusers(remainingusers);
            }}
              color="error" aria-label="deleted">
              <DeleteIcon/>
            </IconButton> } 
            editButton={
              <IconButton
                onClick={()=>history.push("/edit-user/"+ index)} color="secondary" aria-label="edit">
                <EditIcon/>
              </IconButton>
            }   />

      ))}
    </section>
  );
}
