import './Add.css';
import { useState } from 'react';
import axios from 'axios';

function Add(props) {

    const [textMessage, setTextMessage] = useState('')

    function handleMessageChange(event) {
        setTextMessage(event.target.value)
    }

    function handleSend(){
        axios.post('http://localhost:5000/api/message', {message: textMessage}, {
            headers:  {"accessToken": props.accessToken},
        }).then(
            response => {
                props.changeView('messages')
            }
        ).catch(error => {
            alert('Seems like we got a problem, perhaps you need to login again...')
            console.log(error)
        })
    }

    return(
        <div className='container form'>
            <h3>Enter your message below</h3>
            <textarea rows="15" cols="50" onChange={handleMessageChange}></textarea>
            <button className='btn' onClick={handleSend}>send</button>
        </div>
    )
}

export default Add