import { css } from '@emotion/react'
import styled from '@emotion/styled'

const PageButton = styled.button`
    background-color: rgba(255,255,255, 0.2);
    cursor: pointer;
    border: 1px solid white;
    color: white;
    width: 180px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    font-weight: bold;
    transition: all 200ms ease-in-out 0s;
    ${props => props.hoverActive ? css`
        &:hover {
            background: white;
            color: black;
            
        }
    ` : ''}
`
export default function Button({ displayNm, handleButton, hoverActive }) {
    return (
        <PageButton hoverActive={hoverActive}>
            {displayNm}
        </PageButton>
    )
}