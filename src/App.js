
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {

  //declaramos el estado donde almacenaremos los usuarios
  const [users,setUsers] = useState([])
  const [userSelected,setUserSelected] = useState([])

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then( res => setUsers(res.data))

  }, [])

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

   //con esta funcion seleccionamos el usuario , mediante los parametros pasamos la variable
  const selectUser = (user) => {
    setUserSelected(user);
  };

  // con esta funcion quitamos el usuario seleccionado


  const removeUser = id => {
    axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers());
  }
  

  return (
    <div className="App">
        {/* enviamos mediante props ls usuarios hacia el componente
        donde los listaremos  */}
        
        <main className='App-main'>
          <UserForm
            getUsers={getUsers}
            userSelected={userSelected}
            deselectUser={ () => setUserSelected (null) }
          />
          <UserList 
            users= {users} 
            selectUser={selectUser}
            removeUser={removeUser}
          />
        </main>
          
        
    </div>
  );
}

export default App;
