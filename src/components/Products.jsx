import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React from "react";

const Container= styled.div`
    display: flex;
    flex-direction: column;
    padding:20px !important;
    margin-top: 20vh !important;
    @media screen and (max-width: 425px){
        margin-top: 8vh !important;
        text-align: center;
    }
`;

const Title= styled.h1`
    font-size: 35px;
    color: var(--color);
    font-weight: 600;
    
`;

const ProductsWrapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px !important;
    @media screen and (max-width: 425px){
        margin-top: 8vh !important;
    }
`;

function Products() {
    return ( 
       <Container>
           <Title>
                Our Products
           </Title>
            <ProductsWrapper>
            {
                popularProducts&&
                popularProducts.map((item)=>(
                    <Product item={item} key={item.id}/>
                ))
            }
        </ProductsWrapper>
       </Container>
     );
}

export default React.memo(Products);