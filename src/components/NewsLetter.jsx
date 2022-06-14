import styled from "styled-components";
import { Send } from "@mui/icons-material";
import React from "react";

const Container= styled.div`
    margin: 20px !important;
    display: flex;
    flex-direction: column;
    padding: 80px 20px !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color);
    background-color: var(--bg-news);
`;

const NewsTitle= styled.h1`
    font-size: 55px;
    font-weight: 600;
`;

const NewsText= styled.span`
    font-size: 30px;
    font-weight: 400;
    margin-top: 15px !important;
`;

const NewsInputBody= styled.div`
    display: flex !important;
    flex-direction: row !important;
    width: 50%;
    margin-top: 20px !important;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const NewsInput= styled.input`
    width: 100%;
    height: 35px;
    background: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px !important;
    &::placeholder{
        color: var(--color);
        font-size: 16px;
        font-weight: 600;
    }
`;


const NewsIcon= styled.span`
    background-color: var(--back-annc);
    height: 35px;
    width: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
`;

function NewsLetter() {
    return ( 
        <Container>
            <NewsTitle>
                Newsletter
            </NewsTitle>
            <NewsText>
                Get timely updates form your favorite products
            </NewsText>
            <NewsInputBody>
                <NewsInput type="email" placeholder="Subscribe To Join Us..."/>
                <NewsIcon>
                <Send/>
            </NewsIcon>
            </NewsInputBody>
            
        </Container>
     );
}

export default React.memo(NewsLetter);