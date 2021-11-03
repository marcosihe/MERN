import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import { Button, Typography, Box, Skeleton } from "@mui/material";

import styles from "./MultipleCustomHook.module.scss";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const URL = "https://www.breakingbadapi.com/api/quotes/";
  const { loading, data } = useFetch(`${URL}${counter}`);

  const { author, quote, series } = !!data && data[0];
  return (
    <section className={styles.sectionContainer}>
      <Typography variant="h4">{series || "Breaking BAD"}</Typography>
      <hr />
      {loading ? (
        <Box sx={{ width: 300, m: 2 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        <section>
          <Typography mt={2}>{quote}</Typography>
          <Typography m={2} color="secondary">
            -{author}
          </Typography>
        </section>
      )}
      <Button variant="outlined" color="success" onClick={increment}>
        Get Phrase
      </Button>
    </section>
  );
};

export default MultipleCustomHooks;
