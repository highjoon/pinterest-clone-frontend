import React, { useState } from "react";
import { Flex, Text, Icon } from "../elements";
import {
    faChevronDown,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CommentWrite } from "./";

const CommentContainer = (props) => {
    const count = 0;
    let [is_drop, setIsDrop] = useState(true);
    let [icon_type, setIconType] = useState(faChevronDown);

    const dropComment = () => {
        is_drop ? setIsDrop(false) : setIsDrop(true);
        is_drop
            ? setIconType(faChevronRight)
            : setIconType(faChevronDown);
    };

    return (
        <Flex
            width="100%"
            flex_direction="column"
            justify_content="center"
            align_items="start"
        >
            <Flex margin="0px 5px 0px 0px" cursor="pointer">
                <Text
                    margin="0px 10px 0px 0px"
                    padding="0px"
                    className="profile"
                    text_align="left"
                    font_size="20px"
                    font_weight="700"
                    background_color="transparent"
                    color="black"
                >
                    댓글 {count ? `${count}개` : ""}
                </Text>
                <Icon
                    className=" 
                        hover__bg commentDrop"
                    icon={icon_type}
                    _onClick={dropComment}
                />
            </Flex>
            {is_drop ? (
                <CommentWrite hidden={false} />
            ) : (
                <CommentWrite hidden={true} />
            )}
        </Flex>
    );
};

export default CommentContainer;
