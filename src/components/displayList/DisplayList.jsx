import React from 'react'
import { Display, Item } from './styles'

export default function DisplayList({ list }) {
    return (
        <Display>
            {
                list.map((pokemon) => (
                    <Item key={pokemon.name}>
                        <p>{pokemon.name}</p>
                    </Item>
                ))

            }
        </Display>
    )
}
