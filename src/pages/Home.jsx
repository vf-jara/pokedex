import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayDetails from '../components/DisplayDetails/DisplayDetails'
import DisplayList from '../components/displayList/displayList'
import Navigation from '../components/navigation/Navigation'
import { Container } from './styles'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [mode, setMode] = useState("details")
    const [page, setPage] = useState("")
    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()
    const [count, setCount] = useState(0)
    const [pokemon, setPokemon] = useState("/bulbasaur")



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
            setList(res?.data?.results)
            setPrevPage(res?.data?.previous)
            setNextPage(res?.data?.next)
        })
    }



    function nextPageNav() {
        setPage(nextPage)
        setCount(count + 50)
    }
    function prevPageNav() {
        setPage(prevPage)
        setCount(count - 50)
    }
    function selectionHandler(name) {
        setPage()
    }

    if (loading) return <p>Please Wait, Loading</p>

    return (
        <Container>
            <div>
                {
                    mode == "list" &&
                    <>
                        <DisplayList list={list} selectionHandler={selectionHandler} />
                        <Navigation count={count} prevPageNav={prevPage ? prevPageNav : null} nextPageNav={nextPage ? nextPageNav : null} />
                    </>
                }
                {
                    mode == "details" &&
                    <>
                        <DisplayDetails pokemon={pokemon} />
                    </>
                }

            </div>

        </Container>
    )
}
