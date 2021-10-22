import React from "react";
import styled from "styled-components";
import { Flex, Avatar, Text } from "../../elements";

const PostSaveInfo = (props) => {
    const { user, board } = props;
    const name = localStorage.getItem("user_name");
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
                {/* (성민) 유저프로필 이미지 아이디에서 첫번쨰에서 불러옴         */}
                <Avatar width="36px" height="36px" fontSize="0.8rem">
                    {name.slice(0, 1).toUpperCase()}
                </Avatar>
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
