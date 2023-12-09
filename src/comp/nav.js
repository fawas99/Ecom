import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { LuLogIn } from "react-icons/lu";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';


import './nav.css';

const Nav = ({search,setSearch,searchproduct}) => {
    const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className="header">
        <div className="top_header">
            <div className="icon">
                <MdLocalShipping />
            </div>
            <div className="info">
                <p>Free Shipping When Shopping</p>
            </div>
        </div>
        <div className="mid_header">
            <div className="logo">
                <img src="image/logo.webp" alt="logo" />
            </div>
            <div className="search_box">
                <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={(searchproduct) }><AiOutlineSearch /></button>
            </div>
            {
                isAuthenticated ? 
                //logout buttom
                <div className="user">
                    <div className="icon">
                        <CiLogout />
                </div>
                <div className="btn">

                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            //login button
            <div className="user">
                <div className="icon">
                    <LuLogIn /> 
                </div>
                <div className="btn">

                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
            }
            
            
        </div>

        <div className="last_header">
            <div className="user_profile">
                {
                    isAuthenticated ?
                    <>
                    <div className="icon">
                    <AiOutlineUser />
                    </div>
                    <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    </div>
                    
                    </>
                    :
                    <>
                    <div className="icon">
                    <AiOutlineUser />
                    </div>
                    <div className="info">
                        <p>please login</p>
                    </div>
                    </>
                }
            </div>
            <div className="nav">
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/shop' className='link'>shop</Link></li>
                    <li><Link to='/cart' className='link'>cart</Link></li>
                    <li><Link to='/about' className='link'>about</Link></li>
                    <li><Link to='/contact' className='link'>contact</Link></li>

                </ul>

            </div>
            <div className="offer"><p>flat 10% over all iphone</p></div>
        </div>
    </div>

    
    </>
  )
}

export default Nav;