import React from "react";

import styled from "styled-components";
import { faPen, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Button, Flex, Icon } from "../elements";

import { useHistory } from "react-router";

const MyPage = (props) => {
    let history = useHistory();

    return (
        <Wrapper className="Wrapper">
            <TextInfo className="TextInfo">
                <h1>항해99 9조</h1>
                <span>팔로잉 0명</span>
            </TextInfo>

            <Flex className="Btn__Container" justify_content="space-between">
                {/* <Flex className="Btn__Container"> */}
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
                        <Icon
                            className=" header__tools hover__bg"
                            icon={faPen}
                        />
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
                        <Icon
                            className=" header__tools hover__bg"
                            icon={faUpload}
                        />
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
                        <Icon
                            className=" header__tools hover__bg"
                            icon={faPen}
                        />
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
                        <Icon
                            className=" header__tools hover__bg"
                            icon={faUpload}
                        />
                    </Button>
                </Flex>
            </Flex>

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
    padding-left: 8px;
    padding-right: 8px;
    line-height: 1.2;
    padding-top: 100px;
    h1 {
        margin-bottom: 5px;
        font-size: 30px;
        font-weight: 600;
    }
    span {
        margin-right: 10px;
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
    font-weight: 800;
    position: fixed;
    bottom: 110px;
    right: 30px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
    &:hover {
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
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 30px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
    &:hover {
        cursor: pointer;
    }
`;

// const AppContent = styled.div`
//   width: 100%;
//   box-sizing: border-box;
//   margin-top: 200px;
// `;

// const ProfileWrapper = styled.div`
//   width: 100%;
// `;

// const IconBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: start;
//   align-content: center;
//   padding: 8px auto;
//   margin: 4px auto;
//   width: 100%;
//   background: hsla(0, 0%, 100%, 0.97);
//   position: fixed;
//   z-index: 9;
//   top: 75px;
// `;

// const IconBarInside = styled.div`
//   max-width: 800px;
//   width: 100%;
//   align-items: center;
//   margin: 30px auto 10px;
// `;

// const IconsWrapper = styled.div`
//   display: flex;
//   flex: 0 0 auto;
//   align-items: center;
//   flex-direction: row;
//   width: 33.33%;
// `;

// const SvgWrapper = styled.svg`
//   color: #767676;
//   height: 48px;
//   width: 48px;
//   fill: currentColor;
//   stroke-width: 0;
//   vertical-align: middle;
//   cursor: pointer;
//   position: absolute;
//   top: 25%;
//   left: 12px;
//   path {
//     margin: auto;
//     padding: auto;
//     height: 20px;
//     width: 20px;
//   }
// `;

// const MypageButtonAdd = styled.button`
//   cursor: pointer;
//   border: none;
//   border-radius: 50%;
//   background: transparent;
//   position: relative;
//   display: inline-block;
//   outline-style: none;
// `;
// //Hidden by Default
// const DropdownContent = styled.div`
//   display: ${({ isActive }) => (isActive ? "block" : "none")};
//   position: absolute;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   border: 32x solid rgb(195, 195, 195);
//   background: #ffff;
// `;

// const MypageButton = styled.button`
//   cursor: pointer;
//   border: none;
//   border-radius: 50%;
//   background: transparent;
// `;

// const ProfileInfo = styled.div`
//   max-width: 800px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 140px auto auto;
// `;

// // const MiddleNav = styled.div`
// //   display: flex;
// //   /* height: 2000px; */
// // `;
