import React from 'react';
import './App.css'
import AvatarGenerate from "./AvatarGenerate";

const UsersForm = (props) => {

    return (
        <div>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <div key={user.id} className='avatar-name_position' >
                        <div className='avatar-initials' width='65' height='65'>
                            <AvatarGenerate name={user.name} lastname={user.lastname}/>
                        </div>
                        <p>{user.name} {user.lastname}</p>
                    </div>
                ))
            ) : (
                <h2>No users</h2>
            )}
        </div>
    );
}

export default UsersForm;
