import { Button } from '@mui/material'
import React from 'react'

const ShowIncrement = React.memo(( { increment } ) => {
    console.log('me volví a generar :(');
    return (
        <Button variant="outlined" color="warning" onClick={ () => increment(5) }>
        Increment
        </Button>
    )
})

export default ShowIncrement
