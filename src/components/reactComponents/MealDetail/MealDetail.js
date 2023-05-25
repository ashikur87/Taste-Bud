import React, { useEffect } from 'react';
import './MealDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setMeal } from '../../Redux/Actions/MealActions';
import fakeData from '../../../FakeData/MOCK_DATA.json'
import { Link } from 'react-router-dom';

const MealDetail = () => {
    const { mealId } = useParams();
    const dispatch = useDispatch();
    const meals = useSelector((state) => {
        return state.meals.setMenu
    })
    const id = parseInt(mealId)
    console.log(mealId)
    // console.log(meals)
    const filterMeal = meals.filter(meal => meal.id === id)
    useEffect(() => dispatch(setMeal(fakeData)), [dispatch]);
    // console.log(filterMeal)
    return (
        <div className='meal-detail-section'>
            <div className='meal-detail'>
                <h2>{filterMeal[0]?.mealName}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A qui laborum totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam optio sequi dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ea modi tempore laudantium.</p>
                <h4>${filterMeal[0]?.price}</h4>
                <Link to={`/order/${filterMeal[0]?.id}`}>
                    <button className='add-btn'>- ADD</button>
                </Link>
            </div>
            <div className='meal-detail-img'>
                <img src={filterMeal[0]?.mealImageURL} alt="" />
            </div>
        </div>
    );
};

export default MealDetail;