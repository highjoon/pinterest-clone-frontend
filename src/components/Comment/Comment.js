import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Avatar, Icon } from "../../elements";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import { faHeart, faTools, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CommentEdit, Modal } from "..";

const Comment = (props) => {
    const { comment, storedId, id, name } = props;
    // const name = localStorage.getItem("user_name");
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const activateEdit = (e) => {
        setIsEdit(true);
    };

    const deActivateEdit = (e) => {
        setIsEdit(false);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = (isDelete) => {
        if (isDelete) dispatch(commentActions.deleteCommentAPI(id));
        setModalVisible(false);
    };

    const toggleLike = () => {
        dispatch(commentActions.toggleLikeAPI(id));
    };

    return (
        <CommentBox>
            {/* (성민) 유저프로필 이미지 아이디에서 첫번쨰에서 불러옴         */}
            <Avatar width="48px" fontSize="1rem">
                {name}
            </Avatar>
            <CommentDetail>
                {isEdit ? (
                    <CommentEdit
                        _deActivateEdit={deActivateEdit}
                        storedId={storedId}
                        id={id}
                    />
                ) : (
                    <CommentWrapper>
                        <WriterInfo>
                            <Span className="writer">{name}</Span>
                        </WriterInfo>
                        <Span>{comment.content}</Span>
                    </CommentWrapper>
                )}

                <Tools>
                    <Icon
                        className="tool hover__bg"
                        icon={faHeart}
                        _onClick={toggleLike}
                    />
                    {comment.likeNum ? (
                        <Span className="likeNum">{comment.likeNum}</Span>
                    ) : (
                        ""
                    )}
                    <Icon
                        className="tool hover__bg"
                        icon={faTools}
                        _onClick={activateEdit}
                    />
                    <Icon
                        className="tool hover__bg"
                        id={comment.id}
                        icon={faTrash}
                        _onClick={openModal}
                    />
                    {modalVisible && (
                        <Modal
                            visible={modalVisible}
                            closable={true}
                            maskClosable={true}
                            onClose={closeModal}
                        >
                            계속할까요?
                        </Modal>
                    )}
                </Tools>
            </CommentDetail>
        </CommentBox>
    );
};

const CommentBox = styled.div`
    display: flex;
    width: 100%;
    margin: 10px auto;
    transition: all 300ms ease-in-out;
`;

const CommentDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & .tool {
        font-size: 15px;
    }
`;

const CommentWrapper = styled.div`
    width: 80%;
    padding: 16px 16px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 26px;
    text-align: left;
    margin: 0 auto;
`;

const EditForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const EditInput = styled.input`
    width: 80%;
    height: 60px;
    padding: 12px 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 26px;
    text-align: left;
    margin: 0 auto;
    outline: none;
    resize: none;
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    width: 80%;
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

export default Comment;
