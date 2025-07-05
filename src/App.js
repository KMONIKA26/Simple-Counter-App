import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Handlers
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0)); // prevent below 0
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>

      {count === 10 && <p style={{ color: "green", fontWeight: "bold" }}>Goal Reached!</p>}

      <div style={styles.buttonContainer}>
        <button onClick={handleIncrement} style={styles.button}>Increment</button>
        <button onClick={handleDecrement} style={styles.button}>Decrement</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default App;
