import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyProvider } from "../context";

const Container = styled.div`
  height: 60px;
  @media screen and (max-width: 425px) {
    height: 50px;
  }
`;

const Wrapper = styled.div`
  padding: 0px 20px !important;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;
// ----------------------
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`;

const InputSearch = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding: 0 10px !important;
  color: var(--color);
`;

// ------------------------------
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  color: var(--color);
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

// ---------------------------
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: right;
  @media screen and (max-width: 425px) {
    gap: 15px;
    flex: 3;
  }
`;

const LinkButton = styled.span`
  color: var(--color);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
`;

function NavBar() {
  const [countProduct, setCountProduct] = useState();
  const list = useSelector((state) => state.products);
  const context = useContext(MyProvider);

  useEffect(() => {
    setCountProduct(list.length);
  }, [list.length]);

  return (
    <Container>
      <Wrapper>
        {/* -------------------------------- */}
        <Left>
          <SearchContainer>
            <InputSearch placeholder="Search..." />
            <Search style={{ fontSize: "25px", color: `var(--color)` }} />
          </SearchContainer>
        </Left>
        {/* -------------------------------- */}
        <Center>
          <Logo>MILAD</Logo>
        </Center>
        {/* -------------------------------- */}
        <Right>
          {JSON.parse(localStorage.getItem("userEshop")) ? null : (
            <Link to="/sing-in">
              <LinkButton>SING IN</LinkButton>
            </Link>
          )}

          {context.cart ? null : (
            <Link to="/regester">
              <LinkButton>REGISTER</LinkButton>
            </Link>
          )}

          <Link to="/">
            <LinkButton>HOME</LinkButton>
          </Link>
          <Badge
            color="primary"
            badgeContent={countProduct}
            max={4}
            style={{ cursor: "pointer" }}
          >
            <Link to="/shop-cart">
              <ShoppingCartOutlined color="action" />
            </Link>
          </Badge>
        </Right>
        {/* -------------------------------- */}
      </Wrapper>
    </Container>
  );
}

export default React.memo(NavBar);
