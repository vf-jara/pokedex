import React, { useState } from 'react'
import { Button, NavigationContainer, Pagination } from './styles'

export default function Navigation({ prevPageNav, nextPageNav, count }) {
    return (
        <>
            <NavigationContainer>
                <div>
                    {prevPageNav ? <Button onClick={prevPageNav}>Prev</Button> : <Button disabled>Prev</Button>}
                </div>

                <div>
                    <Pagination>{count + 1} - {count + 50}</Pagination>
                </div>

                <div>
                    {nextPageNav ? <Button onClick={nextPageNav}>Next</Button> : <Button onClick={nextPageNav}>Next</Button>}
                </div>

            </NavigationContainer>
        </>
    )
}
