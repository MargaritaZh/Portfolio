import React from 'react';
import photo from "../../../assets/images/photo-image.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Margarita Zhitkevich</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt={"main-photo"}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain=styled.div`
    min-height: 100vh;
    background-color: #be9bbe;
`

const Photo = styled.img`
    height: 430px;
    width: 350px;
    object-fit: cover;
`

const Name=styled.h2``
const MainTitle=styled.h1`
`