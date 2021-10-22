import React from "react";
import styled from "styled-components";
import { Flex, Image } from "../elements";

const PostWriterInfo = (props) => {
    const { user } = props;

    return (
        <Flex width="100%" margin="20px auto" justify_content="flex-start">
            <Image
                type="circle"
                className="profile"
                width="48px"
                height="48px"
                color="white"
                background_color="#045391"
                cursor="pointer"
            />
            <Flex
                margin="0px auto 0px 10px"
                flex_direction="column"
                justify_content="flex-start"
                align_items="start"
            >
                <SpanText className="bold">{user}</SpanText>
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

export default PostWriterInfo;
