import './App.css';
import Login from './components/login/Login'
import Add from './components/add/Add'
import Messages from './components/messages/Messages'
import { useState } from 'react';


/*
  userName: 'interactiveschools',
  password: 'abcd1234'
*/

function App() {
  const [token, setToken] = useState(null);
  const [currentView, setCuerrentView] = useState('login')

  function saveToken(token){
    setToken(token)
    setCuerrentView('messages')
  }

  function changeView(view){
    setCuerrentView(view);
  }

  return (
    <div className="App">
      {
        currentView === 'login' &&
          <Login saveToken={saveToken}></Login>
      }
      {
        currentView === 'messages' &&
          <Messages accessToken={token} changeView={changeView}></Messages>
      }
      {
        currentView === 'add' &&
          <Add accessToken={token} changeView={changeView}></Add>
      }
    </div>
  );
}

export default App;
