import React, { useEffect, useState } from 'react'
import { Display, LeftBox, RightBox, Sprite, SpriteWrapper, Title, TitleWrapper, Attributes, AttributesWrapper, TypeImage, DetailsNavigation, NavButton } from './styles'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Loader from '../../components/loader/Loader'

export default function DisplayDetails() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const { pokemon } = useParams()

    const fallback = useNavigate()

    useEffect(() => {
        axios({
            url: `/${pokemon}`,
            baseURL: 'https://pokeapi.co/api/v2/pokemon',
            method: 'get',
        }).then((res) => {
            setDetails(res.data)
            setLoading(false)
        }).catch((error) => {
            if (error.response.status === 404) {
                fallback("/")
            }
        })
    }, [pokemon])

    let id = details.id

    if (loading) return <Loader />

    return (
        <>
            <Header />
            <Display>
                <LeftBox>
                    <TitleWrapper>
                        <Title>#{details.id} {details.name}</Title>
                    </TitleWrapper>
                    <SpriteWrapper>
                        <Sprite src={details.sprites.other.home.front_default}></Sprite>
                    </SpriteWrapper>
                </LeftBox>
                <RightBox>
                    <h2>Type:</h2>
                    <AttributesWrapper>
                        {details.types.map((type) => (
                            <Attributes key={type.type.name} variant="types">
                                <TypeImage src={`/pokemonTypes/${type.type.name}.png`} />
                                <p>
                                    {type.type.name}
                                </p>
                            </Attributes>
                        ))}
                    </AttributesWrapper>
                    <hr /><br />
                    <h2>Status:</h2>
                    <AttributesWrapper variant="status">
                        {details.stats.map((stat) => (
                            <Attributes key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</Attributes>
                        ))}
                    </AttributesWrapper>
                </RightBox>
            </Display>
            <DetailsNavigation>
                <Link to={`/pokemon/${details.id - 1}`}>
                    <NavButton>
                        Prev
                    </NavButton>

                </Link>
                <Link to={"/"}>
                    <NavButton>
                        Home
                    </NavButton>
                </Link>
                <Link to={`/pokemon/${details.id + 1}`}>
                    <NavButton>
                        Next
                    </NavButton>

                </Link>
            </DetailsNavigation>
        </>
    )
}