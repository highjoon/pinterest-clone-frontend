import React from "react";
import styled from "styled-components";
import { Flex, Image, Icon } from "../elements";
import { faHeart, faTools, faTrash } from "@fortawesome/free-solid-svg-icons";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";

const CommentList = (props) => {
    const dispatch = useDispatch();
    const { hidden, comments } = props;

    const deleteComment = (e) => {
        let targetId =
            e.target.nodeName === "path"
                ? e.target.parentNode.attributes.id.value
                : e.target.attributes.id.value;
        dispatch(commentActions.deleteComment(Number(targetId)));
    };

    if (comments) {
        return (
            <Flex
                width="100%"
                flex_direction="row"
                flex_wrap="wrap"
                justify_content="flex-start"
                hidden={hidden}
            >
                {comments.map((comment, idx) => {
                    return (
                        <CommentBox key={idx}>
                            <Image
                                type="circle"
                                className="profile"
                                width="48px"
                                height="48px"
                                background_color="#045391"
                                cursor="pointer"
                            />
                            <CommentDetail>
                                <Comment>
                                    <WriterInfo>
                                        <Span className="writer">
                                            {comment.user}
                                        </Span>
                                        {/* <Span className="date">작성일자</Span> */}
                                    </WriterInfo>
                                    <Span>{comment.content}</Span>
                                </Comment>
                                <Tools>
                                    <Icon
                                        className="tool hover__bg"
                                        icon={faHeart}
                                    />
                                    {comment.likeNum ? (
                                        <Span className="likeNum">
                                            {comment.likeNum}
                                        </Span>
                                    ) : (
                                        ""
                                    )}
                                    <Icon
                                        className="tool hover__bg"
                                        icon={faTools}
                                    />
                                    <Icon
                                        className="tool hover__bg"
                                        id={comment.id}
                                        icon={faTrash}
                                        _onClick={deleteComment}
                                    />
                                </Tools>
                            </CommentDetail>
                        </CommentBox>
                    );
                })}
            </Flex>
        );
    } else {
        return null;
    }
};

const CommentBox = styled.div`
    display: flex;
    width: 100%;
    margin: 10px auto;
`;

const CommentDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & .tool {
        font-size: 15px;
    }
`;

const Comment = styled.div`
    width: 80%;
    padding: 12px 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 26px;
    text-align: left;
    margin: 0 auto;
`;

const Tools = styled.div`
    display: flex;
    width: 80%;
    margin: 5px auto;
    text-align: left;
    gap: 10px;

    & .tool {
        &:hover,
        &:active {
            color: red;
        }

        &:active {
            transform: scale(1.1);
        }
    }
`;

const WriterInfo = styled.div`
    margin: 0 auto;
    text-align: left;
`;

const Span = styled.span`
    font-size: 13px;
    font-weight: 400;

    &.writer {
        font-weight: 700;
    }

    &.date {
        margin-left: 7px;
        color: #767676;
    }

    &.likeNum {
        font-size: 15px;
        cursor: text;
    }
`;

export default CommentList;
