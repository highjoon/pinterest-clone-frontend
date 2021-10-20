import React from "react";
import { Button, Flex, Icon } from "../elements";
import {
    faEllipsisH,
    faUpload,
    faLink,
} from "@fortawesome/free-solid-svg-icons";

const PostHeader = (props) => {
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
                    />
                </Button>
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
                        icon={faUpload}
                    />
                </Button>
                <Button
                    width="48px"
                    height="48px"
                    font_size="20px"
                    color="black"
                    background_color="transparent"
                    border="none"
                >
                    <Icon className="header__tools" icon={faLink} />
                </Button>
            </Flex>
            <Flex width="50%" justify_content="flex-end">
                {/* <Flex margin="0px 5px 0px 0px" cursor="pointer">
                    <Text
                        width="100px"
                        padding="0px"
                        className="profile"
                        text_align="right"
                        font_size="16px"
                        font_weight="700"
                        background_color="transparent"
                        color="black"
                    >
                        프로필
                    </Text>
                    <Icon icon={faChevronDown} />
                </Flex> */}
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
