import React from 'react'
import { RiHome6Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { Link } from 'react-router-dom';

function MenuBar() {
    return (
        <div className='menubar'>
            <Link to={"#"} className='link'>
                <RiHome6Fill className='icon' size={"1.5rem"} />
            </Link>
            <Link to={"#"} className='link'>
                <CiSearch className='icon' size={"1.5rem"} />
            </Link>
            <Link to={"#"} className='link'>
                <HiShoppingBag className='icon' size={"1.5rem"} />
            </Link>
            <Link to={"/"} className='link1'>
                <IoMdPerson className='icon' size={"1.5rem"} />
            </Link>
        </div>
    )
}

export default MenuBar