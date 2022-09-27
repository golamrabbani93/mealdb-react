import React, {useEffect, useState} from 'react';

const Meals = () => {
	const [meals, setMeals] = useState([]);
	useEffect(() => {
		const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
		fetch(url)
			.then((res) => res.json())
			.then((meals) => setMeals(meals.meals));
	}, []);

	return <div>{meals.map((meal) => console.log(meal))}</div>;
};

export default Meals;
