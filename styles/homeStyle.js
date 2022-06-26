import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const basicStyles = css`
    width: 1200px;
    margin: 0 auto;
    position: relative
`

export const StaticHeader = styled.div`
    width: 100%;
    min-width: 1200px;
    display: flex;
    align-items: 'center';
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    padding: 83px 50px 17px;
    ${css`
        &>.Header__MyBooking{
            font-weight: 500; 
            color: white;
        }
    `}
`

export const inactive = css`
        opacity: 0;
        transform: translateY(20px);
        transition: all 200ms ease-in-out 0s;
`

export const active = css`
        opacity: 1;
        transform: translateY(0);
        transition: all 200ms ease-in-out 0s;
`
export const Section = styled.div`
    width: 100%;
    overflow: hidden;
    ${css`
        &.section__SectionContainer-main {
            position: relative;
            background-image: url('https://triple.guide/intro/images/img-01-bg.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        &.section__SectionContainer-counting {
           background: white;
        }
        &.section__SectionContainer-rowPrice {
            background: center center / cover rgb(250, 250, 250);
        }
    `}
`
export const SectionInnerWrapper = styled.div`
    ${basicStyles}
    ${css`
        &.section__InnerContainer-main {
            height: 860px;
            &>.contents__text{
                top: 220px;
                position: absolute;
                width: 100%;
            }
            &>.contents__text>h1 {
                font-family: sans-serif;
                font-weight: bold;
                margin: 0px 0px 0px -4px;
                color: rgb(255, 255, 255);
                font-size: 90px;
                line-height: 1.1;
                letter-spacing: -3px;
            }
            &>.contents__text>p{
                font-family: sans-serif;
                letter-spacing: 0px;
                color: rgb(255, 255, 255);
                font-weight: 500;
                margin: 18px 0px 0px 1px;
                font-size: 17px;
                line-height: 2;
            }
            &>.contents__text>div{
                margin-top: 76px;
            }
        }
        &.section__InnerContainer-counting {
            height: auto; 
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 150px 0;
            .container__Image {
                position: relative;
                .image__Triple{
                    // position: absolute;
                    width: 400px;
                    height: 338px;
                    background-size: 400px 338px;
                    font-size: 15px;
                    background-image: url('./images/triple2x.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                p {
                    position:absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 15px;
                    color: rgba(58, 58, 58, 0.7);
                }
            }

            &>.container__Text {
                .text__counting {
                    font-size: 36px;
                    letter-spacing: -1px;
                    margin-bottom: 20px;
                    span{
                        font-weight: bold;
                    }
                }
                .container__Prize {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    dt {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 54px;
                        padding: 5px 0px 5px 62px;
                        background-repeat: no-repeat;
                        background-size: 54px 54px;
                        font-size: 14px;
                        color: rgba(58, 58, 58, 0.8);
                        margin-top: 20px;
                        &:nth-child(1) {
                            background-image: url('./images/play-store2x.png');
                        }
                        &:nth-child(2) {
                            background-image: url('./images/badge-apple4x.png');
                            margin-left: 39px;
                        }
                    }
                }
            }
        }
        &.section__InnerContainer-rowPrice {
            height: 1000px;
            &>.container__Phones {
                width: 100%;
                display: flex;
                justify-content: center;
                line-height: 30px;
                letter-spacing: -0.283333px;
                position: absolute;
                bottom: -52px;
            }
        }
    `}
`
export const HeaderLogo = styled.a`
    display: inline-block;
    background-image: url('https://triple.guide/intro/images/img-main-logo-white@3x.png');
    background-repeat: no-repeat;
    width: 77px;
    height: 25px;
    background-size: 77px 25px;
`

export const TextBold = styled.h4`
    font-size: ${({size}) => `${size}px`};
    line-height: 68px;
    font-family: sans-serif;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -1px;
    color: rgb(58, 58, 58);
    width: 100%;
    text-align: ${({align}) => align};
    margin: 0px;
    top: ${({ top }) => `${top}px`};
    position: absolute;
`

export const TextNormal = styled.p`
    font-size: ${({size}) => `${size}px`};
    line-height: 30px;
    letter-spacing: -0.283333px;
    font-family: sans-serif;
    font-weight: normal;
    font-style: normal;
    color: rgb(58, 58, 58);
    text-align: ${({align}) => align};
    margin: 0px;
    top: ${({ top }) => `${top}px`};
    position: absolute;
    width: 100%;
`

export const Gap = styled.div`
        width: 19px;
`


