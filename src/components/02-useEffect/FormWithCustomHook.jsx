import React from "react";
import { useForm } from "../../hooks/useForm";
import { Card, Grid } from "@mui/material";
import { TextField, Button } from "@mui/material";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <section>
      <h1>Form with Custom Hook</h1>
      <hr />
      <form onSubmit={handleSubmit}>
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
              <TextField
                type="password"
                label="password"
                name="password"
                placeholder="type your password here"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid xs={12} item>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </section>
  );
};

export default FormWithCustomHook;
