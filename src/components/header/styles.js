import styled from "styled-components";
import pokeball from '../../assets/images/pokeball.png'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    display:flex;
    justify-content: space-between;
    gap:10px;
    padding:10px;
    min-height: 80px;
    align-items: center;

`
export const Form = styled.form`
    display:flex;
    flex-grow: 1;
    background-color: #FDDEDE;
    border-radius: 5px;
    padding:10px;
    border: 2px solid black;
`
export const Logo = styled.img.attrs({
    src: `${pokeball}`
})`
    width:50px;
    height:50px;
`

export const Input = styled.input`
    display:flex;
    flex-grow:1;
    background-color:transparent;
    border: none;
    padding: 5px;
    outline:none;
`
export const Button = styled.button`
    background:none;
    border: none;
    cursor:pointer;
`