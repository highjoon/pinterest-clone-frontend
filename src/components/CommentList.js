import React from "react";
import styled from "styled-components";
import { Flex, Image, Icon } from "../elements";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CommentList = (props) => {
    const { hidden } = props;
    console.log(hidden);
    return (
        <Flex
            width="100%"
            flex_direction="row"
            flex_wrap="wrap"
            justify_content="flex-start"
            hidden={hidden}
        >
            <CommentBox>
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
                            <Span className="writer">작성자</Span>
                            <Span className="date">작성일자</Span>
                        </WriterInfo>
                        <Span>댓글 내용</Span>
                    </Comment>
                    <Icon className="heart" icon={faHeart} />
                </CommentDetail>
            </CommentBox>
        </Flex>
    );
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

    & > .heart {
        width: 80%;
        margin: 5px auto;
        text-align: left;
        cursor: pointer;
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

const WriterInfo = styled.div`
    margin: 0 auto;
    text-align: left;
`;

const Span = styled.span`
    font-size: 13px;

    &.writer {
        font-weight: 700;
    }

    &.date {
        margin-left: 7px;
        color: #767676;
    }
`;

export default CommentList;
