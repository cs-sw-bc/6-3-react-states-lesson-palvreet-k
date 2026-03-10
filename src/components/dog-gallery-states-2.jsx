// 🐶 Dog Gallery — The React Way
// Your job: add state so the gallery actually works!

// Step 1: Import useState from React
import { useState } from 'react';
import { dogs } from '../data/dogs.js';

export default function DogGalleryState() {

  // Step 2: Declare a state variable called index, starting at 0


  // Step 3: Write a handleNext function that increases index by 1
  // Hint: use % dogs.length so it wraps back to 0 at the end


  // Step 4: Write a handlePrev function that decreases index by 1
  // Hint: use + dogs.length so it wraps around without going negative


  // Step 5: Use index to get the current dog from the array
  const dog = dogs[0];// your code here

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🐾 Paws & Hearts Shelter</h1>
      <p style={{ color: "#888" }}>Meet our dogs looking for a home</p>

      <img
        src={dog.url}
        alt={dog.name}
        style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px", marginBottom: "16px" }}
      />

      <h2 style={{ margin: "8px 0" }}>{dog.name}</h2>
      <p style={{ color: "#555", margin: "4px 0" }}>{dog.breed}</p>
      <p style={{ color: "#555", margin: "4px 0" }}>{dog.age} years old</p>

      <p style={{ color: "#aaa", fontSize: "14px", margin: "12px 0" }}>
        {/* Step 6: Show current position e.g. "1 of 5" */}
      </p>

      {/* Step 7: Wire up the buttons to your handler functions */}
      <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "16px" }}>
        <button onClick={null} style={btnStyle}>← Prev</button>
        <button onClick={null} style={btnStyle}>Next →</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 24px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#4a90d9",
  color: "white",
  cursor: "pointer",
};
