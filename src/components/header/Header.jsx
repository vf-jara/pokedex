import React from 'react'
import pokeball from '../../assets/images/pokeball.png'
import { Container, Input, Logo, Form, Button } from './styles'
import icon from '../../assets/images/pokemon-go.png'

export default function Header() {
    return (
        <>
            <Container>
                <Logo src={pokeball} alt="Pokeball" />
                <Form>
                    <Input type="search" placeholder="Busque por nome ou ID"></Input>
                    <Button><img src={icon}></img></Button>
                </Form>
            </Container>
        </>
    )
}
