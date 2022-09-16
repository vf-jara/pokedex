import styled from "styled-components";
import pokeicon from "./assets/images/pattern.svg"

export const MainContainer = styled.div`
    min-height:100vh;
    background: rgb(47,101,169); 
    background-image: url(${pokeicon}), linear-gradient(35deg, rgba(47,101,169,1) 0%, rgba(227,62,51,1) 100%);
`