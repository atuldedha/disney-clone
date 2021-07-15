import React from 'react'
import styled from 'styled-components'
import './Login.css'

const Login = () => {
    return (
        <Container>
            <Content>
                <ContentLogoOne>
                    <img src = "/images/cta-logo-one.svg" />
                </ContentLogoOne>

                <SignUp>GET ALL THERE</SignUp>

                <Description>
                    tttttttttttttttttttttttttttttttt
                    tttttttttttttttttttttttttttttttttttttt
                    tttttttttttttttttttttttttttttttttttttttttt
                    ttttttttttttttttttttttttttttttttttttttttttttt
                    tttttttttttttttttttttttttttttttttttttttttt
                </Description>

                <div className = "contentLogoTwo">
                    <img src = "/images/cta-logo-two.png" />
                </div>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;


    &:before {
        background-position: top;
        background-size: cover;
        background-image: url("/images/login-background.jpg");
        content : "";
        position : absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;

    }
`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

const ContentLogoOne = styled.div`

`

const SignUp = styled.a`
    width: 100%;
    font-weight: bold;
    background-color: #0063e5;    
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee; 
    }
`

const Description = styled.p`
    line-height: 1.5;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;

`