import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser , selectUserAuth } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login'
import Widgets from './Widgets';


function App() {

  const user = useSelector(selectUser);
  // const Auth = useSelector(selectUserAuth)


  return (
    <div className="App">

      {/* header */}
      <Header />

      { !user ? (<Login /> ): 
      
         ( <div className='app-body'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>)
      }
      
    </div>
  );
}

export default App;