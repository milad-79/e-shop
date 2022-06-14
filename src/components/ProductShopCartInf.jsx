import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeCount, DeleteProduct } from "../container/action";
import { MyProvider } from "../context";

const Container = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex !important;
  padding: 5px 0 !important;
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  @media screen and (max-width: 638px) {
    width: 100%;
    height: 40vh;
  }
`;

const Left = styled.div`
  display: flex !important;
  width: 100%;
  justify-content: space-between !important;
`;

const ProductInfContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  padding: 10px 20px !important;
`;

const ProductDiv = styled.div`
  display: flex !important;
  gap: 5px;
  margin-bottom: 15px !important;
`;

const ProductLabel = styled.label`
  font-size: 17px;
  font-weight: 600;
`;

const ProductParagragh = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid var(--color);
  border-radius: 50%;
  background: ${(props) => props.bg};
  
`;

const CounterContainer = styled.div`
  display: flex !important;
  align-items: center;
  gap: 5px;
`;

const CounetrButton = styled.span`
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
`;

const Counter = styled.div`
  width: 27px;
  height: 27px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-weight: 500;
`;

const Price = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-top: 20px !important;
`;

const RemoveButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: var(--color);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
  margin-top: 20px !important;
  &:hover {
    opacity: 0.8;
  }
`;

function ProductShopCartInf({item}) {
  const [counter, setCounter] = useState(item.count);
  const dispatch = useDispatch();
  const { changeFunc } = useContext(MyProvider);

  //counter fuction
  const handelCounter = (action) => {
    if (counter > 1 && action === "decriment") {
      setCounter((perv) => perv - 1);
      changeFunc();
    } else if (action === "criment") {
      setCounter((perv) => perv + 1);
      changeFunc();
    }
  };


  // change count product
  useEffect(() => {
    dispatch(ChangeCount(counter, item.id));
  }, [dispatch, counter]);


  // for remove product form cart shop
  const handelRemove = () => {
    dispatch(DeleteProduct(item.id));
  };


  return (
    <React.Fragment>
      <Container key={item.id}>
        <ProductImage src={item.img} alt={item.name} />
        <Left>
          <ProductInfContainer>
            <ProductDiv>
              <ProductLabel>Product:</ProductLabel>
              <ProductParagragh>{item.name}</ProductParagragh>
            </ProductDiv>

            <ProductDiv>
              <ProductLabel>ID:</ProductLabel>
              <ProductParagragh>{item.id}</ProductParagragh>
            </ProductDiv>

            <ProductDiv>
              <ProductColor bg={item.color}></ProductColor>
            </ProductDiv>

            <ProductDiv>
              <ProductLabel>Size:</ProductLabel>
              <ProductParagragh>{item.size}</ProductParagragh>
            </ProductDiv>
          </ProductInfContainer>

          <ProductInfContainer>
            <CounterContainer>
              <CounetrButton onClick={() => handelCounter("decriment")}>
                -
              </CounetrButton>
              <Counter>{counter}</Counter>
              <CounetrButton onClick={() => handelCounter("criment")}>
                +
              </CounetrButton>
            </CounterContainer>

            <Price>${item.price}</Price>

            <RemoveButton onClick={handelRemove}>Remove</RemoveButton>
          </ProductInfContainer>
        </Left>
      </Container>
    </React.Fragment>
  );
}

export default React.memo(ProductShopCartInf);
