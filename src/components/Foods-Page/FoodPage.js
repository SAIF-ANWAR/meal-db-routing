import React from 'react';

const FoodPage = ({ food }) => {
    console.log(food)
    return (
        <div className='border  p-1 shadow-lg'>
            <div>
                <img className=' h-45 w-50' src={food.strMealThumb} alt="" />
            </div>
            <div className="divide-y divide-slate-200">
                <h1 className='text-center font-medium text-xl'>{food.strMeal}</h1>
                <p>Category: {food.strCategory}</p>
                <p>Origin: {food.strArea}</p>

                <div className='p-1 text-center '><button className='bg-red-300 px-3 py-1 rounded-lg hover:bg-yellow-200'>See on YouTube</button></div>
            </div>
        </div>
    );
};

export default FoodPage;