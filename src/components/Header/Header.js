import React from 'react';
import './Header.css';
const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<a href="/home">MeaLDB</a>
			</div>
			<div className="link">
				<a href="/home">Home</a>
				<a href="/meal">Meal</a>
				<a href="/about">About</a>
			</div>
		</div>
	);
};

export default Header;
