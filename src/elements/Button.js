import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {
        type,
        width,
        border_radius,
        height,
        margin,
        padding,
        font_weight,
        font_size,
        color,
        background_color,
        size,
        className,
        fixed,
        _onClick,
        text,
        text_align,
        children,
    } = props;

    const styles = {
        width,
        height,
        margin,
        padding,
        font_weight,
        font_size,
        color,
        border_radius,
        background_color,
        size,
        fixed,
        text_align,
    };

    if (type === "circle") {
        return (
            <CircleBtn
                {...styles}
                className={className}
                onClick={_onClick}
            >
                {text ? text : children}
            </CircleBtn>
        );
    }

    return (
        <React.Fragment>
            <DefaultBtn
                {...styles}
                className={className}
                onClick={_onClick}
            >
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
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    background-color: ${(props) =>
        props.background_color ? props.background_color : "white"};
    color: ${(props) => props.color};
    border: none;
    border-radius: ${(props) => props.border_radius};
    font-weight: ${(props) => props.font_weight};
    font-size: ${(props) => props.font_size};
    text-align: ${(props) =>
        props.text_align ? props.text_align : "center"};
    cursor: pointer;
    box-sizing: border-box;

    &.saveBtn {
        &:hover {
            background-color: #ad081b;
        }
    }
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
        background-color: ${(props) =>
            props.background_color
                ? props.background_color
                : "white"};
    }
`;

export default Button;
