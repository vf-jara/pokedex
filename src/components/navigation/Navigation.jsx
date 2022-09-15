import React from 'react'
import { Button, NavigationContainer } from './styles'

export default function Navigation({ prevPageNav, nextPageNav }) {
    return (
        <>
            <NavigationContainer>
                {prevPageNav && <Button onClick={prevPageNav}>Previous</Button>}
                {nextPageNav && <Button onClick={nextPageNav}>Next</Button>}

            </NavigationContainer>
        </>
    )
}
