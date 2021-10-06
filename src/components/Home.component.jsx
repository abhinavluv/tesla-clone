import React from 'react';
import styled from 'styled-components';
import Section from './Section.component';

const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImage='model-s.jpg'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                downArrow='true'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImage='model-y.jpg'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                downArrow='true'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImage='model-3.jpg'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                downArrow='true'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImage='model-x.jpg'
                leftButtonText='Custom Order'
                rightButtonText='Existing Inventory'
                downArrow='true'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back Guarantee'
                backgroundImage='solar-panel.jpg'
                leftButtonText='Order Now'
                rightButtonText='Learn More'
                downArrow='true'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roofs cost less than a new roof plus Solar Panels'
                backgroundImage='solar-roof.jpg'
                leftButtonText='Order Now'
                rightButtonText='Learn More'
                downArrow='true'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImage='accessories.jpg'
                leftButtonText='Shop Now'
            />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height: 100vh;
`;
