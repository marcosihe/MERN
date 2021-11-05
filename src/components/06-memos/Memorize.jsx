import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";

import styles from './Memorize.module.scss';

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <section className={styles.container}>
      <Typography variant="h2">
        Counter: <Small value={counter} />
      </Typography>
      <Button variant="contained" color="success" onClick={increment}>
        +1
      </Button>
      <Button variant="outlined" color="error" onClick={ () => { setShow( !show ) } }>
        Show/Hide { JSON.stringify( show ) }
      </Button>
    </section>
  );
};

export default Memorize;
