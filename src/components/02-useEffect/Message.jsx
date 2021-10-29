import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x,y} = coords;

  useEffect(() => {
    //console.log('componente mnontado');
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      //console.log(coords);
      setCoords( coords );
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      //console.log('componente desmontado');
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <Alert severity="success">x: { x } - y: { y }</Alert>;
};

export default Message;
