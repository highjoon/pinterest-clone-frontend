import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { children, _onClick } = props;
    const styles = {};
    return (
        <DefaultText {...styles} onClick={_onClick}>
            {children}
        </DefaultText>
    );
};

const DefaultText = styled.p`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.font_size};
    font-weight: ${(props) => props.font_weight};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    text-align: center;
    cursor: pointer;
    outline: none;
`;

export default Text;
