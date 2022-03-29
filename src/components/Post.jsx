import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
        <div className="post_header">
            <Avatar src={photoUrl} style={{width: "35px", height:"35px"}}/>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
            <InputOption Icon={CommentOutlinedIcon} title="Comment"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share"/>
            <InputOption Icon={SendOutlinedIcon} title="Send"/>
        </div>
    </div>
  )
}

export default Post