
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))

    }, [id])
    console.log(meal)
    return (
        <div className='p-5'>
            <h1 className='text-center text-3xl text-orange-600 font-bold'> Food Details </h1>
            <div className='grid grid-cols-2 justify-center justify-items-center p-10'>
                <div className='mt-5 text-xl px-6'>
                    <h1 className='text-2xl font-medium'>General Info:</h1>
                    <h1>Name:{meal[0].strMeal} ID: {meal[0].idMeal}</h1>
                    <h1>Area: {meal[0].strArea}</h1>
                    <h1 className='mt-2 text-2xl font-medium'>Ingredients:</h1>
                    <li>{meal[0].strIngredient1}</li>
                    <li>{meal[0].strIngredient2}</li>
                    <li>{meal[0].strIngredient3}</li>
                    <li>{meal[0].strIngredient4}</li>
                    <li>{meal[0].strIngredient5}</li>
                    <li>{meal[0].strIngredient6}</li>
                </div>
                <div>
                    <img className='h-auto max-w-sm' src={meal[0].strMealThumb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Item;