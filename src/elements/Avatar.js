import React from "react";
import styled from "styled-components";

const Avatar = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

Avatar.defaultProps = {
    display: "flex",
    fontSize: "2.0rem",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
};

const Wrapper = styled.div`
    display: flex;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: white;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.width};
    border-radius: 50%;
    background-color: ${"#" + Math.floor(Math.random() * 16777215).toString(16)};
    @media (min-width: 0px) and (max-width: 755px) {
        width: 25px;
    }
`;
export default Avatar;
