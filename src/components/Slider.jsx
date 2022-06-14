import React, { PureComponent } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "../data";
import styled from "styled-components";

const LeftClick = (props) => {
  const { style, className, onClick } = props;
  return (
    <ChevronLeft
      className={className}
      style={{
        ...style,
        color: "var(--color)",
        left: "10px",
        fontSize: "25px",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        zIndex: "100",
        background: "rgba(255, 255, 255, 0.4)",
      }}
      onClick={onClick}
    />
  );
};

const RightClick = (props) => {
  const { style, className, onClick } = props;
  return (
    <ChevronRight
      className={className}
      style={{
        ...style,
        color: "var(--color)",
        right: "10px",
        fontSize: "25px",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.4)",
      }}
      onClick={onClick}
    />
  );
};

const MainSliderBody = styled.div`
  width: 100%;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const BodySlider = styled.div`
display: flex !important;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #${(props) => props.bg};
`;


const TextSlider = styled.div`
  display: flex;
  flex: 2 !important;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color);
`;


const BodyImgSlider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (min-width: 425px) and (max-width: 1024px){
    display: none;
  }
`;


const ImgSlider = styled.img`
  height: 80%;
`;

const TextSliderTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;


const TextSliderDeccription = styled.p`
  font-size: 20px;
  color: var(--color);
  margin-top: 30px !important;
  font-weight: 500;
  padding: 0 20px !important;
`;


const ShopButton = styled.button`
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
  border: 2px solid var(--color);
  margin-top: 30px !important;
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export default class SimpleSlider extends PureComponent {
  render() {
    const settings = {
      infinite: true,
      speed: 1400,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightClick />,
      prevArrow: <LeftClick />,
    };

    return (
      <MainSliderBody>
        <Slider {...settings} >
          {sliderItems &&
            sliderItems.map((item) => (
              <BodySlider bg={item.bg} key={item.id}>
                <BodyImgSlider>
                <ImgSlider src={item.img} alt={item.title}/>
                </BodyImgSlider>
                <TextSlider>
                  <TextSliderTitle>{item.title}</TextSliderTitle>
                  <TextSliderDeccription>{item.desc}</TextSliderDeccription>
                  <ShopButton>
                  Shop Now
                </ShopButton>
                </TextSlider>  
              </BodySlider>
            ))}
        </Slider>
      </MainSliderBody>
    );
  }
}
