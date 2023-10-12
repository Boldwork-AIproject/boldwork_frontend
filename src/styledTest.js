import React from 'react';
import './App.css';
import { ButtonLarge, ButtonMedium, ButtonSmall } from './styledComponents.js'
import { Container } from 'react-bootstrap';

const TestComponents = () => {
    return (
        <>
            <Container class="buttons">
                <br /><br />
                <h1>Buttons</h1>
                <ButtonLarge>Large</ButtonLarge>
                <ButtonMedium>Medium</ButtonMedium>
                <ButtonSmall>Small</ButtonSmall>
            </Container>

            <Container class="textbox">
                
            </Container>
        </>
    );
}

export default TestComponents;
