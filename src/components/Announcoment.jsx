import styled from "styled-components";
import React from "react";


const Body = styled.div`
    background-color: var(--back-annc);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
`;

const Acnnoucoment = () => <Body>Super Deal! Free Shopping on Orders Over $50</Body>


export default React.memo(Acnnoucoment)