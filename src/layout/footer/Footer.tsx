import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
                <Name>Margarita</Name>
                <SocialList>
                    <SocialIcon>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialIcon>
                    <SocialIcon>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialIcon>
                    <SocialIcon>
                        <SocialLink>
                            < Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialIcon>
                    <SocialIcon>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialIcon>
                </SocialList>
                <Copyright>© 2024 Margarita Zhitkevich, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: hotpink;
    min-height: 20vh;
`

const Name = styled.span``

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialIcon = styled.li``

const SocialLink = styled.a``

const Copyright = styled.small``


