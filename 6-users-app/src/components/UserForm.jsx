import { useState } from "react"

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}
export const UserForm = () => {
    
    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email} = userForm;


    const onInputChange = ({ target }) => {
        //console.log(target.value)
        const { name , value } = target;
        setUserForm({
            ...UserForm,
            [name]: value,        
        })
    }
    return (
        <form>
            <input
                classname="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }/>
                
            <input
                classname="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={ password }
                onChange={ onInputChange }/>
            <input
                classname="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange }/>
            <button
                classname="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    )
}