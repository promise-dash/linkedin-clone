import React,{useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css";
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import Post from './Post';
import {db} from "../firebase-config";
import { addDoc, collection, query, onSnapshot, serverTimestamp, orderBy} from "firebase/firestore";
import { useSelector } from "react-redux"

function Feed() {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const postCollectionRef = collection(db, "posts");

  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);

  useEffect(() => {
    const q = query(postCollectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
    return () => unsub();
  },[]);

  const addPost = async(e) =>{
    e.preventDefault();
    setInput("");

    await addDoc(postCollectionRef, {
      name: userName,
      description: "message",
      message: input,
      photoUrl: userPhoto,
      timestamp: serverTimestamp()
    });
  }

  return (
    <div className='feed'>
      <div className="feed_inputContainer">
          <div className="feed_input">
            <CreateIcon />
            <form>
              <input type="text" placeholder='Start a post...' onChange={(e) => {setInput(e.target.value)}} value={input}/>
              <button type="submit" onClick={addPost}>Send</button>
            </form>
          </div>
          <div className="feed_inputOptions">
            <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo"/>
            <InputOption Icon={YouTubeIcon} color="#E7A33E" title="Video"/>
            <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
            <InputOption Icon={CalendarViewMonthIcon} color="#7FC15E" title="Write article"/>
          </div>
      </div>

      {posts.map((post) => {
        return (
            <Post key={post.id} name={post.name} description={post.description} message={post.message} photoUrl={post.photoUrl}/>
          )
      })}

    </div>
  )
}

export default Feed;