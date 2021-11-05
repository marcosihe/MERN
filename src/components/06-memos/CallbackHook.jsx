import React, { useCallback, useState } from 'react'
import { Typography } from '@mui/material'

import styles from './Memorize.module.scss';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    /* const increment = () => {
        setCounter( counter + 1);
    } */

    const increment = useCallback( (num = 1) => {
        setCounter( c => c + num );
    }, [ setCounter])

    return (
        <section className={styles.container}>
            <Typography variant="h3">useCallback Hook</Typography>
            <Typography variant="h4">Counter: {counter}</Typography>
            <ShowIncrement increment={increment} />
        </section>
    )
}

export default CallbackHook
