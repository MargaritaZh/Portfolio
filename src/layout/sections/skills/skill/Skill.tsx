import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId:string,
    title:string,
    description:string,
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 64px 20px 40px;
`

export const IconWrapper=styled.div`

    position: relative;
    z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%)  rotate(45.00deg);
        z-index: -1;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`
