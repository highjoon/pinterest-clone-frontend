import { Pinterest } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { Face } from "@material-ui/icons";
import { Textsms } from "@material-ui/icons";
import { KeyboardArrowDown } from "@material-ui/icons";

const LoginHeader = (props) => {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton color="red">
                    <Pinterest size="large" />
                    <div
                        style={{
                            color: "#e60023",
                            fontSize: "20px",
                            fontWeight: "700",
                        }}
                    >
                        Pinterest
                    </div>
                </IconButton>
            </LogoWrapper>

            <IconsWrapper>
                <IconButton>
                    <div
                        style={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "700",
                        }}
                    >
                        소개
                    </div>
                </IconButton>
                <IconButton>
                    <div
                        style={{
                            color: "black",
                            fontSize: "16px",
                            fontWeight: "700",
                        }}
                    >
                        비즈니스
                    </div>
                </IconButton>
                <IconButton>
                    <div
                        style={{
                            color: "black",
                            fontSize: "16px",
                            margin: "0 30px 0 0",
                            fontWeight: "700",
                        }}
                    >
                        언론
                    </div>
                </IconButton>
                <HomePageButton>
                    <a href="/">로그인</a>
                </HomePageButton>
                <FollowingButton>
                    <a href="/">가입하기</a>
                </FollowingButton>
            </IconsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`; //전체 래핑하는 것

const LogoWrapper = styled.div`
    flex: none;
    text-align: left;
    font-size: 15px;
    color: red;
    padding: 3px;
    .MuiSvgIcon-root {
        color: #e60023;
        size: 600;
        cursor: pointer;
    }
`;
const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 64px;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    align-items: center;
`;

const HomePageButton = styled(HomeButtons)`
    background-color: #e60023;
    margin-right: 10px;

    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`;

const FollowingButton = styled(HomeButtons)`
    width: 79px;
    background-color: #e2e2e2;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover {
        background-color: #e1e1e1;
    }
`;

const IconsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
export default LoginHeader;
