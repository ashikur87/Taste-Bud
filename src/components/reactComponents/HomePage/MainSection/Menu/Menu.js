import React, { useEffect, useState } from 'react';
import './Menu.css';
import fakeData from '../../../../../FakeData/MOCK_DATA.json';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner'
import { setMeal, setBreakfastMenu, setLunchMenu, setDinnerMenu, removeMenu } from '../../../../Redux/Actions/MealActions'
import { useDispatch, useSelector } from 'react-redux';
import AllMenu from '../AllMenu/AllMenu';


const Menu = () => {
    const meals = useSelector((state) => {
        return state.meals.setMenu;
    })
    const dispatch = useDispatch()
    
    useEffect(() => dispatch(setMeal(fakeData)), [dispatch])
  


    const handleMeal = (food) => {

        if (food === "Breakfast") {

            let dayMeal = fakeData.filter(meal => meal.meal === food);

            dispatch(removeMenu(dayMeal[0]))
            dispatch(setBreakfastMenu(dayMeal));
        }
        if (food === "Lunch") {
            let lunchMeal = fakeData.filter(meal => meal.meal === food);

            dispatch(removeMenu(lunchMeal[0]))
            dispatch(setLunchMenu(lunchMeal));

        }
        if (food === "Dinner") {

            let dinnerMeal = fakeData.filter(meal => meal.meal === food);

            dispatch(removeMenu(dinnerMeal[0]));
            dispatch(setDinnerMenu(dinnerMeal));
        }

    }
    return (
        <div className='main-section'>
            <h1 className='order-text'>Click Here To Order Your Meal</h1>
            <div className='menu-btn-section'>
                <button className='menu-btn' onClick={() => handleMeal("Breakfast")}>Breakfast</button>
                <button className='menu-btn' onClick={() => handleMeal("Lunch")}>Lunch</button>
                <button className='menu-btn' onClick={() => handleMeal("Dinner")}>Dinner</button>
            </div>
            <div className='menu'>
                {
                    meals.map(meal => <AllMenu key={meal.id} meal={meal}></AllMenu>)
                }
                <Breakfast></Breakfast>
                <Lunch></Lunch>
                <Dinner></Dinner>

            </div>
        </div>
    );
};

export default Menu;