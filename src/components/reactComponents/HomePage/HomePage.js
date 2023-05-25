import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Menu from './MainSection/Menu/Menu'
import About from './AboutSection/About';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact'

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Menu></Menu>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;