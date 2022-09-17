import React, { useEffect, useState } from 'react'
import { Display, Title } from './styles'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'

export default function DisplayDetails() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const { pokemon } = useParams()

    useEffect(() => {
        axios({
            url: `/${pokemon}`,
            baseURL: 'https://pokeapi.co/api/v2/pokemon',
            method: 'get',
        }).then((res) => {
            setDetails(res.data)
            setLoading(false)
            console.log("response: ", res)
        })
    }, [pokemon])

    if (loading) return <p>Please Wait, Loading</p>

    return (
        <>
            <Header />
            <Display>
                <Title>{details.id}{details.name}</Title>
                <h1></h1>
                <img src={details.sprites.other.home.front_default}></img>
                {details.types.map((type) => (
                    <p>{type.type.name}</p>
                ))}
            </Display>
        </>
    )
}
