import './Login.css';
import { useState } from 'react';
import axios from 'axios';

function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleUserNameChange (event) {
        setUserName(event.target.value)
    }

    function handleUserPasswordChange (event) {
        setPassword(event.target.value)
    }

    function handleLogin(){
        axios.post('http://localhost:5000/api/login', {
            name: userName,
            password: password
        }).then(response => {
            if(response.data && response.data.accessToken){
                props.saveToken(response.data.accessToken)
            } else {
                alert('Wrong credentials...');
            }
        }).catch( error => {
            alert('Failed to login, try again...')
            console.log(error)
        })
        
    }

    return(
        <div className='container'>
            <h2>Use the credentials to login</h2>
            <div>
                <p className='label'>User Name</p>
                <input type="text" placeholder='User Name' onChange={handleUserNameChange}></input>
            </div>
            <div>
                <p className='label'>Password</p>
                <input type="password" onChange={handleUserPasswordChange}></input>
            </div>
            <button className='btn' onClick={ handleLogin}>Login</button>
        </div>
    )
}

export default Login