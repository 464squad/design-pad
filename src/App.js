
import React, { useState, useEffect } from "react";
import "./App.css";
import DesignContainer from "./components/DesignContainer";

function useWindowSize(){
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {

    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  return size;
}

function App(props) {
  const [height, width] = useWindowSize();
  return(
    <>
    height : {height}, width: {width}
    <DesignContainer />;
    
    </>
  );

}

export default App;
