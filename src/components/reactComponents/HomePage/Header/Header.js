import React from 'react';
import './Header.css';
import headerImage from '../../../../images/header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail, faUtensils, faWineBottle, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <img className='header-img' src={headerImage} alt="" />
            <div className='header-detail'>
                <div className='header-box'>
                    <div className='header-logo-box'>
                        <FontAwesomeIcon className='header-logo' icon={faCocktail} />
                    </div>
                    <h3>Modern Fusion Food</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus suscipit dicta porro doloremque! Aut necessitatibus </p>
                </div>
                <div className='header-box'>
                    <div className='header-logo-box'>
                        <FontAwesomeIcon className='header-logo' icon={faUtensils} />
                    </div>
                    <h3>Culinary Recipes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nemo distinctio itaque, facilis alias esse.</p>
                </div>
                <div className='header-box'>
                    <div className='header-logo-box'>
                        <FontAwesomeIcon className='header-logo'  icon={faWineBottle} />
                    </div>
                    <h3>Aromatics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab eveniet quisquam, nulla excepturi autem.</p>
                </div>
                <div className='header-box'>
                    <div className='header-logo-box'>
                        <FontAwesomeIcon className='header-logo' icon={faWineGlassAlt} />
                    </div>
                    <h3>Taste</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut enim quas harum odit. Aspernatur?</p>
                </div>
            </div>
        </header>
    );
};

export default Header;