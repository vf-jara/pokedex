import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from '../styles'

export default function Home() {
    const [list, setList] = useState([])
    useEffect(() => {
        getPokemonsList()
    }, [])

    const getPokemonsList = () => {
        axios({
            url: 'https://pokeapi.co/api/v2/pokemon/',
            method: 'get',
            params: {
                limit: 50,
            }
        }).then((res) => {
            setList(res.data.results)
            console.log(list)
        })
    }
    return (
        <Container>
            <h1>Pokemon List</h1>
            <ul>
                {
                    list.map((pokemon) => (
                        <li><p>{pokemon.name}</p></li>
                    ))
                }
            </ul>
        </Container>
    )
}
