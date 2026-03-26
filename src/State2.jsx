import { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const clicked = () => {
    const updated = count + 1;
    setCount(updated);
  };
  return (
    <div
      style={{
        margin: "20px",
        padding: "15px",
        border: "1px solid gray",
      }}
    >
      <p> Clicked: {count} </p>
      <button onClick={clicked}>Click Me</button>
    </div>
  );
}
