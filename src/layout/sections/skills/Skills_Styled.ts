import styled from "styled-components";
import {theme} from "../../../styles/Theme";



const Skills = styled.section``

const Skill = styled.div`
    width: 330px;
    padding: 42px 20px 52px;
    flex-grow: 1;

    @media ${theme.media.mobile} {
        padding: 64px 0 40px;
    }
}
`

const IconWrapper=styled.div`

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

export const S={
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}