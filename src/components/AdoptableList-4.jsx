// 🐶 Block — Updating Arrays in State
// Concepts: add, remove, and clear items in a state array

import { useState } from "react";

export default function DogList() {
  const [dogs, setDogs] = useState(["Biscuit", "Nova", "Churro", "Pepper"]);
  const [input, setInput] = useState("");

  // Step 1: Write addDog — add the input value to the dogs array
  // Then clear the input
  // Hint: [...dogs, input]
  function addDog() {
    // cannot use push as dogs is const
    //workaround- create a new list and pass it to setDogs
    //use spread Operator
    // take existing dog array, add new input and set it back to Dogs
    setDogs([...dogs, input]);
  }

  // Step 2: Write removeDog — remove a dog by name from the array
  //Cannot use pop
  // Hint: dogs.filter(...)
  function removeDog(name) {
    setDogs(dogs.filter((dog)=> dog!== name));
  }

  // Step 3: Write clearAll — empty the dogs array
  function clearAll() {
    setDogs([])
  }

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>🐾 Dog List</h1>

      {/* Add */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a dog name..."
          style={inputStyle}
        />
        {/* Step 4: Wire onClick to addDog */}
        <button onClick={addDog} style={{ ...btnStyle, backgroundColor: "#4a90d9" }}>
          Add 🐶
        </button>
      </div>

      {/* List */}
      {dogs.length === 0
        ? <p style={{ color: "#aaa" }}>No dogs here yet!</p>
        : dogs.map(dog => (
          <div key={dog} style={rowStyle}>
            <span>{dog}</span>
            {/* Step 5: Wire onClick to removeDog, passing the dog's name */}
            <button onClick={()=>{removeDog(dog)}} style={{ ...btnStyle, backgroundColor: "#e05c5c" }}>
              Remove
            </button>
          </div>
        ))
      }

      {/* Step 6: Wire onClick to clearAll */}
      <button onClick={clearAll} style={{ ...btnStyle, backgroundColor: "#888", marginTop: "16px" }}>
        Clear All
      </button>
    </div>
  );
}

const inputStyle = {
  flex: 1,
  padding: "10px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 14px",
  marginBottom: "8px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  backgroundColor: "#fafafa",
};

const btnStyle = {
  padding: "8px 16px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  cursor: "pointer",
};
