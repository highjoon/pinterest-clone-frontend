import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { type, width, height, margin, padding, font_size, color, background_color, size, className, fixed, _onClick, text, children } = props;

    const styles = {
        width,
        height,
        margin,
        padding,
        font_size,
        color,
        background_color,
        size,
        fixed,
    };

    if (type === "circle") {
        return (
            <CircleBtn {...styles} className={className} onClick={_onClick}>
                {text ? text : children}
            </CircleBtn>
        );
    }

    return (
        <React.Fragment>
            <DefaultBtn {...styles} className={className} onClick={_onClick}>
                {text ? text : children}
            </DefaultBtn>
        </React.Fragment>
    );
};

Button.defaultProps = {
    width: "60px",
    height: "48px",
    margin: "0",
    padding: "0 16px 0 16px",
    fontSize: "12px",
    color: "#fff",
    backgroundColor: "black",
    cursor: "pointer",
    size: 10,
    _onClick: () => {},
};

const DefaultBtn = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.mg};
    padding: ${(props) => props.pd};
    background-color: ${(props) => (props.background_color ? props.background_color : "white")};
    color: ${(props) => props.color};
    border: none;
    border-radius: ${(props) => props.height};
    font-weight: ${(props) => props.font_weight};
    font-size: ${(props) => props.font_size};
    text-align: center;
`;

const CircleBtn = styled.button`
    --size: ${(props) => props.size};
    width: var(--size);
    height: var(--size);
    padding: 4px 4px 4px 4px;
    background-color: red;
    border: none;
    border-radius: var(--size);
    text-align: center;
    font-size: ${(props) => props.font_size};
    position: ${(props) => (props.fixed ? "fixed" : "")};

    &:hover {
        cursor: pointer;
        background-color: ${(props) => (props.background_color ? props.background_color : "white")};
    }
`;

export default Button;
