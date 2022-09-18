import React from 'react'
import Header from '../header/Header'
import { Container, Spinner } from './styles'

export default function Loader() {
    return (
        <div>
            <Container>
                <Spinner />
                <h1>Loading...</h1>
            </Container>
        </div>
    )
}
