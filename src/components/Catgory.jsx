import React from "react";
import styled from "styled-components";
import { categories } from "../data";

const CatgoryWrapper= styled.div`
    display: flex;
    padding: 0 20px !important;
    margin-top: 15px !important;
    gap: 10px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 150vh;
        gap: 10px;
    }
`;

const CatgoryBody= styled.div`
    flex: 1;
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-image: url(${(props)=> props.bg});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        opacity: .85;
        transition: all .3s;
    }
`; 


const CatgoryTitle= styled.h3`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`; 


const CatgoryButton= styled.button`
    background-color: #fff;
    color: var(--color);
    cursor: pointer;
    width: 90px;
    height: 35px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px !important;
    font-weight: 600;
`;

function Catgory() {
    return ( 
        <CatgoryWrapper>
            {
                categories &&
                categories.map((item)=>(
                    <CatgoryBody bg={item.img} key={item.id}>
                        <CatgoryTitle>
                            {item.title}
                        </CatgoryTitle>
                        <CatgoryButton>
                            Shop Now
                        </CatgoryButton>
                    </CatgoryBody>
                ))
            }
        </CatgoryWrapper>
     );
}

export default React.memo(Catgory);