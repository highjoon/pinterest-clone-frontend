import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const { type, children } = props;
    const styles = {};

    if (type === "circle") {
        return <CircleImg {...styles}>{children}</CircleImg>;
    }

    if (type === "rect") {
        return <RectImg {...styles}>{children}</RectImg>;
    }

    return <DefaultImg {...styles}>{children}</DefaultImg>;
};

Image.defaultProps = {
    src: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
    _onClick: () => {},
};

const DefaultImg = styled.image``;
const CircleImg = styled.image``;
const RectImg = styled.image``;

export default Image;
