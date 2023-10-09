import React from 'react';
import Hero from '../../components/Header/Hero/Hero';
import Features from '../../components/Features/Features';
import OverView from '../../components/OverView/OverView';
import Speakers from '../../components/Speakers/Speakers';
import Pricetable from '../../components/PriceTable/Pricetable';
import Services from '../../components/Service/Services';
import FaqSection from '../../components/FaqSection/FaqSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <OverView></OverView>
            <Speakers></Speakers>
            <Pricetable></Pricetable>
            <Services></Services>
            <FaqSection></FaqSection>
        </div >
    );
};

export default Home;