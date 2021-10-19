import React from "react";
import { useSelector } from "react-redux";
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
    const pinDetail = useSelector((state) => state.pin.pinDetail);
    const zapPin = useSelector((state) =>state.pin.pin)
    const storedId = props.match.params.id;

     

     
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
            <PostImage className="PostImageBox" imgURL={zapPin[storedId]} />
            <PostContainer
                className="PostDescBox"
                width="50%"
                border_radius="0 0 32px 32px"
            >
                <PostHeader />
                <PostDesc
                    webSite={pinDetail.webSite}
                    title={pinDetail.title}
                    desc={pinDetail.desc}
                />
                <PostContainer
                    width="90%"
                    flex_direction="column"
                    align_items="center"
                >
                    <PostWriter />
                    <CommentContainer storedId={storedId} />
                </PostContainer>
                <PostSaveInfo user={pinDetail.user} board={pinDetail.board} />
            </PostContainer>
        </PostContainer>
    );
};

export default PinDetail;
