import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {
        type,
        width,
        border_radius,
        border,
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
        outline,
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
        border,
        outline,
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
    outline: "none",
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
    border: ${(props) => props.border};
    border-radius: ${(props) => props.border_radius};
    font-weight: ${(props) => props.font_weight};
    font-size: ${(props) => props.font_size};
    text-align: ${(props) => (props.text_align ? props.text_align : "center")};
    cursor: pointer;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }

    &.saveBtn {
        /* ${({ theme }) => theme.device.desktop} {
            width: 100%;
        } */
        &:hover {
            background-color: #ad081b;
        }
    }

    &.submitBtn,
    &.cancleBtn {
        &:hover {
            background-color: #e2e2e2;
        }
    }

    &.writable {
        background-color: #f41330;
        color: white;
        &:hover {
            background-color: #ad081b;
        }
    }

    &.unWritable {
        cursor: default;
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
            props.background_color ? props.background_color : "white"};
    }
`;

export default Button;
