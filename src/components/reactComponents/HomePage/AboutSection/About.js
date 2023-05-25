import React from 'react';
import './About.css'
import fresh from '../../../../images/chef.jpg';
import fire from '../../../../images/fire.jpg';
import friendly from '../../../../images/friendly.jpg';

const About = () => {
    return (
        <div className='about-section'>
            <div >
                <h1 className='about-header'>Why Choose Us</h1>
            </div>
            <div className='about'>
                <div className='quality'>
                    <img src={fresh} alt="" />
                    <h3>Fresh Products</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
                </div>
                <div className='quality'>
                    <img src={fire} alt="" />
                    <h3>Delicious Foods</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
                </div>
                <div className='quality'>
                    <img src={friendly} alt="" />
                    <h3>Relaxing Atmosphere</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
                </div>
            </div>

        </div>
    );
};

export default About;