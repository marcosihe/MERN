import React, { useRef } from "react";
import { Container, Typography } from "@mui/material";
import { Card, Grid } from "@mui/material";
import { Button } from "@mui/material";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ textAlign: "center", m: 3 }}>
        Title
      </Typography>
      <hr />
      <Card sx={{ maxWidth: 450, m: "0 auto", boxShadow: 0 }}>
        <Grid container spacing={1}>
          <Grid xs={12} item>
            <input ref={inputRef} placeholder="Enter some text" />            
          </Grid>

          <Grid xs={12} item>
            <Button
              type="submit"
              variant="outlined"
              color="success"
              fullWidth
              onClick={handleClick}
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default FocusScreen;
