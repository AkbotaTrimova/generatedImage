import React, {useState} from 'react';
import './App.css';
import AddUser from "./AddUser";
import UsersForm from "./UsersForm";

const App = () => {
    const usersData = [
        { id: '', name: '', lastname: '' },
    ]
    const [users, setUsers] = useState(usersData)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([ ...users, user ])
    }

    return (
        <div className='center-app'>
            <AddUser addUser={addUser}/>
            <hr/>
            <UsersForm users={users}/>
        </div>
    );
}

export default App;
