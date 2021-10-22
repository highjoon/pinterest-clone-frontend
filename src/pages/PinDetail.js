import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    PinImage,
    PinDesc,
    PinHeader,
    PinWriterInfo,
    PinSaveInfo,
    PinContainer,
    CommentContainer,
} from "../components";
import { actionCreators as pinActions } from "../redux/modules/pin";

const PinDetail = (props) => {
    const dispatch = useDispatch();
    const pinDetail = useSelector((state) => state.pin.pinDetail);
    const pinBoard = useSelector((state) => state.pin.pinBoard);
    const pinWriter = useSelector((state) => state.pin.pinWriter);
    const storedId = Number(props.match.params.id);

    useEffect(() => {
        dispatch(pinActions.getPinAPI(storedId));
    }, []);

    return (
        <PinContainer
            className="PostWrapper"
            justify_content="initial"
            align_items="start"
            margin="80px auto"
            width="50%"
            border_radius="32px"
            box_shadow="0 1px 20px 0 rgb(0 0 0 / 10%)"
        >
            <PinImage className="PostImageBox" imgURL={pinDetail.imgURL} />
            <PinContainer
                className="PostDescBox"
                width="50%"
                border_radius="0 0 32px 32px"
            >
                <PinHeader imgURL={pinDetail.imgURL} />
                <PinDesc
                    webSite={pinDetail.webSite}
                    title={pinDetail.title}
                    desc={pinDetail.desc}
                />
                <PinContainer width="90%" flex_direction="column" align_items="center">
                    <PinWriterInfo user={pinWriter} />
                    <CommentContainer storedId={storedId} />
                </PinContainer>
                <PinSaveInfo user={pinWriter} board={pinBoard} />
            </PinContainer>
        </PinContainer>
    );
};

export default PinDetail;
