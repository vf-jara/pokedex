import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from '../styles'

export default function Home() {
    const [list, setList] = useState([])
    const [page, setPage] = useState("")
    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()
    useEffect(() => {
        getPokemonsList()
    }, [page])

    const getPokemonsList = () => {
        axios({
            url: page,
            baseURL: 'https://pokeapi.co/api/v2/pokemon/',
            method: 'get',
            params: {
                limit: 50,
            }
        }).then((res) => {
            console.log(res)
            setList(res.data.results)
            setPrevPage(res.data.previous)
            setNextPage(res.data.next)
        })
    }

    function nextPageNav() {
        setPage(nextPage)
    }
    function prevPageNav() {
        setPage(prevPage)
    }


    return (
        <Container>
            <h1>Pokemon List</h1>
            <ul>
                {
                    list.map((pokemon) => (
                        <li key={pokemon.name}><p>{pokemon.name}</p></li>
                    ))
                }
            </ul>
            <button onClick={prevPageNav}>Prev</button>
            <button onClick={nextPageNav}>Next</button>
        </Container>
    )
}
