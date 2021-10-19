import React from "react";
import styled from "styled-components";
import { Flex, Image, Text } from "../elements";

const PostSaveInfo = (props) => {
    const { user, board } = props;
    return (
        <Flex
            width="90%"
            height="92px"
            flex_direction="column"
            justify_content="flex-end"
            align_items="center"
        >
            <Flex
                width="100%"
                margin="0px auto 20px auto"
                flex_direction="row"
                flex_wrap="wrap"
                justify_content="flex-start"
            >
                <Image
                    type="circle"
                    className="profile"
                    width="32px"
                    height="32px"
                    color="white"
                    background_color="#045391"
                />
                <Text margin="0px auto 0px 10px" font_size="14px">
                    <SpanText className="bold">
                        <PageLink>{`${user}`}</PageLink>
                    </SpanText>
                    님이{" "}
                    <SpanText className="bold">
                        <PageLink>{`${board}`}</PageLink>
                    </SpanText>
                    에 저장
                </Text>
            </Flex>
        </Flex>
    );
};

const SpanText = styled.span`
    font-size: 14px;
    &.bold {
        font-weight: bold;
    }
`;

const PageLink = styled.a`
    outline: none;
    text-decoration: none;
    cursor: pointer;

    &:link,
    &:visited,
    &:hover {
        color: black;
        text-decoration: none;
        border-bottom: 1px solid black;
    }
`;

export default PostSaveInfo;
