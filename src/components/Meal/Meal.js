import React from 'react';
import './Meal.css';

const Meal = (props) => {
	const {strMeal, strMealThumb, strYoutube, strInstructions} = props.meal;
	return (
		<div className="product-card">
			<div className="product-img">
				<img src={strMealThumb} alt="" />
			</div>
			<div className="product-info">
				<h6 className="product-name">Name: {strMeal}</h6>
				<p className="price">Youtube : {strYoutube}</p>
				<p className="price">Rating : {strInstructions.slice(0, 100)}...</p>
			</div>
			{/* <button className="btn-cart">
				<p>Add to Cart </p>
				<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
			</button> */}
		</div>
	);
};

export default Meal;
