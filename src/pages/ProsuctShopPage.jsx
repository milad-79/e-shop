import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcoment from "../components/Announcoment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SetProduct } from "../container/action";

const Container = styled.div`
  display: flex !important;
  padding: 30px !important;
  @media screen and (max-width: 638px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  height: 90vh;
  @media screen and (max-width: 638px) {
    height: 40vh;
  }
`;

// right
const Right = styled.div`
  flex: 1.5;
  display: flex !important;
  flex-direction: column;
  padding: 5px 20px !important;
  color: var(--color);
  @media screen and (max-width: 638px) {
    flex: 1;
    padding: 5px 10px !important;
  }

  @media screen and (min-width: 638px) and (max-width: 900px) {
    flex: 1;
  }
`;

const ProductName = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;

const ProductDec = styled.p`
  font-size: 16px;
  width: 70%;
  font-weight: 500;
  margin-top: 15px !important;
  @media screen and (max-width: 638px) {
    width: 90%;
  }

  @media screen and (min-width: 638px) and (max-width: 900px) {
    width: 90%;
  }
`;

const Price = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-top: 15px !important;
`;

const FilteredBody = styled.div`
  display: flex !important;
  gap: 20px;
  margin-top: 30px !important;
`;

const ColorBody = styled.div`
  display: flex !important;
  gap: 5px;
`;

const FilterTitle = styled.label`
  font-size: 16px;
  font-weight: 300;
`;

const Color = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  border: 1px solid var(--color);
  &:focus {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

const SizeBody = styled.div`
  display: flex !important;
  align-items: center;
  gap: 5px;
`;

const SizeSelect = styled.select`
  padding: 3px !important;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const SizeOpetion = styled.option`
  font-size: 14px;
  font-weight: 300;
`;

const ButtomContainer = styled.div`
  display: flex !important;
  align-items: center;
  gap: 40px;
  margin-top: 30px !important;
`;

const CounetrContainer = styled.div`
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

const AddButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color);
  }
`;

const Added= styled.span`
   font-size: 16px;
  font-weight: 500;
`

function ProductShopPage() {
  const productInf = JSON.parse(localStorage.getItem("product"));
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState(productInf.color[0]);
  const [size, setSize] = useState(productInf.size[0]);
  const list= useSelector((state)=> state.products);
  const dispatch = useDispatch();


  // filter product with id in state
  const filtered= list.filter((item)=> item.id === productInf.id)
 
  const HandelAddCart = () => {
    dispatch(
      SetProduct({
        color: color,
        size: size,
        count: counter,
        img: productInf.img,
        id: productInf.id,
        price: productInf.price,
        name: productInf.name,
      })
    );
  };

  const handelCounter = (action) => {
    if (counter > 1 && action === "decriment") {
      setCounter((perv) => perv - 1);
    } else if (action === "criment") {
      setCounter((perv) => perv + 1);
    }
  };

  const handelSetColor = (data) => {
    setColor(data);
  };

  const handelSetSize = (data) => {
    setSize(data);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Announcoment />
      <Container>
        <Left>
          <Poster src={productInf.poster} alt={productInf.name} />
        </Left>
        <Right>
          <ProductName>{productInf.name}</ProductName>
          <ProductDec>{productInf.dec}</ProductDec>
          <Price>${productInf.price}</Price>
          <FilteredBody>
            <ColorBody>
              <FilterTitle>Color:</FilterTitle>
              {productInf.color.map((item, idx) => (
                <Color
                  bg={item}
                  key={idx}
                  data-color={item}
                  onClick={(e) =>
                    handelSetColor(e.target.getAttribute("data-color"))
                  }
                ></Color>
              ))}
            </ColorBody>

            <SizeBody>
              <FilterTitle>Size:</FilterTitle>
              <SizeSelect onChange={(e) => handelSetSize(e.target.value)}>
                {productInf.size.map((item, idx) => (
                  <SizeOpetion value={item} key={idx}>
                    {item}
                  </SizeOpetion>
                ))}
              </SizeSelect>
            </SizeBody>
          </FilteredBody>
          <ButtomContainer>
            <CounetrContainer>
              <CounetrButton onClick={() => handelCounter("decriment")}>
                -
              </CounetrButton>
              <Counter>{counter}</Counter>
              <CounetrButton onClick={() => handelCounter("criment")}>
                +
              </CounetrButton>
            </CounetrContainer>

           {
             filtered.length > 0 ?

             <Added>Added to Cart</Added>
             :
             <AddButton onClick={HandelAddCart}>Add To Cart</AddButton>
           }
          </ButtomContainer>
        </Right>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default React.memo(ProductShopPage);
