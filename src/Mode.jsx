import React, { useState } from "react";

function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const pageStyle = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={toggleMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <p>Current Mode: {darkMode ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
}

export default Mode;