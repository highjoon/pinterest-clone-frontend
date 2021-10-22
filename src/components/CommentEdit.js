import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentEdit = (props) => {
    const { _deActivateEdit, id } = props;
    const dispatch = useDispatch();
    const newComment = useRef();

    const closeEdit = () => {
        if (window.confirm("정말로 취소하시겠습니까?")) _deActivateEdit();
    };

    const onEnterSubmit = (e) => {
        if (e.key === "Enter") {
            submitComment();
            e.target.value = "";
        }
    };

    const submitComment = () => {
        const newCommentObj = {
            content: newComment.current.value,
        };
        dispatch(commentActions.editCommentAPI(id, newCommentObj));
        _deActivateEdit();
    };

    return (
        <EditForm>
            <EditInput
                type="text"
                ref={newComment}
                onKeyPress={onEnterSubmit}
            />
            <BtnContainer>
                <Button
                    className="submitBtn"
                    width="60px"
                    height="40px"
                    border="none"
                    border_radius="26px"
                    background_color="#E2E2E2"
                    color="#767676"
                    font_size="14px"
                    font_weight="700"
                    margin="10px 0px auto 8px"
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
                    margin="10px 0px auto auto"
                    _onClick={closeEdit}
                >
                    취소
                </Button>
            </BtnContainer>
        </EditForm>
    );
};

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

export default CommentEdit;
