import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ food }) => {

    let navigate = useNavigate()
    const handleDetailsButton = () => {
        navigate(`/food-details/${food.idMeal}`)
    }
    return (
        <div>
            <div>
                <img src={food.strMealThumb} alt="" />
            </div>
            <div>
                <h1 className='text-center font-medium text-2xl'>{food.strMeal}</h1>
                <p className=' text-justify'>Instruction: {food.strInstructions.slice(0, 150)}</p>
            </div>
            <div className='text-center pt-1'>
                <button onClick={handleDetailsButton} className='bg-red-300 px-3 py-1 rounded-lg hover:bg-yellow-200'>See Details</button>
            </div>
        </div>
    );
};

export default SearchResult;