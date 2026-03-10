// 🐶 Block — State as a Snapshot
// Click the button. Why does the count only go up by 1?

import { useState } from "react";

export default function SnapshotDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: "320px", margin: "60px auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <h2>Treats Given: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
        style={btnStyle}
      >
        Give 3 Treats 🦴
      </button>
      <p style={{ color: "#aaa", fontSize: "13px", marginTop: "24px" }}>
        💭 This button calls setCount three times.<br />
        Why does it only go up by 1?
      </p>
    </div>
  );
}

const btnStyle = {
  padding: "10px 24px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#4a90d9",
  color: "white",
  cursor: "pointer",
};