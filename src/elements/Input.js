import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const {
        className,
        width,
        height,
        margin,
        padding,
        border,
        border_radius,
        type,
        value,
        name,
        placeholder,
        _onClick,
        _onChange,
        font_size,
        _ref,
        _onKeyPress,
    } = props;
    const styles = {
        width,
        height,
        margin,
        padding,
        border,
        border_radius,
        font_size,
    };

    return (
        <DefaultInput
            {...styles}
            type={type}
            className={className}
            value={value}
            name={name}
            placeholder={placeholder}
            onClick={_onClick}
            onChange={_onChange}
            ref={_ref}
            onKeyPress={_onKeyPress}
            {...styles}
        />
    );
};

Input.defaultProps = {
    _onClick: () => {},
    _onChange: () => {},
};

const DefaultInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border: ${(props) => (props.border ? props.border : "2px solid black")};
    border-radius: ${(props) =>
        props.border_radius ? props.border_radius : "18px"};
    background-color: ${(props) =>
        props.background_color ? props.background_color : "transparent"};
    box-sizing: border-box;
    font-size: ${(props) => props.font_size};
    resize: none;
    outline: none;
    overflow-y: scroll;

    &:focus {
        outline: none;
        box-shadow: rgba(3, 102, 214, 0.4) 0px 0px 0px 4px;
    }

    &.commentWrite {
        &::-webkit-input-placeholder {
            font-size: 16px;
        }
    }
`;

export default Input;
