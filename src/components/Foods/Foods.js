import React, { useEffect, useState } from 'react';
import FoodPage from '../Foods-Page/FoodPage';

const Foods = ({ food }) => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    // console.log(food)
    return (
        <div>
            <div className='grid grid-cols-4 gap-6 justify-center p-10'>
                {
                    foods.map(food => <FoodPage food={food} key={food.id}></FoodPage>)
                }
            </div>
        </div>
    );
};

export default Foods;