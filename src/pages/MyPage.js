import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { faPen, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Button, Flex, Icon, Avatar } from "../elements";
import { actionCreators as MyActions } from "../redux/modules/my";

const MyPage = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const myPins = useSelector((state) => state.my.list);
    const name = localStorage.getItem("user_name");

    useEffect(() => {
        dispatch(MyActions.getMyAPI());
    }, []);

    return (
        <Wrapper className="Wrapper">
            <Flex mg="16px 0px" ai="center">
                <Avatar width="80px" fontSize="1.8rem" fontWeight="700">
                    {name.slice(0, 1).toUpperCase()}
                </Avatar>
            </Flex>
            <TextInfo className="TextInfo">
                <h1>항해99 9조</h1>
                <span>팔로잉 0명</span>
            </TextInfo>

            <Flex className="Btn__Container" justify_content="space-between">
                <Flex className="Buttons">
                    <Button
                        width="48px"
                        height="48px"
                        padding="0"
                        font_size="20px"
                        color="black"
                        background_color="transparent"
                        border="none"
                    >
                        <Icon className=" header__tools hover__bg" icon={faPen} />
                    </Button>
                    <Button
                        width="48px"
                        height="48px"
                        padding="0"
                        font_size="20px"
                        color="black"
                        background_color="transparent"
                        border="none"
                    >
                        <Icon className=" header__tools hover__bg" icon={faUpload} />
                    </Button>
                </Flex>
                <Flex className="Buttons">
                    <Button
                        width="48px"
                        height="48px"
                        padding="0"
                        font_size="20px"
                        color="black"
                        background_color="transparent"
                        border="none"
                    >
                        <Icon className=" header__tools hover__bg" icon={faPen} />
                    </Button>
                    <Button
                        width="48px"
                        height="48px"
                        padding="0"
                        font_size="20px"
                        color="black"
                        background_color="transparent"
                        border="none"
                    >
                        <Icon className=" header__tools hover__bg" icon={faUpload} />
                    </Button>
                </Flex>
            </Flex>

            <Container className="mainboard__container">
                {myPins.map((pin, index) => {
                    return (
                        <ImageWrapper>
                            <ImageContainer>
                                <div>
                                    <img src={pin.imgURL} alt="pin" />
                                </div>
                            </ImageContainer>
                        </ImageWrapper>
                    );
                })}
            </Container>

            <FloatButton>?</FloatButton>
            <GloatButton
                onClick={() => {
                    history.push("/addpin");
                }}
            >
                +
            </GloatButton>
        </Wrapper>
    );
};
export default MyPage;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top: 15px;
`;
// const Flexbox = styled.div`
//   background-color: white;
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   margin-top: 15px;
//   position: fixed;
// `;
const TextInfo = styled.div`
    width: 100%;

    line-height: 1.2;

    h1 {
        font-size: 30px;
        font-weight: 600;
    }
    span {
        font-weight: 600;
    }
    text-align: center;
`;

const GloatButton = styled.button`
    width: 50px;
    height: 50px;
    box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-color: #fff;
    color: black;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 600;
    /* font-weight: 800; */
    position: fixed;
    bottom: 110px;
    right: 30px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
    &:hover {
        background-color: #d0d0d0;
        cursor: pointer;
    }
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 12px 33px -12px rgba(0, 0, 0, 0.5);
    color: black;
    background-color: #fff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 600;
    /* font-weight: 800; */
    position: fixed;
    bottom: 50px;
    right: 30px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
    &:hover {
        background-color: #d0d0d0;
        cursor: pointer;
    }
`;

const Container = styled.div`
    height: 100%;
    background-color: white;
`;
const ImageWrapper = styled.div`
    display: flex;
    margin: 8px 8px;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img {
        display: flex;
        width: 100%;
        cursor: pointer;
        border-radius: 16px;
        object-fit: cover;
    }
`;
