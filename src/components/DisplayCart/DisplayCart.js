import React from 'react';
import './DisplayCart.css';

const DisplayCart = (props) => {
	const {strMeal} = props.cart;
	return <li className="cart-list">{strMeal}</li>;
};

export default DisplayCart;
