
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import './Meals.css'


const Meals = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] =useState([])

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } , []) 

    const handlePurchase= meal =>{
        // console.log(meal)
        const newCart = [...cart, meal];
        setCart(newCart)
    }
    return (
        <>
        
        <div className="meals">
       <div className="all-meals">
       {
            meals.map( meal => <Meal
                key={meal.idMeal}
                meal={meal}
            handlePurchase={handlePurchase}
            ></Meal>)
        }
       </div>
         <Cart cart={cart}></Cart>
        </div>
        </>
    );
};

export default Meals;