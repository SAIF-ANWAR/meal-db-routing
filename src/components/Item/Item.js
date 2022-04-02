
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
        <div>
            <h1 className='text-center text-3xl'>Item Page {meal.idMeal}</h1>
        </div>
    );
};

export default Item;