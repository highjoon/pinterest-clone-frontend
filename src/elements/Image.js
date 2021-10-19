import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {
        className,
        width,
        height,
        type,
        src,
        border,
        border_radius,
        cursor,
        children,
    } = props;
    const styles = { width, height, border, border_radius, cursor };

    if (type === "circle") {
        return (
            <CircleImg {...styles} className={className} src={src}>
                {children}
            </CircleImg>
        );
    }

    if (type === "rect") {
        return (
            <RectImg {...styles} className={className} src={src}>
                {children}
            </RectImg>
        );
    }

    return (
        <DefaultImg {...styles} className={className} src={src}>
            {children}
        </DefaultImg>
    );
};

Image.defaultProps = {
    src: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
    _onClick: () => {},
};

const DefaultImg = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.border_radius};
    cursor: ${(props) => (props.cursor ? "pointer" : "")};
`;
const CircleImg = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
    border-radius: 100%;
    cursor: ${(props) => (props.cursor ? "pointer" : "")};
`;
const RectImg = styled.img``;

export default Image;
