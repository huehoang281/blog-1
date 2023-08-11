import axios from "axios";
import "./sidebar.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [cat, setCats] = useState([]);

  useEffect(() =>{
    const getCats = async () =>{
      const res = await axios.get("/category");
      setCats(res.data)
    };
    getCats()

    

  } , []);


  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle" > ABOUT ME</span>
            <img src="https://images.pexels.com/photos/17552315/pexels-photo-17552315/free-photo-of-dan-ba-hoa-qu-n-jean-bo-hoa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>  Lorem Ipsum has been the industry's standard dummy 
                 text ever since the 1500s, when an unknown printer took a 
                 galley of type.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle" > CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c, index) =>(
            <Link to={`/?cat=${c.name}`} key={index} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <span className="sidebarTitle" > FOLOW US</span>
        <div className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
        <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
        <i className=" sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className=" sidebarIcon fa-brands fa-square-instagram"></i>

        </div>
        

        </div>

  )
}
