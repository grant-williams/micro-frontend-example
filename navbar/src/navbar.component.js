import React from 'react';
import './navbar.css';

const Navbar = () => (
	<nav className='navbar'>
		<a href='/' className='nav-link'>
			Home
		</a>
		<a href='/products' className='nav-link'>
			Products
		</a>
		<a href='/posts' className='nav-link'>
			Posts
		</a>
	</nav>
);

export default Navbar;
