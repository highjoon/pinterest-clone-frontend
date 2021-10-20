import React from "react";
import styled from "styled-components";
function MainPin(props) {
    let { pin } = props;
    return (
        <ImageWrapper>
            <ImageContainer>
                <img src={pin.imgURL} alt="pin" />
            </ImageContainer>
        </ImageWrapper>
    );
}

export default MainPin;

