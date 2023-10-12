import React from 'react';
import './App.css';
import { ButtonLarge, ButtonMedium, ButtonSmall } from './styledComponents.js'

const TestComponents = () => {
    return (
        <>
            <h1>Buttons</h1>
            <ButtonLarge>Large</ButtonLarge>
            <ButtonMedium>Medium</ButtonMedium>
            <ButtonSmall>Small</ButtonSmall>
        </>
    );
}

export default TestComponents;
