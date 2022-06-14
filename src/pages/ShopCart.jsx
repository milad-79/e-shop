import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcoment from "../components/Announcoment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MyProvider } from "../context";
import ProductShopCartInf from "../components/ProductShopCartInf";
import { CheckOut } from "../container/action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex !important;
  padding: 0 30px !important;
  margin-top: 20px !important;
  @media screen and (max-width: 638px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const PageNameContainer = styled.div`
  height: 40px;
  color: var(--color);
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

const PageName = styled.h1`
  font-size: 35px;
  font-weight: 300;
`;

// left
const Left = styled.div`
  flex: 3;
  display: flex !important;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    flex: 2;
  }
`;

// right
const Right = styled.div`
  flex: 1;
  padding: 0 15px !important;
  position: relative;
`;

const ShopInf = styled.div`
  width: 100%;
  padding: 15px !important;
  border: 1px solid lightgray;
  border-radius: 8px;
  display: flex !important;
  flex-direction: column;
  position: sticky;
  top: 10px;
`;

const ShopInfTitle = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px !important;
`;

const InfBody = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  display: flex !important;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

const Inf = styled.div`
  display: flex !important;
  width: 100%;
  margin-top: 15px !important;
  justify-content: space-between !important;
  gap: 10px;
`;

const ProductName = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const TotalContainer = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  margin-top: 15px !important;
`;

const TotalSpan = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const CheckedButton = styled.button`
  height: 35px;
  font-size: 13px;
  font-weight: 400;
  margin-top: 20px !important;
  cursor: pointer;
  background-color: var(--color);
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;

function ShopCart() {
  const list = useSelector((state) => state.products);
  const [toptal, setTotal] = useState();
  const { change } = useContext(MyProvider);
  const dispatch = useDispatch();

  // ever change count of product re-render and show it in total
  useEffect(() => {
    var sum = 0;
    list &&
      list.map((item) => {
        return (sum += item.price * item.count);
      });
    setTotal(sum);
  }, [list, change]);

  // checkout fun
  const handelCheckout = () => {
    if (list.length > 0) {
      dispatch(CheckOut());
      toast(" Thanks for Shopping", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      toast(" Plase first Select your Product", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Announcoment />
      <PageNameContainer>
        <PageName>Your Cart</PageName>
      </PageNameContainer>
      <Container>
        {/* ----------------------------- */}
        <Left>
          {list && list.map((item) => <ProductShopCartInf item={item} key={item.id}/>)}
        </Left>

        {/* ------------------------------ */}
        <Right>
          <ShopInf>
            <ShopInfTitle>Your Cart</ShopInfTitle>
            <InfBody>
              {list &&
                list.map((item) => (
                  <Inf>
                    <ProductName>{item.name}</ProductName>
                    <Price>${item.price * item.count}</Price>
                  </Inf>
                ))}
            </InfBody>
            <TotalContainer>
              <TotalSpan>Total:</TotalSpan>
              <TotalSpan>${toptal}</TotalSpan>
            </TotalContainer>

            <CheckedButton onClick={handelCheckout}>CHECKOUT NOW</CheckedButton>
          </ShopInf>
        </Right>
        <ToastContainer />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default React.memo(ShopCart);
