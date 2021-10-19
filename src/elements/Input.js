import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const { type, value, name, placeholder, _onClick, _onChange,margin,width } = props;
    const styles = {
        margin:margin,
        width:width,
    };

    return <DefaultInput type={type} value={value} name={name} placeholder={placeholder} onClick={_onClick} onChange={_onChange} {...styles} />;
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
    border-radius: ${(props) => (props.border_radius ? props.border_radius : "18px")};
    background-color: ${(props) => (props.background_color ? props.background_color : "transparent")};
    box-sizing: border-box;
    font-size: ${(props) => props.font_size};
    resize: none;
    overflow-y: scroll;

    &:focus {
        outline: none;
        box-shadow: rgba(3, 102, 214, 0.4) 0px 0px 0px 4px;
    }
`;

export default Input;
