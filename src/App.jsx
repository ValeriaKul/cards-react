import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {

const usersArr = [
  {
    id: 1,
    name: 'Mary Order',
    username: 'MalyLand',
    email: 'mariahappy@yahoo.com',
    phone: '021-2344-432'
  },
  {
    id: 2,
    name: 'Peter Holgered',
    username: 'Darknight',
    email: 'peter1986@gmail.com',
    phone: '01-2225-632'
  },
  {
    id: 3,
    name: 'Ksara Wolf',
    username: 'The Black Wolf',
    email: 'morningstar@inbox.ee',
    phone: '021-5555-432'
  },
  {
    id: 4,
    name: 'Dave Prost',
    username: 'Jaguar',
    email: 'dave_prost@yahoo.com',
    phone: '0371-2455-2'
  },
  {
    id: 5,
    name: 'Sergey Vladimirov',
    username: 'Star',
    email: 'sergey@mail.ru',
    phone: '7978-666-32'
  },
  {
    id: 6,
    name: 'Sarah Forester',
    username: 'ChAoS',
    email: 'sarahlova@gmail.com',
    phone: '021-2344-432'
  },

];

const [users, setUsers] = useState(usersArr);

const deleteUser= (id) => {
  let message = window.confirm('Are you sure?');
  if (message){
    let newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
    } else {
      alert(`Ok! We won't delete this!`)
    }
}

  return (
    <div className="App">
        <Cards 
          users={users}
          deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
