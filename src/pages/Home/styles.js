import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
`

export const Display = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    @media(min-width:720px){
        grid-template-columns:1fr 1fr 1fr;
    }
    @media(min-width:1024px){
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
    grid-gap: 3px 10px;
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
export const Item = styled.button`
border: 2px solid black;
    font-size:18px;
    font-weight: bold;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    min-height: 50px;
    padding:3px 5px;
    margin: 3px 0;
    background-color: #ffffff;
    &:hover {
        background-color:#FDDEDE;
    }
    cursor: pointer;
    width:100%;
`