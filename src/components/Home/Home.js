import { useEffect, useState } from "react";
import SearchResult from "../Home-Page-Search-Result/SearchResult";

const Home = () => {
    const [searhFood, setSearchFood] = useState('')
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searhFood}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [searhFood])
    const searchFood = text => {
        setSearchFood(text.target.value)
    }

    return (
        <div>
            <h1 className='text-4xl font-medium text-center mt-10'>Search foods here by Name</h1>
            <div className="text-center pt-5">
                <input onChange={searchFood} className="border border-red-400 text-center rounded-md py-1" type="text" />
            </div>
            <div className="grid grid-cols-3 gap-8 justify-center px-10 py-5">
                {
                    foods.map(food => <SearchResult key={food.idMeal} food={food}></SearchResult>)
                }
            </div>
        </div>


    );
};

export default Home;