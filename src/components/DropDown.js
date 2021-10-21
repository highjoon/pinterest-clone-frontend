import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Text } from "../elements";

const DropDown = (props) => {
    const { _ref, className, imgURL, type } = props;
    const history = useHistory();

    const logOut = () => {
        window.alert("로그아웃!");
    };

    if (type === "headerMenu") {
        return (
            <MenuWrapper>
                <MenuContainer>
                    <Menu ref={_ref} className={className} id="headerMenu">
                        <ul>
                            <li onClick={() => history.push("#")}>
                                <Text margin="0" text_align="left">
                                    마이페이지
                                </Text>
                            </li>
                            <li onClick={logOut}>
                                <Text margin="0" text_align="left">
                                    로그아웃
                                </Text>
                            </li>
                        </ul>
                    </Menu>
                </MenuContainer>
            </MenuWrapper>
        );
    }
    if (type !== "headerMenu") {
        return (
            <MenuWrapper>
                <MenuContainer>
                    <Menu ref={_ref} className={className}>
                        <ul>
                            <li>
                                <Text margin="0" text_align="left">
                                    <DownloadLink href={imgURL}>
                                        이미지 다운로드
                                    </DownloadLink>
                                </Text>
                            </li>
                        </ul>
                    </Menu>
                </MenuContainer>
            </MenuWrapper>
        );
    }
};

const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    font-size: 16px;
    color: black;
`;

const MenuContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.device.desktop} {
        & button {
            width: 250px;
        }
        & p {
            font-size: 15px;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        & button {
            width: 200px;
        }
        & p {
            font-size: 13px;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        & button {
            width: 150px;
        }
        & p {
            font-size: 10px;
        }
    }
`;

const Menu = styled.nav`
    background: #ffffff;
    border-radius: 16px;
    position: absolute;
    top: 40px;
    width: 200px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    &#headerMenu {
        top: 30px;
        right: 0px;
    }

    &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    & ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    & li {
        text-decoration: none;
        padding: 15px 20px;
        display: block;
        cursor: pointer;

        &:first-child:hover {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            background-color: #e2e2e2;
        }

        &:last-child:hover {
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            background-color: #e2e2e2;
        }
    }
`;

const DownloadLink = styled.a`
    text-decoration: none;
    &:link,
    &:visited,
    &:hover {
        color: black;
        text-decoration: none;
    }
`;

export default DropDown;
