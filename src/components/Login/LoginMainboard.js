import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { SignupCard } from "../";
import "../MainBoard/Mainboard.css";
import { Pin } from "../";

const LoginMainboard = (props) => {
    let { pins } = props;

    const titleList = [
        "저녁 식사 메뉴 아이디어를 찾아보세요",
        "집안 꾸미기 아이디어를 찾아보세요",
        "새로운 패션을 찾아보세요",
        "정원 가꾸기 아이디어를 찾아보세요",
    ];

    const titleColor = ["#C28B00", "#618C7B", "#0076D3", "#407A57"];

    const [viewLogin, setViewLogin] = useState(false);
    const [postTitle, setPostTitle] = useState(titleList[0]);
    const [postTitleColor, setPostTitleColor] = useState(titleColor[0]);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
        setViewLogin(true);
    };

    useEffect(() => {
        let idx = 1;
        const loop = setInterval(() => {
            setPostTitle(titleList[idx]);
            setPostTitleColor(titleColor[idx]);
            idx++;
            if (idx > 3) idx = 0;
        }, 3000);
    }, []);

    return (
        <div>
            <MainPost>
                <PostOne>다음</PostOne>
                <PostTwo color={postTitleColor}>{postTitle}</PostTwo>
            </MainPost>
            <Wrapper>
                <Container className="mainboard__container">
                    {pins.map((pin, index) => {
                        let { urls } = pin;
                        return <Pin key={index} urls={urls} />;
                    })}
                </Container>
            </Wrapper>
            {viewLogin && (
                <Drapper>
                    <FlexBox
                        className=".mainboard__container"
                        style={{
                            transform: `translateY(40px)`,
                        }}
                    >
                        <div
                            className="login"
                            style={{
                                fontSize: "40px",
                                margin: "7px 0px 1.8px 3.6px",
                                color: "#fff",
                                fontWeight: "700",
                                padding: "0px 10rem 0px 0px",
                            }}
                        >
                            가입하여 더 많은 아이디어를
                            <br /> 만나보세요
                        </div>
                        <SignupCard />
                    </FlexBox>
                    <Back style={{}} />
                </Drapper>
            )}
            <ScrollBtn onClick={scrollToBottom} background_color={postTitleColor}>
                <FaAngleDown size="30" />
            </ScrollBtn>
        </div>
    );
};

export default LoginMainboard;
const Drapper = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #000;
`;

const FlexBox = styled.div`
    position: absolute;
    overflow: hidden;
    width: 1318px;
    display: flex;
    justify-content: center;
    z-index: 9999;
`;

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 15px;
`;

const Container = styled.div`
    height: 100%;
    background-color: white;
    margin: 0 auto;
`;

const MainPost = styled.div`
    display: flex-inline;
    justify-content: center;
    text-align: center;
    margin-top: 120px;
    margin-bottom: 80px;
`;

const PostOne = styled.div`
    width: 100%;
    font-size: 60px;
    font-weight: 900px;
`;
const PostTwo = styled.h1`
    width: 100%;
    font-size: 60px;
    font-weight: 900px;
    color: ${(props) => props.color};
`;

const BoxFloat = keyframes`
    from {
        transform: translateY(10px);
    }
    to {
        transform: translateY(-5px)
    }
`;

const ScrollBtn = styled.div`
    position: fixed;
    bottom: 12px;
    left: 50%;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: ${(props) => props.background_color};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1;
    animation: ${BoxFloat} 1s 0.5s infinite linear alternate;
    cursor: pointer;
`;
