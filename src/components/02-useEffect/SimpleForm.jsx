import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import { TextField, Button } from "@mui/material";
import Message from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    //console.log("hey!");
  }, []);

  useEffect(() => {
    //console.log("formState cambió!");
  }, [formState]);

  useEffect(() => {
    //console.log("email cambió!");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <section>
      <h1>useEffect</h1>
      <hr />
      <Card sx={{ maxWidth: 450, m: "0 auto", boxShadow: 0 }}>
        <Grid container spacing={1}>
          <Grid xs={12} item>
            <TextField
              label="First Name"
              name="name"
              placeholder="Juan Perez"
              variant="outlined"
              fullWidth
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid xs={12} item>
              <TextField
                type="email"
                label="E-mail"
                name="email"
                placeholder="Enter e-mail"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                required
              />
            </Grid>
          <Grid xs={12} item>
            <Button type="submit" variant="outlined" color="success" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Card>
      { (name === '123') && <Message/> }
    </section>
  );
};

export default SimpleForm;
