import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Loader from '../../components/loader/Loader'
import Navigation from '../../components/navigation/Navigation'
import { Container, Display, Item } from './styles'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [page, setPage] = useState("")
    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()
    const [count, setCount] = useState(0)



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


    if (loading) return <Loader />

    return (
        <>
            <Container>
                <Header />
                <div>
                    <Display>
                        {
                            list.map((listItem) => (
                                <Link key={listItem.name} to={`/pokemon/${listItem.name}`}>
                                    <Item >
                                        <p>{listItem.name}</p>
                                    </Item>
                                </Link>
                            ))

                        }
                    </Display>
                    <Navigation count={count} prevPageNav={prevPage ? prevPageNav : null} nextPageNav={nextPage ? nextPageNav : null} />
                </div>

            </Container>
        </>
    )
}
