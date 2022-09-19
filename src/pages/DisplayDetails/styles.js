import styled, { css } from 'styled-components'
import pokebg from '../../assets/images/pokebg.svg'

export const Display = styled.div`
    display:grid;
    grid-template-columns:1fr;
    @media(min-width:720px){
        grid-template-columns:1fr 1fr;
    }
    gap: 10px;
    padding: 10px;
    border: 2px solid black;
    border-radius:6px;
    min-height: 60vh;
    max-height: 60vh;
    @media(max-width:720px){
        max-height:65vh;
    }
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
    border:2px solid black;
    padding:10px;
    border-radius:5px;
    background-color: white;
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
    width: 75%;;
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
    height:100%;
`
export const Attributes = styled.div`
    ${(props) =>
        props.variant === "types" && css`
        display:flex;
        flex-direction: column;
        align-items: center;
        `
    };
    padding: 5px 10px;
    background-color: white;
    border-radius:5px;
    font-weight:bold;
`
export const AttributesWrapper = styled.div`
    padding:5px;
    display: flex;
    flex-wrap:wrap;
    flex-direction: ${props => props.variant === "status" ? "column" : "row"};
    border:2px solid black;
    gap:10px;
    background-color:#FDDEDE;
    border-radius:5px;
    padding:10px;
    margin:10px 0;

`
export const TypeImage = styled.img`
    width:40px;
`

export const DetailsNavigation = styled.div`
    display: flex;
    justify-content: center;
    gap:15px;
`

export const NavButton = styled.button`
    display: flex;
    gap:5px;
    align-items:center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 5px;
    background-color: #FDDEDE;
    width: 110px;
    font-size: 16px;
    padding:15px;
    margin-top:10px;
    font-size:18px;
    font-weight: bold;
    cursor:pointer;
`