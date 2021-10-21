import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionCreators as searchActions } from "../redux/modules/search";
import "../components/Mainboard.css";

const Search = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const resultPins = useSelector((state) => state.search.pins);

    useEffect(() => {
        dispatch(searchActions.getSearchAPI(localStorage.getItem("word")));
    }, []);

    return (
        <Wrapper>
            <Container className="mainboard__container">
                {resultPins.map((pin, index) => {
                    return (
                        <ImageWrapper>
                            <ImageContainer>
                                <div
                                    onClick={() => {
                                        history.push(`/detail/${pin.id}`);
                                    }}
                                >
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

export default Search;

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

const FloatButton = styled.button`
    width: 50px;
    height: 50px;

    color: #ffffff;
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
const GloatButton = styled.button`
    width: 50px;
    height: 50px;

    background-size: cover;
    color: #ffffff;
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
const ImageWrapper = styled.div`
    display: inline-flex;
    padding: 8px;
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
