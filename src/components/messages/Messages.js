import './Messages.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Messages(props) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/message', {headers: {"accessToken": props.accessToken}}).then( response => {
            setMessages(response.data);
        }).catch(error => {
            alert("Seems like we got a problem, perhaps you need to login again...")
            console.log(error)
        })
    });

    return(
        <div className='tl'>
            <button className='btn' onClick={() => props.changeView('add')}>Add Message</button>
            <div className='msgs'>
                {
                    messages.length > 0 ?
                    
                    <ul>
                        {
                            messages.map( message => (
                                <li key={message.id}>
                                    <div className='message'>
                                        <p className='message-text'>{message.message}</p>
                                        <p className='message-date'>{ new Date(message.createdDate).toDateString()}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    :

                    <h3>You seem to have no messages :(</h3>
                }
            </div>
        </div>
    )
}

export default Messages