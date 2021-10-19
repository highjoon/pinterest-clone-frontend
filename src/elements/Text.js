import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {
        width,
        height,
        margin,
        font_size,
        font_weight,
        text_align,
        line_height,
        border,
        border_radius,
        children,
        _onClick,
    } = props;
    const styles = {
        width,
        height,
        margin,
        font_size,
        font_weight,
        text_align,
        line_height,
        border,
        border_radius,
    };
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
    text-align: ${(props) =>
        props.text_align ? props.text_align : "center"};
    line-height: ${(props) =>
        props.line_height ? props.line_height : ""};
    border: ${(props) => (props.border ? props.border : "")};
    border-radius: ${(props) =>
        props.border_radius ? props.border_radius : ""};
    cursor: ${(props) => (props.cursor ? props.cursor : "")};
    outline: none;
`;

export default Text;
