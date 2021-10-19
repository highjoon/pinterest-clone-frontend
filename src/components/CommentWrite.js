import React from "react";
import { Flex, Input, Image, Text } from "../elements";
import { CommentList } from "./";

const CommentWrite = (props) => {
    const { hidden } = props;

    return (
        <Flex
            width="100%"
            flex_direction="row"
            flex_wrap="wrap"
            justify_content="flex-start"
        >
            <CommentList hidden={hidden} />
            <Text
                width="100%"
                font_size="14px"
                font_weight="400"
                text_align="left"
            >
                피드백을 공유하거나 질문을 하거나 칭찬을 남겨주세요
            </Text>
            <Image
                type="circle"
                className="profile"
                width="48px"
                height="48px"
                color="white"
                background_color="#045391"
                cursor="pointer"
            />
            <Input
                type="textarea"
                className="commentWrite"
                width="80%"
                height="48px"
                margin="0px auto"
                padding="16px 16px"
                font_size="16px"
                border="1px solid #ddd"
                border_radius="26px"
                placeholder="댓글 추가"
            />
        </Flex>
    );
};

export default CommentWrite;
