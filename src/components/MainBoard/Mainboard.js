import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionCreators as MainActions } from "../../redux/modules/main";
import "./Mainboard.css";

const Mainboard = (props) => {
    const dispatch = useDispatch();

    const mainPins = useSelector((state) => state.main.list);
    let history = useHistory();

    useEffect(() => {
        dispatch(MainActions.getMainAPI());
    }, []);

    return (
        <Wrapper>
            <Container className="mainboard__container">
                {mainPins.map((pin, index) => {
                    return (
                        <ImageWrapper key={index}>
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
    height: 100%;
    background-color: white;
    margin: 0 auto;
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

const ImageWrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 236px;

    img {
        display: flex;
        width: 100%;
        border-radius: 16px;
        object-fit: cover;

        &:hover {
            cursor: pointer;
            filter: brightness(60%);
        }
    }
`;
