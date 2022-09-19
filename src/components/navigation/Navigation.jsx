import React, { useState } from 'react'
import { Button, NavigationContainer, Pagination } from './styles'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export default function Navigation({ prevPageNav, nextPageNav, count }) {
    return (
        <>
            <NavigationContainer>
                <div>
                    {prevPageNav ? <Button onClick={prevPageNav}>
                        <ArrowLeft size={20} weight="bold" />
                        Prev</Button> : <Button disabled>
                        <ArrowLeft size={20} weight="bold" />
                        Prev
                    </Button>}
                </div>

                <div>
                    <Pagination>{count + 1} - {count + 50}</Pagination>
                </div>

                <div>
                    {nextPageNav ? <Button onClick={nextPageNav}>
                        Next
                        <ArrowRight size={20} weight="bold" />
                    </Button> : <Button disabled>
                        Next
                        <ArrowRight size={20} weight="bold" />
                    </Button>}
                </div>

            </NavigationContainer>
        </>
    )
}
