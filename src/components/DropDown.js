import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

const DropDown = (props) => {
    const { _ref, className, choose, imgURL } = props;

    return (
        <MenuWrapper>
            <MenuContainer>
                <Menu ref={_ref} className={className}>
                    <ul>
                        <li onClick={choose}>
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
};

const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
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

        &:hover {
            border-radius: 16px;
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
