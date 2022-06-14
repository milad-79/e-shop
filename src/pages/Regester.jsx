import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MyProvider } from "../context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  color: var(--color);
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 0 15px !important;
  margin-top: 30px !important;
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 20px;
  justify-content: center;
  padding: 15px !important;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Form = styled.form`
  display: flex !important;
  flex-direction: column;
`;

const BodyInput = styled.div`
  display: flex !important;
  flex-direction: column;
  margin-top: 15px !important;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled.input`
  height: 35px;
  padding: 0 15px !important;
  background: #fff;
  border: 2px solid var(--color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const Icon = styled.span`
  position: absolute;
  top: 3%;
  left: 3%;
  width: 35px;
  height: 35px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 25px;
  background-color: #fff;
  color: var(--color);
  cursor: pointer;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-top: 20px !important;
  font-size: 16px;
  font-weight: 500;
  background-color: #fff;
  border: 2px solid var(--color);
  border-radius: 8px;
  cursor: pointer;
  &:focus {
    transform: scale(1.1);
    border: none;
    color: #fff;
    background-color: var(--color);
    transition: all 0.3s;
  }
`;

export default class PaymentForm extends React.PureComponent {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  static contextType = MyProvider;

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.cvc &&
      this.state.expiry &&
      this.state.focus &&
      this.state.name &&
      this.state.number
    ) {
      this.context.cartFunc(this.state);
      toast("your Cart is Regester Please Back to Home", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(" Plase fill all filds", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  render() {
    return (
      <Container id="PaymentForm">
        <Link to="/">
          <Icon>
            <ArrowBack />
          </Icon>
        </Link>

        <Title>Regester Your Cart</Title>
        <Wrapper>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <Form onSubmit={this.handelSubmit}>
            <BodyInput>
              <Label>Cart Number:</Label>
              <Input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </BodyInput>
            <BodyInput>
              <Label>Name:</Label>
              <Input
                type="text"
                name="name"
                placeholder="Max"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </BodyInput>

            <BodyInput>
              <Label>Vaild Ture:</Label>
              <Input
                type="text"
                name="expiry"
                placeholder="**/**"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </BodyInput>

            <BodyInput>
              <Label>CVC:</Label>
              <Input
                type="text"
                name="cvc"
                placeholder="****"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </BodyInput>

            <Button type="submit">Regester</Button>
          </Form>
        </Wrapper>
        <ToastContainer />
      </Container>
    );
  }
}
