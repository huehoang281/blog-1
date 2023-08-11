import { useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function SinglePost() {
   const PF = "http://localhost:3000/images/";
   const location = useLocation();
   const path = location.pathname.split("/")[2];
   const [post, setPost] = useState({});
   const { user } = useContext(Context);
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
   const [updateMode, setUpdateMode] = useState(false);



   useEffect(() => {
      const getPost = async () => {
         const res = await axios.get("post/" + path);
         console.log("tesst")
         setPost(res.data[0]);
         setTitle(res.title[0]);
         setDesc(res.desc[0]);
      };
      getPost()


   }, [path]);

   const handleDelete = async () => {
      try{
         await axios.delete(`post/${post._id}`,
         {data:{username:user.username},
      });
         window.location.replace("/");

      }catch(err){}
      


   }

   return (
      <div className="singlePost">
         <div className="singlePostWrapper">
            {post.photo && (
               <img className="singlePostImg"
                  src={PF + post.photo}
                  alt="" />
            )}{
               updateMode ? (
                   <input type="text" 
                   value={title} 
                   className="singlePostTitleInput" 
                   autoFocus
                   onChange={(e) =>setTitle(e.target.value)}
                   
                   /> 
                   ) : (
            <h1 className="singlePostTitle">
               {post.title}
               {post.username === user.username && (
                  <div className="singlePostEdit">
                     <i className=" singlePostIcon fa-regular fa-pen-to-square" 
                     onClick={() =>setUpdateMode(true)}>
                     </i>
                     <i className=" singlePostIcon fa-regular fa-trash-can" 
                     onClick={handleDelete}>
                     </i>
                  </div>
               )}
            </h1>
               )
            }
            <div className="singlePostInfo">
               <span className="singlePostAuthor">
                  Author:

                  <Link to={`/?user=${post.username}`} className="link">
                     <b> {post.username}</b>
                  </Link>
               </span>

               <span className="singlePostDate"> {new Date(post.createdAt).toDateString()} </span>
            </div>

            {updateMode ? (
               <textarea className="singlePostDescInput" value={desc} onChange={(e) =>setDesc(e.target.value)}/> 
            ) : (
               <p className="singlePostDesc" > {post.desc} </p>
            )}

         </div>
         <button className="singlePostButton">Update</button>



      </div>
   )
}
