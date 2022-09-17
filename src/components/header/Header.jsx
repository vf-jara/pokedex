import React from 'react'
import pokeball from '../../assets/images/pokeball.png'
import { Container, Input, Logo, Form, Button } from './styles'
import icon from '../../assets/images/pokemon-go.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <Container>
                <Link to={"/"}><Logo src={pokeball} alt="Pokeball" /></Link>
                <Form>
                    <Input type="search" placeholder="Busque por nome ou ID"></Input>
                    <Button><img src={icon}></img></Button>
                </Form>
            </Container>
        </>
    )
}
