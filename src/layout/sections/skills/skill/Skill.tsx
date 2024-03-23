import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

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
    width: 330px;
    padding: 42px 20px 52px;
    flex-grow: 1;
    
    @media ${theme.media.mobile}{
        padding: 64px 0 40px;  
    }
        
    }
    
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
