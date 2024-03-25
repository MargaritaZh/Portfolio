import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

const socialIconData = [
    {
        iconId: "instagram",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "vk",
    },
    {
        iconId: "linkedin",
    },
]
export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Margarita</S.Name>
                <S.SocialList>

                    {socialIconData.map((s, index) => {
                        return (
                            <S.SocialIcon key={index}>
                                <S.SocialLink>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialIcon>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Margarita Zhitkevich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};


