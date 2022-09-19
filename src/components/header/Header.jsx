import React, { useState } from 'react'
import pokeball from '../../assets/images/pokeball.png'
import { Container, Input, Logo, Form, Button } from './styles'
import icon from '../../assets/images/pokemon-go.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/pokemon/${search}`)
    }
    return (
        <>
            <Container>
                <Link to={"/"}><Logo src={pokeball} alt="Pokeball" /></Link>
                <Form onSubmit={handleSubmit}>
                    <Input onChange={(e) => setSearch((e.target.value).toLowerCase())} type="search" placeholder="Search by name or ID"></Input>
                    <Button type="submit"><img src={icon}></img></Button>
                </Form>
            </Container>
        </>
    )
}
