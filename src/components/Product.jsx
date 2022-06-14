import styled from "styled-components";
import React, { useState } from "react";
import {
  SearchOutlined,
  FavoriteBorder,
  Favorite
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
  background-color: lightgray;
  &:hover :last-child {
    display: flex;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
  justify-content: center;
  align-items: center;
`;

const ProductIconBody = styled.div`
  display: flex;
  gap: 10px;
`;

const ProductIcon = styled.span`
  width: 35px;
  height: 35px;
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  color: var(--color);
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

function Product({item}) {
  const handelSetData=(data)=>{
    localStorage.setItem('product', JSON.stringify(data))
  }

  const[like, setLike]=useState(false);

  return (
    <ProductWrapper>
      <ProductImg src={item.img} alt="" />
      <ProductIconWrapper>
        <ProductIconBody onClick={()=>setLike(!like)}>
          <ProductIcon>
            {like ?
            <Favorite style={{color: 'red'}}/>
            :
            <FavoriteBorder />
          }
          </ProductIcon>
          <Link to="/product">
            <ProductIcon onClick={()=> handelSetData(item)}>
              <SearchOutlined />
            </ProductIcon>
          </Link>
        </ProductIconBody>
      </ProductIconWrapper>
    </ProductWrapper>
  );
}

export default React.memo(Product);
