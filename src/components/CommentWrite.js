import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Input, Image, Text, Button } from "../elements";
import { CommentList } from "./";

const CommentWrite = (props) => {
    const { hidden, comments } = props;
    let [isActive, setIsActive] = useState(false);
    let [isWrite, setIsWrite] = useState(false);
    const activeInput = (e) => {
        setIsActive(true);
    };
    const activeSubmit = (e) => {
        if (e.target.value.length > 0) {
            setIsWrite(true);
            console.log(isWrite);
        }
    };

    return (
        <Flex
            width="100%"
            flex_direction="row"
            flex_wrap="wrap"
            justify_content="flex-start"
        >
            <CommentList hidden={hidden} comments={comments} />
            <Flex>
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
                    _onClick={activeInput}
                    _onChange={activeSubmit}
                />
                {isActive ? (
                    <Flex
                        width="90%"
                        flex_direction="row-reverse"
                        justify_content="flex-start"
                        align_items="start"
                        margin="10px auto"
                        className="btnContainer"
                    >
                        <Button
                            className="submitBtn"
                            width="60px"
                            height="40px"
                            border_radius="26px"
                            background_color="#E2E2E2"
                            color="#767676"
                            font_size="14px"
                            font_weight="700"
                        >
                            완료
                        </Button>
                        <Button
                            className="cancleBtn"
                            width="60px"
                            height="40px"
                            border_radius="26px"
                            background_color="#E2E2E2"
                            color="black"
                            font_size="14px"
                            font_weight="700"
                            margin="auto 8px auto auto"
                        >
                            취소
                        </Button>
                    </Flex>
                ) : (
                    ""
                )}
            </Flex>
        </Flex>
    );
};

export default CommentWrite;
