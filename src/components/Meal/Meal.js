import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRunning} from '@fortawesome/free-solid-svg-icons';
import './Meal.css';

const Meal = (props) => {
	const {meal, addToCart} = props;
	const {strMeal, strMealThumb, strYoutube, strInstructions} = meal;
	return (
		<div className="product-card">
			<div className="product-img">
				<img src={strMealThumb} alt="" />
			</div>
			<div className="product-info">
				<h6 className="product-name">Name: {strMeal}</h6>
				<a href={strYoutube} className="youtbue">
					Youtube
				</a>
				<p className="price">Rating : {strInstructions.slice(0, 90)}...</p>
			</div>
			<button onClick={() => addToCart(meal)} className="btn-cart">
				<p>Add to Cart </p>
				{/* <FontAwesomeIcon icon={youtube}></FontAwesomeIcon> */}
				<FontAwesomeIcon icon={faRunning} />
			</button>
		</div>
	);
};

export default Meal;
