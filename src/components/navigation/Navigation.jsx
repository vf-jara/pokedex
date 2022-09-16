import React, { useState } from 'react'
import { Button, NavigationContainer } from './styles'

export default function Navigation({ prevPageNav, nextPageNav, count }) {
    return (
        <>
            <NavigationContainer>
                <div>
                    {prevPageNav ? <Button onClick={prevPageNav}>Prev</Button> : <Button disabled>Prev</Button>}
                </div>

                <div>
                    <span>{count + 1} - {count + 50}</span>
                </div>

                <div>
                    {nextPageNav ? <Button onClick={nextPageNav}>Next</Button> : <Button onClick={nextPageNav}>Next</Button>}
                </div>

            </NavigationContainer>
        </>
    )
}
