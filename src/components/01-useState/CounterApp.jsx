import { Button } from "@mui/material";
import React, { useState } from "react";

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const { counter1, counter2 } = state;
  return (
    <section>
      <h2>Counter 1 = { counter1 }</h2>
      <h2>Counter 2 = { counter2 }</h2>
      <hr />
      <Button variant="contained" color="success" onClick={() => setState( { ...state, counter1: counter1 + 1 } )}>
        +1
      </Button>
    </section>
  );
};

export default CounterApp;
