import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../elements";

const PostDesc = (props) => {
    return (
        <Flex
            width="90%"
            flex_direction="column"
            justify_content="flex-start"
            align_items="start"
        >
            <Text
                width="100%"
                font_size="14px"
                font_weight="400"
                text_align="left"
            >
                <PageLink href="#">logicre.net</PageLink>
            </Text>
            <PostTitle>
                <PageLink href="#" className="title">
                    29 DIY Winter Wedding Favors for Guests to Cozy Up
                    To
                </PageLink>
            </PostTitle>
            <Text
                width="100%"
                font_size="14px"
                font_weight="400"
                text_align="left"
            >
                When guests are done cozying up, let them take home
                some of your wedding magic with these DIY favors.
            </Text>
        </Flex>
    );
};

const PageLink = styled.a`
    outline: none;
    text-decoration: none;
    border-bottom: 1px solid black;

    &:link,
    &:visited,
    &:hover {
        color: black;
        text-decoration: none;
    }

    &.title {
        border: none;
    }
`;

const PostTitle = styled.h1`
    width: 100%;
    text-align: left;
    font-weight: 700;
    margin: 0;
    font-size: 36px;
`;

export default PostDesc;
