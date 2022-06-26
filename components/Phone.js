import styled from '@emotion/styled';
import { css } from '@emotion/react';
import useScrollFadein from '../hooks/useScrollFadein'

export const PhoneFrame = styled.div`
    border-radius: 48px;
    box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px, rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
    background-color: rgb(250, 250, 250);
    position: relative;

    &>.contents__PhoneContents {
        background-repeat: no-repeat;
        position: absolute;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0px;
        background-color: rgb(250, 250, 250);
    }



    ${({ position }) => {
        if (position === 'main') {
            return css`
                inset: 229px 0px auto auto;
                position: absolute;
                width: 330px;
                height: 680px;
                &>.contents__PhoneContents {
                    width: 300px;
                    height: 650px;
                    border-radius: 33px;
                    top: 15px;
                    left: 15px;
                    background-image: url('https://triple.guide/intro/images/img_01_screen_3_520@3x.png');
                    background-size: 300px 650px;
                }
                &:after {
                    width: 162px;
                    height: 38px;
                    left: 84px;
                    border-radius: 18px;
                }
            `
        } else if (position === 'rowPrice1') {
            return rowPriceContentsStyle('https://triple.guide/intro/images/img-07-screen-3@3x.png')
        } else if (position === 'rowPrice2') {
            return rowPriceContentsStyle('https://triple.guide/intro/images/img_07_screen_1@3x.png') 
        } else if (position === 'rowPrice3') {
            return rowPriceContentsStyle('https://triple.guide/intro/images/img_07_screen_2@3x.png')
        } else if (position === 'easySchedule1') {
            return easyScheduleContentsStyle('https://triple.guide/intro/images/img-04-screen-2@3x.png')
        } else if (position === 'easySchedule2') {
            return easyScheduleContentsStyle('https://triple.guide/intro/images/img-04-screen-1@3x.png') 
        } else if (position === 'easySchedule3') {
            return easyScheduleContentsStyle('https://triple.guide/intro/images/img-04-screen-3@3x.png')
        } else if (position === 'guidance1') {
            return guidanceContentsStyle('https://triple.guide/intro/images/img-05-screen-01@3x.png', 'back') 
        } else if (position === 'guidance2') {
            return guidanceContentsStyle('https://triple.guide/intro/images/img-05-screen@2x.png', 'front')
        }
            
    }}
`

export const rowPriceContentsStyle = (background) => {
    return  css`
        width: 290px;
        height: 598px;
        &>.contents__PhoneContents {
            border-radius: 20px;
            top: 14px;
            left: 14px;
            width: 262px;
            height: 570px;
            background-image: url('${background}');
            background-size: 262px 570px;
        }
        &:after {
            width: 142px;
            height: 20px;
            left: 74px;
            border-radius: 16px;
        }
    `
}
export const easyScheduleContentsStyle = (background) => {
    return  css`
        width: 221px;
        height: 456px;

        &>.contents__PhoneContents {
            border-radius: 20px;
            width: 202px;
            height: 437px;
            top: 9px;
            left: 10px;
            border-radius: 32px;
            background-size: 201px 436px;
            background-image: url('${background}');
        }
        &:after {
            width: 142px;
            height: 20px;
            left: 74px;
            border-radius: 16px;
        }
    `
}
export const guidanceContentsStyle = (background, position) => {
    return  css`
        width: 290px;
        height: 598px;
        position: absolute;
        inset: ${position === 'back' ? '125px 190px auto auto' : '195px 0px auto auto'};
        &>.contents__PhoneContents {
            border-radius: 20px;
            top: 14px;
            left: 14px;
            width: 262px;
            height: 570px;
            background-image: url('${background}');
            background-size: 262px 570px;
           
        }
        &:after {
            width: 142px;
            height: 20px;
            left: 74px;
            border-radius: 16px;
        }
    `
}

export const phoneContentsStyle = css`

`

export default function Phone({ position }) {
    const fade_in_1 = useScrollFadein(0.7, 0.2)
    return (
        <PhoneFrame position={ position } {...fade_in_1}>
            <div className='contents__PhoneContents'></div>
        </PhoneFrame>
    )
}