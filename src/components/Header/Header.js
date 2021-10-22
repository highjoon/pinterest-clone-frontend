import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import {
    Pinterest,
    Search,
    Notifications,
    Textsms,
    Face,
    KeyboardArrowDown,
} from "@material-ui/icons";
import { useDetectOutsideClick } from "../../hooks";
import { actionCreators as searchActions } from "../../redux/modules/search";
import { DropDown } from "../";

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = React.useState(" ");
    const dropdownRef = useRef(null);
    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(searchActions.getSearchAPI(input));
    };
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const toggleActive = () => setIsActive(!isActive);

    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton onClick={() => history.push("/")}>
                    <Pinterest />
                </IconButton>
            </LogoWrapper>
            <HomePageButton onClick={() => history.push("/")}>
                <span>홈</span>
            </HomePageButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <Search />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <Notifications />
                </IconButton>

                <IconButton>
                    <Textsms />
                </IconButton>

                <IconButton>
                    <Face />
                </IconButton>

                <IconButton onClick={toggleActive}>
                    <KeyboardArrowDown />
                    <DropDown
                        _ref={dropdownRef}
                        className={`menu ${isActive ? "active" : "inactive"}`}
                        type="headerMenu"
                    />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    );
};
export default Header;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`; //전체 래핑하는 것

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`;
const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 60px;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    align-items: center;
`;

const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17, 17, 17);

    span {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`;

const SearchWrapper = styled.div`
    flex: 1;
`;

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }
    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input: focus {
        outline: none;
    }
`;

const IconsWrapper = styled.div``;
