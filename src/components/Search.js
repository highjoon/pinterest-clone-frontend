import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionCreators as MainActions } from "../redux/modules/main";
const Mainboard = (props) => {
    const dispatch = useDispatch();

    const mainPins = useSelector((state) => state.main.list);

    console.log(mainPins);
    let history = useHistory();

    useEffect(() => {
        dispatch(MainActions.getMainAPI());
    }, []);
    return (
        <Wrapper>
            <Container>
                {mainPins.map((pin, index) => {
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

export default Mainboard;

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 15px;
`;

const Container = styled.div`
    column-count: 5;
    column-gap: 10px;

    height: 100%;
    background-color: white;
    margin: 0 auto;
    max-width: 1260px;
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