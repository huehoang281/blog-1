import "./posts.css";
import React from "react";
import Post from "../post/Post"

export default function Posts({hue}) {
  return (
    <div className='posts'>
      {hue.map(p=>(
      <Post post={p}/>


      ))}
    
        

    </div>
  )
}
