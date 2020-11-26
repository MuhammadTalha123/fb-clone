import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed" >
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic="https://avatars2.githubusercontent.com/u/59221584?s=400&u=fa2672a34b583ad3acf351c1976fc1e3b38795c6&v=4" 
            message="WOW this is work." 
            timestamp="this is timestamp" 
            username="Muhammad Talha" 
            image="https://www.tamansimalem.com/wp-content/uploads/2014/05/pageheader-fruits.jpg" 
            />
            <Post />
            <Post />

        </div>
    )
}

export default Feed;
