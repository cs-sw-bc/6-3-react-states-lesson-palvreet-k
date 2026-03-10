// 🐶 Dog Gallery — The DOM Way
// This version works, but notice how much manual work is needed
// every time we want to update what's on screen.

import { dogs } from '../data/dogs.js';

// We have to keep track of the index ourselves, outside of React
let index = 0;

function handleNext() {
  // 1. Update the index manually
  index = index + 1;
 
  /*
  if (index >= dogs.length) index = 0;

  // 2. Now we have to find every element on the page and update it by hand
  document.getElementById("dog-name").textContent = dogs[index].name;
  document.getElementById("dog-breed").textContent = dogs[index].breed;
  document.getElementById("dog-age").textContent = dogs[index].age + " years old";
  document.getElementById("dog-img").src = dogs[index].url;
  document.getElementById("dog-img").alt = dogs[index].name;
  document.getElementById("dog-counter").textContent =
    index + 1 + " of " + dogs.length;
    */
}

function handlePrev() {
  index = index - 1;
  /*
  if (index < 0) index = dogs.length - 1;

  // 3. We have to repeat ALL of this again for the prev button too 😬
  document.getElementById("dog-name").textContent = dogs[index].name;
  document.getElementById("dog-breed").textContent = dogs[index].breed;
  document.getElementById("dog-age").textContent = dogs[index].age + " years old";
  document.getElementById("dog-img").src = dogs[index].url;
  document.getElementById("dog-img").alt = dogs[index].name;
  document.getElementById("dog-counter").textContent =
    index + 1 + " of " + dogs.length;
    */
}

export default function DogGalleryDOM() {
  const dog = dogs[index];

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🐾 Paws & Hearts Shelter</h1>
      <p style={{ color: "#888" }}>Meet our dogs looking for a home</p>

      <img
        id="dog-img"
        src={dog.url}
        alt={dog.name}
        style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px", marginBottom: "16px" }}
      />

      <h2 id="dog-name" style={{ margin: "8px 0" }}>{dog.name}</h2>
      <p id="dog-breed" style={{ color: "#555", margin: "4px 0" }}>{dog.breed}</p>
      <p id="dog-age" style={{ color: "#555", margin: "4px 0" }}>{dog.age} years old</p>
      <p id="dog-counter" style={{ color: "#aaa", fontSize: "14px", margin: "12px 0" }}>
        1 of {dogs.length}
      </p>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "16px" }}>
        <button onClick={handlePrev} style={btnStyle}>← Prev</button>
        <button onClick={handleNext} style={btnStyle}>Next →</button>
      </div>

      <p style={{ marginTop: "32px", fontSize: "13px", color: "#aaa" }}>
        💭 Notice anything? What happens if we add a new field to each dog?<br />
        How many places in the code would we need to update?
      </p>
    </div>
  );
}

const btnStyle = {
  padding: "10px 24px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#e07b39",
  color: "white",
  cursor: "pointer",
};