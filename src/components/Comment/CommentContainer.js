import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Text, Icon } from "../../elements";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CommentWrite } from "..";

const CommentContainer = (props) => {
    const dispatch = useDispatch();

    let [is_drop, setIsDrop] = useState(true);
    let [icon_type, setIconType] = useState(faChevronDown);

    // const tempData = useSelector((state) => state.comment.comments);
    // const comments = tempData.slice();

    const comments = useSelector((state) => state.comment.comments);
    const storedId = props.storedId;
   
    useEffect(() => {
        dispatch(commentActions.getCommentAPI(storedId));
    }, []);

    const dropComment = () => {
        is_drop ? setIsDrop(false) : setIsDrop(true);
        is_drop ? setIconType(faChevronRight) : setIconType(faChevronDown);
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
                    댓글 {comments.length ? `${comments.length}개` : ""}
                </Text>
                <Icon
                    className=" 
                        hover__bg commentDrop"
                    icon={icon_type}
                    _onClick={dropComment}
                />
            </Flex>
            {is_drop ? (
                <CommentWrite hidden={false} comments={comments} storedId={storedId} />
            ) : (
                <CommentWrite hidden={true} comments={comments} storedId={storedId} />
            )}
        </Flex>
    );
};

export default CommentContainer;
