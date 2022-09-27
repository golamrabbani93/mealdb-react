import React from 'react';
import DisplayCart from '../DisplayCart/DisplayCart';
import './Cart.css';
const Cart = (props) => {
	const carts = props.cart;
	return (
		<div className="cart">
			<h2>Add Some Meal</h2>
			<div className="cart-container">
				{carts.map((cart) => (
					<DisplayCart key={cart.idMeal} cart={cart}></DisplayCart>
				))}
			</div>
		</div>
	);
};

export default Cart;
