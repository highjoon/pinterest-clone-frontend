import React from "react";
import { Flex } from "../../elements";
import { Comment } from "..";

const CommentList = (props) => {
    const { hidden, comments, storedId } = props;

    if (comments.length) {
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
                        <Comment
                            comment={comment}
                            key={idx}
                            storedId={storedId}
                            id={comment.id}
                        />
                    );
                })}
            </Flex>
        );
    } else {
        return null;
    }
};

export default CommentList;
