import React, { useRef } from "react";
import { useDetectOutsideClick } from "../../hooks";
import { faEllipsisH, faUpload, faLink } from "@fortawesome/free-solid-svg-icons";
import { Button, Flex, Icon } from "../../elements";
import { DropDown } from "../";

const PostHeader = (props) => {
    const { imgURL } = props;
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const toggleActive = () => setIsActive(!isActive);

    const copyURL = () => {
        const target = imgURL;

        if (!document.queryCommandSupported("copy")) {
            return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }

        const textarea = document.createElement("textarea");
        textarea.value = target;
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.position = "fixed";

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        window.alert("링크가 복사되었습니다.");
    };
    return (
        <Flex
            width="90%"
            justify_content="space-between"
            height="60px"
            margin="32px auto 0px auto"
        >
            <Flex justify_content="space-evenly">
                <Button
                    width="48px"
                    height="48px"
                    font_size="20px"
                    color="black"
                    background_color="transparent"
                    border="none"
                >
                    <Icon
                        className=" header__tools hover__bg"
                        icon={faEllipsisH}
                        _onClick={toggleActive}
                    />
                </Button>
                <DropDown
                    _ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                    imgURL={imgURL}
                />
                <Button
                    width="48px"
                    height="48px"
                    font_size="20px"
                    color="black"
                    background_color="transparent"
                    border="none"
                >
                    <Icon className=" header__tools hover__bg" icon={faUpload} />
                </Button>
                <Button
                    width="48px"
                    height="48px"
                    font_size="20px"
                    color="black"
                    background_color="transparent"
                    border="none"
                >
                    <Icon className="header__tools" icon={faLink} _onClick={copyURL} />
                </Button>
            </Flex>
            <Flex width="50%" justify_content="flex-end">
                <Button
                    className="saveBtn"
                    width="64px"
                    font_size="16px"
                    font_weight="700"
                    color="white"
                    background_color="red"
                    border_radius="24px"
                    border="none"
                >
                    저장
                </Button>
            </Flex>
        </Flex>
    );
};

export default PostHeader;
