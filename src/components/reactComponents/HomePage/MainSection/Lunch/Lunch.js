import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Lunch = () => {
    const lunch = useSelector((state) => state.meals.lunchMenu)
    // console.log(breakfast)
    const renderMenu = lunch.map((meal) => {
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

export default Lunch;