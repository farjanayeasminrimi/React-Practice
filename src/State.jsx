import { useState } from "react";

export default function Counter() {
  const [clicks, setClicks] = useState(0);
  const handler = () => {
    const updatedCounter = clicks + 1;
    setClicks(updatedCounter);
  };
  const styles = {
    padding: "15px",
    margin: "15px",
    border: "1px solid gray",
  };
  return (
    <div style={styles}>
      <p>Count: {clicks} </p>
      <button onClick={handler}>Add</button>
    </div>
  );
}
