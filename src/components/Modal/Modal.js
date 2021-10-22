import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Portal from "./Portal";
import { Flex, Button, Text } from "../../elements";

function Modal({ className, onClose, maskClosable, closable, visible, children }) {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) onClose(e);
    };

    const close = (e) => {
        e.preventDefault();
        if (onClose && e.target.innerText === "삭제") onClose(true);
        if (onClose && e.target.innerText === "취소") onClose(false);
    };

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = `position: ""; top: "";`;
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        };
    }, []);

    return (
        <Portal elementId="modal-root">
            <ModalOverlay visible={visible} />
            <ModalWrapper
                className={className}
                onClick={maskClosable ? onMaskClick : null}
                tabIndex={-1}
                visible={visible}
            >
                <ModalInner tabIndex={0} className="modal-inner">
                    <Text font_weight="700" font_size="28px">
                        {children}
                    </Text>
                    <Flex width="100%" justify_content="flex-start">
                        <Text>이 댓글이 삭제됩니다.</Text>
                    </Flex>
                    <Flex width="100%" justify_content="flex-end" gap="15px">
                        {closable && (
                            <Button
                                className="modal-close cancle"
                                _onClick={close}
                                width="60px"
                                height="40px"
                                padding="8px 12px"
                                border="none"
                                border_radius="20px"
                                background_color="#efefef"
                                color="black"
                                font_weight="700"
                                font_size="16px"
                                text="취소"
                            />
                        )}
                        {closable && (
                            <Button
                                className="modal-close delete"
                                id="delete"
                                _onClick={close}
                                width="60px"
                                height="40px"
                                padding="8px 12px"
                                border="none"
                                border_radius="20px"
                                background_color="red"
                                color="white"
                                font_weight="700"
                                font_size="16px"
                                text="삭제"
                            />
                        )}
                    </Flex>
                </ModalInner>
            </ModalWrapper>
        </Portal>
    );
}

Modal.defaultProps = {
    visible: false,
    closable: true,
    maskClosable: true,
};

Modal.propTypes = {
    visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`;

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 30px;
    width: 720px;
    max-width: 720px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 16px 10px;
    text-align: center;

    & .cancle:hover {
        background-color: #d0d0d0;
    }

    & .delete:hover {
        background-color: #ad081b;
    }
`;

export default Modal;
