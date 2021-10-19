import React from "react";
import styled from "styled-components";

const Flex = (props) => {
    const {
        className,
        width,
        height,
        margin,
        padding,
        justify_content,
        align_items,
        flex_direction,
        flex_wrap,
        border_radius,
        background_color,
        box_shadow,
        children,
        gap,
        cursor,
        hidden,
    } = props;

    const styles = {
        width,
        height,
        margin,
        padding,
        justify_content,
        align_items,
        flex_direction,
        flex_wrap,
        border_radius,
        background_color,
        box_shadow,
        gap,
        cursor,
    };

    if (hidden) {
        return (
            <FlexBox {...styles} display="none" className={className}>
                {children}
            </FlexBox>
        );
    } else {
        return (
            <FlexBox {...styles} className={className}>
                {children}
            </FlexBox>
        );
    }
};

const FlexBox = styled.div`
    display: flex;
    justify-content: ${(props) =>
        props.justify_content
            ? `${props.justify_content}`
            : "center"};
    align-items: ${(props) =>
        props.align_items ? `${props.align_items}` : "center"};
    flex-direction: ${(props) =>
        props.flex_direction ? `${props.flex_direction}` : "row"};
    flex-wrap: ${(props) =>
        props.flex_wrap ? `${props.flex_wrap};` : "wrap"};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border-radius: ${(props) => props.border_radius};
    background-color: ${(props) => props.background_color};
    box-shadow: ${(props) =>
        props.box_shadow ? props.box_shadow : ""};
    gap: ${(props) => (props.gap ? props.gap : "")};
    cursor: ${(props) => (props.cursor ? props.cursor : "")};
    display: ${(props) => (props.display ? props.display : "")};

    &.PostWrapper {
        ${({ theme }) => theme.device.desktop} {
            flex-direction: column;
        }
    }

    &.PostImageBox,
    &.PostDescBox {
        ${({ theme }) => theme.device.desktop} {
            width: 100%;
        }
    }
`;

export default Flex;
