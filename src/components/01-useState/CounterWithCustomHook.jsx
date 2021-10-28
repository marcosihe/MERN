import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import { Button } from '@mui/material';

const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(10);
    return (
        <section>
            <h2>Counter with Hook = { state } </h2>
            <hr/>
            <Button variant="contained" color="success" onClick={ () => increment(2) }>+2</Button>
            <Button variant="contained" color="secondary" onClick={ reset }>reset</Button>
            <Button variant="contained" color="error" onClick={ () => decrement(5) }>-5</Button>
        </section>
    )
}

export default CounterWithCustomHook
