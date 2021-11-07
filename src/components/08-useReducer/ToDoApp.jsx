import React, { useReducer, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { Grid, TextField, Button, Card, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { toDoReducer } from "./toDoReducer";
import { useForm } from "../../hooks/useForm";

import styles from "./ToDoApp.module.scss";

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [];
};

const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);

  const [{ task }, handleInputChange, reset] = useForm({
    task: "",
  });

  useEffect( () => {
      localStorage.setItem('toDos', JSON.stringify( toDos ))
  }, [toDos])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Little validation
    if (task.trim().length <= 1) {
      return;
    }

    const newToDo = {
      id: new Date().getTime(),
      desc: task,
      done: false,
    };

    const action = {
      type: "add",
      payload: newToDo,
    };

    dispatch(action);
    reset();
  };

  return (
    <section className={styles.container}>
      <Typography variant="h3">ToDoApp ({toDos.length})</Typography>
      <hr />
      <section className={styles.tasksContainer}>
        <section>
          <section>
            <Typography variant="h4">Add Task</Typography>
            <hr />
            <form onSubmit={handleSubmit}>
              <Card sx={{ maxWidth: 450, m: "0 auto", boxShadow: 0 }}>
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField
                      label="Task"
                      name="task"
                      placeholder="Enter task here"
                      variant="outlined"
                      fullWidth
                      autoComplete="off"
                      value={task}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="outlined"
                      color="success"
                      fullWidth
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </form>
          </section>
        </section>
        <List>
          {toDos.map((toDo, i) => (
            <ListItem key={toDo.id} className={styles.listItemContainer}>
              <ListItemText primary={i + 1 + ". " + toDo.desc} />
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </section>
    </section>
  );
};

export default ToDoApp;
