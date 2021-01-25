import React, {useState} from 'react';


const AddUser = props => {
    const initialFormState = {id: null, name: '', lastname: ''}
    const [user, setUser] = useState(initialFormState)

    const handleChangeInput = e => {
        const {name, value} = e.currentTarget
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!user.name || !user.lastname) return
        props.addUser(user)
        setUser(initialFormState)
    }



    return (
        <div>
            <div className='add-form'>
                <form onSubmit={handleSubmit}>
                    <label>Add Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={user.name}
                        onChange={handleChangeInput}
                    />
                    <label>Add Last Name</label>
                    <input
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                        value={user.lastname}
                        onChange={handleChangeInput}
                    />
                    <button className='add-form_button' type='Submit'>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;
