import React from "react";
import styled from "styled-components";

const MainPin = (props) => {
    let { pin } = props;
    return (
        <ImageWrapper>
            <ImageContainer>
                <img src={pin.imgURL} alt="pin" />
            </ImageContainer>
        </ImageWrapper>
    );
};

const ImageWrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img {
        display: flex;
        width: 100%;
        cursor: pointer;
        border-radius: 16px;
        object-fit: cover;
    }
`;

export default MainPin;
