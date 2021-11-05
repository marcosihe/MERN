import React, { useState, useMemo } from "react";
import { Button, Typography } from "@mui/material";
import { useCounter } from "../../hooks/useCounter";


import styles from './Memorize.module.scss';
import { heavyProcess } from "../../helpers/heavyProcess";

const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);

  const heavyProcessMemo = useMemo( () => heavyProcess(counter), [counter])
  console.log(heavyProcessMemo);

  return (
    <section className={styles.container}>
    <Typography varant="h2">MemoHook</Typography>
      <Typography variant="h4">
        Counter: <small>{counter}</small>
      </Typography>
      <hr />

      <p> { heavyProcessMemo } </p>

      <Button variant="contained" color="success" onClick={increment}>
        +1
      </Button>
      <Button variant="outlined" color="error" onClick={ () => { setShow( !show ) } }>
        Show/Hide { JSON.stringify( show ) }
      </Button>
    </section>
  );
};

export default MemoHook;