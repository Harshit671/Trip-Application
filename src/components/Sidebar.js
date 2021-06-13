import React from 'react'
import "./Sidebar.css"
import {AiFillHome, AiTwotoneCalendar} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar_icons">
           <Link to="/"> <AiFillHome fontSize="20px"/> </Link>
          <Link to="/addtrip"> <BsGrid3X3Gap fontSize="20px"/> </Link> 
<Link to="/trips"> <AiTwotoneCalendar  fontSize="20px" /> </Link>
        </div>
    )
}

export default Sidebar
