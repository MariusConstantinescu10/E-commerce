import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Categorii from '../components/Categorii';
import Products from '../components/Products';
import FavoriteProducts from '../components/FavoriteProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categorii/>
            <Categories/>
            <FavoriteProducts/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
