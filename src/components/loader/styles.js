import styled, { keyframes } from 'styled-components'
import pokeball from '../../assets/images/pokeball.png'

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const Spinner = styled.img.attrs({
    src: `${pokeball}`
})`
    width: 150px;
    animation: ${rotate} .5s linear infinite;
    opacity:50%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    min-height: 60vh;
    max-height: 60vh;
    max-width: 1100px;
    overflow-y: auto;
    margin: auto;
`