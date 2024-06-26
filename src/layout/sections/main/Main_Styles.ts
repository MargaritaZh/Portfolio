import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 100vh;
    background-color: #be9bbe;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";

        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 295px;
            height: 390px;
            top: -17px;
            left: 15px;
        }
    }

    @media ${theme.media.tablet} {
        margin-top: 65px;
    }
`
const Photo = styled.img`
    height: 430px;
    width: 350px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 285px;
        height: 365px ;
    }

`
const Name = styled.h2`
    ${font({
    family: " 'Joseifn Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36})} 
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;

        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})};
    
    p {
        display: none;
    }

`
const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;

    @media ${theme.media.mobile} {
        display: inline-block;
        margin-top: 25px;
    }
`
export const S={
    Main,
    PhotoWrapper,
    Photo,
    Name,
    MainTitle,
    SmallText
}