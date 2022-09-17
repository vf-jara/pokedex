import styled from 'styled-components'
import pokebg from '../../assets/images/pokebg.svg'

export const Display = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 30px;
    padding: 10px;
    border: 2px solid black;
    border-radius:6px;
    min-height: 60vh;
    max-height: 60vh;
    max-width: 1100px;
    background-color: #e5e5e5;
    overflow-y: auto;
    margin: auto;

`
export const LeftBox = styled.div`
    display:flex;
    gap:10px;
    flex-direction: column;
    flex-grow: 1;
`
export const RightBox = styled.div`
    width:50%;
`
export const Title = styled.h1`
text-align:center;
    
`
export const TitleWrapper = styled.div`
    background:white;
    border-radius: 5px;
    padding: 5px 10px;
    border:2px solid black;
`
export const Sprite = styled.img`
    width: 200px;
`
export const SpriteWrapper = styled.div`
    background-image: url(${pokebg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
    border: 2px solid black;
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const Types = styled.p`
    padding: 5px 10px;
    background-color: #FDDEDE;
`
export const TypesWrapper = styled.div`
    padding:5px;
    display: flex;
    gap:10px;

`