import React from "react";
import styled from "styled-components";

const Flex = (props) => {
    const { children } = props;
    const styles = {};
    return <FlexBox {...styles}>{children}</FlexBox>;
};

const FlexBox = styled.div`
    display: flex;
    justify-content: ${(props) => (props.justify_content ? `${props.justify_content};` : "center;")};
    align-items: ${(props) => (props.align_items ? `${props.align_items};` : "center;")};
    flex-direction: ${(props) => (props.flex_direction ? `${props.flex_direction};` : "row;")};
    flex-wrap: ${(props) => (props.flex_wrap ? `${props.flex_wrap};` : "wrap;")};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    text-align: center;
`;

export default Flex;
