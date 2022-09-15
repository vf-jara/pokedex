import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayList from '../components/displayList/displayList'
import Navigation from '../components/navigation/Navigation'
import { Container } from './styles'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [page, setPage] = useState("")
    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()
    useEffect(() => {
        getPokemonsList()
    }, [page])

    const getPokemonsList = async () => {
        await axios({
            url: page,
            baseURL: 'https://pokeapi.co/api/v2/pokemon/',
            method: 'get',
            params: {
                limit: 50,
            }
        }).then((res) => {
            setLoading(false)
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

    if (loading) return <p>Please Wait, Loading</p>

    return (
        <Container>
            <div>
                <h1>Pokemon List</h1>
                <DisplayList list={list} />
                <Navigation prevPageNav={prevPage ? prevPageNav : null} nextPageNav={nextPage ? nextPageNav : null} />

            </div>
        </Container>
    )
}
