import React from 'react';
import './Breakfast.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Breakfast = () => {
    const breakfast = useSelector((state) => state.meals.breakfastMenu)
    // console.log(breakfast)
    const renderMenu = breakfast.map((meal) => {
        const { mealImageURL, mealName, price, id } = meal
        return (
            <div className='breakfast-meal'>
                <Link to={`/meal/${id}`}>
                    <div className='breakfast-img-box'>
                        <img className='breakfast-image' src={mealImageURL} alt="" />
                    </div>
                    <h5 className='meal-name'>{mealName}</h5>
                    <p className='price'>${price}</p>
                </Link>
            </div>
        )
    })


    return <>{renderMenu}</>
};

export default Breakfast;