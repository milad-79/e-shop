import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px !important;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  display: flex !important;
  flex-direction: column;
  color: var(--color);
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form`
  display: flex !important;
  flex-direction: column;
  margin-top: 20px !important;
`;

const BodyInput = styled.div`
  display: inherit !important;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px !important;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 5px;
  background-color: #fff;
  padding: 0 10px !important;
  font-size: 15px;
`;

const Button = styled.button`
  margin-top: 15px !important;
  height: 30px;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  background-color: var(--back-annc);
  border-radius: 5px;
  cursor: pointer;
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

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handelSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('userEshop', JSON.stringify(user));
      navigate('/')
    })
    .catch(() => {
      toast("opsss we can't sing in", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <Container>
      <Link to="/">
        <Icon>
          <ArrowBack />
        </Icon>
      </Link>
      <Wrapper>
        <Title>Sing In</Title>

        <Form onSubmit={handelSubmit}>
          <BodyInput>
            <Label>Email:</Label>

            <Input
              type="email"
              placeholder="exampel@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </BodyInput>

          <BodyInput>
            <Label>Password:</Label>

            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </BodyInput>
          <Button>Sing In</Button>
        </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
}

export default React.memo(SingIn);
