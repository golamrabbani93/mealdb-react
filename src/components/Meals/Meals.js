import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
	const [meals, setMeals] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
		fetch(url)
			.then((res) => res.json())
			.then((meals) => setMeals(meals.meals));
	}, []);
	const addToCart = (meal) => {
		const newCart = [...cart, meal];
		setCart(newCart);
	};
	return (
		<div className="container">
			<div className="Meals">
				{meals.map((meal) => (
					<Meal meal={meal} key={meal.idMeal} addToCart={addToCart}></Meal>
				))}
			</div>
			<div className="meals-sidebar">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Meals;
