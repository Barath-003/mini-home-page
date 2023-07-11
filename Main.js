import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Main.css';
import "./Style.css";
import { Link } from 'react-router-dom';
const Main = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div>
    
    <header>
      <div className='logo'>
			<h3>Great Trails </h3>
			<nav ref={navRef}>
				<a href="/#">Flights</a>
				<a href="/#">Hotels</a>
				<a href="/#">Offers</a>
				<a href="/#">Apartments</a>
        <a href="/#">Activities</a>
        <a href="/#">Contacts</a>
        <div className='Boys'>
        <Link to="Login"><a href="/#">SignIn</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="Register"><a href="/#">CreateAccount</a></Link>
        </div>
        <div className="dashboard">
      <div className="sidebar">
        <h2>Sidebar</h2>
        {/* Add sidebar content */}
      </div>
    </div>
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
				<FaBars />
			</button>
        </div>
		</header>
     <div className='main'>
        <div className='h1'>
        <h1>Hotel Room Booking Portal</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h3>Stay once, carry memories forever.</h3>
        </div>
    <div className="search">
      <input type="text" placeholder="Location" className="search-field" />
      <div className='date'>

      <input type="date" className="search-field" />
      </div>

      <div className='date'>

      <input type="date" className="search-field" />
      </div>
      
      
      <input type="number" placeholder="Room" className="search-field" />
      <button className="search-button">Search</button>
    </div>
    </div>
    </div>
  );
};

export default Main;