import React from 'react';
import './App.css';
import { ButtonLargePrimary, ButtonLargeOutline, ButtonLargeDisabled, ButtonLargeSecondary, 
         ButtonMediumPrimary, ButtonMediumOutline, ButtonMediumDisabled, ButtonMediumSecondary, 
         ButtonSmallPrimary, ButtonSmallOutline, ButtonSmallDisabled, ButtonSmallSecondary,
         Input,
         AvatarIcon, LinkIcon, KakaoIcon, NaverIcon, KakaoLabelIcon, NaverLabelIcon } from './styledComponents.js'
import { Container, Form } from 'react-bootstrap';

const TestComponents = () => {
    return (
        <>
            <Container class="buttons">
                <br /><br />
                <h1 class="display-5">Buttons</h1>
                <ButtonLargePrimary>Large</ButtonLargePrimary>
                <ButtonMediumPrimary>Medium</ButtonMediumPrimary>
                <ButtonSmallPrimary>Small</ButtonSmallPrimary>
                <br />
                <ButtonLargeOutline>Large</ButtonLargeOutline>
                <ButtonMediumOutline>Medium</ButtonMediumOutline>
                <ButtonSmallOutline>Small</ButtonSmallOutline>
                <br />
                <ButtonLargeDisabled>Large</ButtonLargeDisabled>
                <ButtonMediumDisabled>Medium</ButtonMediumDisabled>
                <ButtonSmallDisabled>Small</ButtonSmallDisabled>
                <br />
                <ButtonLargeSecondary>Large</ButtonLargeSecondary>
                <ButtonMediumSecondary>Medium</ButtonMediumSecondary>
                <ButtonSmallSecondary>Small</ButtonSmallSecondary>
            </Container>

            <Container class="input">
                <br /><br />
                <h1 class="display-5">Input</h1>
                <br />
                <h4>Input Default & Focus</h4>
                <Input placeholder="내용을 입력하세요" /><br /><br />
                <h4>Input Error</h4>
                <Input className="error" placeholder="내용을 입력하세요" /><br /><br />
                <h4>Input AutoFill</h4>
                <Input className="autofill" placeholder="이 내용은 자동으로 입력되었습니다" /><br /><br />
            </Container>

            <Container class="radio">
                <br /><br />
                <h1 class="display-5">Radio</h1>
                <br />
                <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="옵션 1" name="group1" type={type} id={`inline-${type}-1`} />
                    <Form.Check inline label="옵션 2" name="group1" type={type} id={`inline-${type}-2`} />
                    <Form.Check inline label="옵션 3" name="group1" type={type} id={`inline-${type}-3`} />
                    </div>
                ))}
                </Form>
            </Container>

            <Container class="tab">
                <br /><br />
                <h1 class="display-5">Tab</h1>
            </Container>

            <Container class="icons">
                <br /><br />
                <h1 class="display-5"> Icons</h1>
                <div class="m-3"><AvatarIcon /></div>
                <div class="m-3"><LinkIcon /></div>
                <div class="m-3"><KakaoIcon /></div>
                <div class="m-3"><KakaoLabelIcon /></div>
                <div class="m-3"><NaverIcon /></div>
                <div class="m-3"><NaverLabelIcon /></div>
            </Container>
        </>
    );
}

export default TestComponents;
