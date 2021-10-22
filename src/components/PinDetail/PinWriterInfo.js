import React from "react";
import styled from "styled-components";
import { Flex, Avatar } from "../../elements";

const PostWriterInfo = (props) => {
    const { user } = props;
    const name = localStorage.getItem("user_name");
    return (
        <Flex width="100%" margin="20px auto" justify_content="flex-start">
            <Avatar fontSize="1.5rem">{name.slice(0, 1).toUpperCase()}</Avatar>
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
