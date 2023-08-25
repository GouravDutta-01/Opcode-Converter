import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState("light");
  const showAlert = (message) => {
    toast(message);
  };
  const toggleMode = () => {
    setProgress(30);
    if(mode == "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#06022d";
      showAlert("Dark mode has been enabled!");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled!");
    }
    setProgress(100);
  };
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBar
        height={3}
        color='#cf2368'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar mode={mode} toggleMode={toggleMode} />
        <ToastContainer position="top-center" autoClose={1000}/>
        <div className="container my-3">
          <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  setProgress={setProgress}
                />
        </div>
    </>
  );
}

export default App;
