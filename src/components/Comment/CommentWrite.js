import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Flex, Input, Avatar, Text, Button } from "../../elements";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import { CommentList } from "..";

const CommentWrite = (props) => {
    const dispatch = useDispatch();
    const { hidden, comments, storedId } = props;
    const name = localStorage.getItem("user_name");

    let [isActive, setIsActive] = useState(false);
    let [isWrite, setIsWrite] = useState(false);
    let commentText = useRef();

    const activateInput = (e) => setIsActive(true);
    const deActivateInput = (e) => {
        if (window.confirm("정말로 취소하시겠습니까?")) {
            commentText.current.value = "";
            setIsActive(false);
        }
    };
    const onEnterSubmit = (e) => {
        if (e.key === "Enter") {
            submitComment();
            e.target.value = "";
        }
    };

    const activateSubmit = (e) => {
        let len = e.target.value.length;
        if (!len) setIsWrite(false);
        if (len) setIsWrite(true);
    };

    const submitComment = (e) => {
        if (commentText.current.value) {
            const commentObj = {
                content: commentText.current.value,
                pin: Number(storedId),
            };
            dispatch(commentActions.addCommentAPI(commentObj));
            commentText.current.value = "";
        }
    };

    return (
        <Flex
            width="100%"
            flex_direction="row"
            flex_wrap="wrap"
            justify_content="flex-start"
        >
            <CommentList hidden={hidden} comments={comments} storedId={storedId} />
            <Flex>
                <Text width="100%" font_size="14px" font_weight="400" text_align="left">
                    피드백을 공유하거나 질문을 하거나 칭찬을 남겨주세요
                </Text>
                {/* (성민) 유저프로필 이미지 아이디에서 첫번쨰에서 불러옴         */}
                <Avatar fontSize="1.5rem">{name.slice(0, 1).toUpperCase()}</Avatar>
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
                    _onClick={activateInput}
                    _onChange={activateSubmit}
                    _ref={commentText}
                    _onKeyPress={onEnterSubmit}
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
                        {isWrite ? (
                            <>
                                <Button
                                    className="submitBtn writable"
                                    width="60px"
                                    height="40px"
                                    border="none"
                                    border_radius="26px"
                                    background_color="#E2E2E2"
                                    color="#767676"
                                    font_size="14px"
                                    font_weight="700"
                                    _onClick={submitComment}
                                >
                                    완료
                                </Button>
                                <Button
                                    className="cancleBtn"
                                    width="60px"
                                    height="40px"
                                    border="none"
                                    border_radius="26px"
                                    background_color="#E2E2E2"
                                    color="black"
                                    font_size="14px"
                                    font_weight="700"
                                    margin="auto 8px auto auto"
                                    _onClick={deActivateInput}
                                >
                                    취소
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    className="submitBtn unWritable"
                                    width="60px"
                                    height="40px"
                                    border="none"
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
                                    border="none"
                                    border_radius="26px"
                                    background_color="#E2E2E2"
                                    color="black"
                                    font_size="14px"
                                    font_weight="700"
                                    margin="auto 8px auto auto"
                                    _onClick={deActivateInput}
                                >
                                    취소
                                </Button>
                            </>
                        )}
                    </Flex>
                ) : (
                    ""
                )}
            </Flex>
        </Flex>
    );
};

export default CommentWrite;
