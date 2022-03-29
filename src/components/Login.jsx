import React from 'react';
import "./Login.css";
import{ auth, provider, signInWithPopup} from "../firebase-config";
import { login } from "../features/userSlice"
import { useDispatch } from "react-redux";
import HeaderOption from './HeaderOption';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Login() {
  const dispatch = useDispatch();

  const signInWithGoogle = () =>{

    signInWithPopup(auth, provider)
    .then((result) => {

      dispatch(login({

        name: result.user.displayName,
        email: result.user.email,
        profilePic: result.user.photoURL
      }));
  
    }).catch((error) =>{
      console.log(error);
    });
  };

  return (
   <div className="login">
      <div className="login_header">

        <div className="login_headerLeft">
          <img src="login-logo.svg" alt="" />
        </div>

        <div className="login_headerRight">
        <HeaderOption Icon={ExploreIcon} title="Discover"/>
        <HeaderOption Icon={PeopleIcon} title="People"/>
        <HeaderOption Icon={ChromeReaderModeIcon} title="Learning"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>

        <div className="vertical"></div>

        <div className="buttons">
          <button className='join' onClick={signInWithGoogle}>Join now</button>
          <button className='sign' onClick={signInWithGoogle}>Sign in</button>
        </div>
        </div>

      </div>

      <div className="login_container">
        <div className="login_left">
          <h1>Welcome to your professional community</h1>

          <div className="topics">
            <div className="topic">
              <p>Search for a job</p>
              <ArrowForwardIosIcon style={{color: "gray"}}/>
            </div>
            <div className="topic">
              <p>Find a person you know</p>
              <ArrowForwardIosIcon style={{color: "gray"}}/>
            </div>
            <div className="topic">
              <p>Learn a new skill</p>
              <ArrowForwardIosIcon style={{color: "gray"}}/>
            </div>
          </div>
        </div>
        <div className="login_right">
          <img src="login-hero.svg" alt="" />
        </div>
      </div>
   </div>
  )
}
export default Login;
