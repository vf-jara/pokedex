import React, { useEffect, useState } from 'react'
import { Display, Title } from './styles'
import axios from 'axios'

export default function DisplayDetails({ pokemon }) {
    const [details, setDetails] = useState([])

    useEffect(() => {
        getPokemonDetails()
        console.log(pokemon)
    }, [pokemon])

    const getPokemonDetails = async () => {
        await axios({
            url: pokemon,
            baseURL: 'https://pokeapi.co/api/v2/pokemon',
            method: 'get',
        }).then((res) => {
            setDetails(res.data)
            console.log(res)
        })
    }
    return (
        <Display>
            <Title>{details.name}</Title>
            <h1></h1>
            <img src={details.sprites.other.home.front_default}></img>
            {details.types.map((type) => (
                <p>{type.type.name}</p>
            ))}
        </Display>
    )
}
