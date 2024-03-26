import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../styles/slider.css"
import {S} from "./Slider_Styles"

type SlidePropsType = {
    text: string,
    userName: string,

}
const Slide = (props: SlidePropsType) => {
    return (
        <S.Slid>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slid>
    )
}

const items = [
    <Slide userName={"ivan ivanow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>,
    <Slide userName={"piotr petrow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>,
    <Slide userName={"igor igorev"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);


