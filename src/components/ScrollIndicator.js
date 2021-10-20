import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const ScrollIndicator = () => {
    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return (
        <scrollContainer>
            <indicator />
        </scrollContainer>
    );
};

export default ScrollIndicator;

const scrollContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
`;

const indicator = styled.div`
    height: 100%;
    background: red;
`;
