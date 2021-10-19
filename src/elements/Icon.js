import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
    const { className, id, icon, _onClick, children } = props;
    return (
        <IconContainer className={className}>
            <FontAwesomeIcon
                className={className}
                icon={icon}
                id={id}
                onClick={_onClick}
            />
            {children}
        </IconContainer>
    );
};

const IconContainer = styled.div`
    text-align: center;
    width: 20px;
    cursor: pointer;

    &.header__tools {
        width: 48px;
        height: 48px;
        line-height: 48px;
    }

    &.profileDrop {
        margin: 0 5px;
        text-align: center;
    }

    &.commentDrop {
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 25px;
    }

    &.hover__bg {
        &:hover {
            border-radius: 100%;
            background-color: #c8c8c8;
        }
    }
`;

export default Icon;
