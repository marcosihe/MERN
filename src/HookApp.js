import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ui/theme";
import styles from './HooksApp.module.scss';
//import CounterApp from "./components/01-useState/CounterApp";
//import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
//import SimpleForm from "./components/02-useEffect/SimpleForm";
import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook";

const HookApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <header></header>
      <main className={styles.main}>
        <h1>useState Practice</h1>
        <FormWithCustomHook/>
      </main>
      <footer></footer>
    </ThemeProvider>
  );
};

export default HookApp;
