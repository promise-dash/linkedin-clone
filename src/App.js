import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login } from './features/userSlice';
import { auth } from './firebase-config';


function App() {

  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if(user){
        dispatch(login({
          name: user.displayName,
          email: user.email,
          profilePic: user.photoURL
        }));
      }
    })
  },[]);

  return (
    <div className="App">
      
      {userName ? (<Header />): null}
      
      {!userName? (<Login/>): (
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}

    </div>
  );
}

export default App;
