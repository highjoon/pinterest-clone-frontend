import React, { useState } from "react";
import {
    PostImage,
    PostDesc,
    PostHeader,
    PostWriter,
    CommentContainer,
    PostSaveInfo,
    PostContainer,
} from "../components";

const PinDetail = (props) => {
    return (
        <PostContainer
            className="PostWrapper"
            justify_content="initial"
            align_items="start"
            margin="80px auto"
            width="50%"
            border_radius="32px"
            box_shadow="0 1px 20px 0 rgb(0 0 0 / 10%)"
        >
            <PostImage className="PostImageBox" />
            <PostContainer
                className="PostDescBox"
                width="50%"
                border_radius="0 0 32px 32px"
            >
                <PostHeader />
                <PostDesc />
                <PostContainer
                    width="90%"
                    flex_direction="column"
                    align_items="center"
                >
                    <PostWriter />
                    <CommentContainer />
                </PostContainer>
                <PostSaveInfo />
            </PostContainer>
        </PostContainer>
    );
};

export default PinDetail;
