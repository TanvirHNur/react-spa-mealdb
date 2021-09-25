import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
const element = <FontAwesomeIcon icon={faShoppingCart} />

const Meal = (props) => {
    // console.log(props)
    const {strCategory, strMealThumb, strMeal, strInstructions} = props.meal;
    return (
        <div className="meal">
            <img src={strMealThumb} alt=""></img>
            <div>
            <h2>Item {strMeal}</h2>
            <h5>Item {strCategory}</h5>
            <p>Instructions {strInstructions.slice(0,200)}</p>
            <button onClick={() => props.handlePurchase(props.meal)}> {element} Purchase</button>
            </div>
        </div>
    );
};

export default Meal;