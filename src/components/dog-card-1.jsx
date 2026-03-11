// 🐶 Block 1 — Responding to Events
// Concept: Handling events in React with onClick

export default function DogCard() {

  // Step 1: Create a function called handleAdopt that shows an alert
  // saying "You adopted a dog! 🐾"
function handleAdopt() {
  alert("You adopted a dog! 🐾");
}

  // Step 2: Create a function called handleLearnMore that logs
  // "Showing more info..." to the console
function handleLearnMore() {
  console.log("Showing more info...");
}

  return (
    <div style={cardStyle}>
      <h2>Biscuit 🐶</h2>
      <p style={{ color: "#666" }}>Golden Retriever · 2 years old</p>

      {/* Step 3: Wire handleAdopt to the Adopt button's onClick */}
      <button onClick={handleAdopt} style={{ ...btnStyle, backgroundColor: "#4a90d9" }}>
        Adopt
      </button>

      {/* Step 4: Wire handleLearnMore using an inline arrow function */}
      <button onClick={handleLearnMore} style={{ ...btnStyle, backgroundColor: "#888" }}>
        Learn More
      </button>
      {/* Step 4: Another way of caling the same thing instead of writing separate function*/}
      <button onClick={()=>{alert("You can call me this way too !")}} style={{ ...btnStyle, backgroundColor: "#888" }}>
        Another way
      </button>
    </div>
  );
}

const cardStyle = {
  maxWidth: "320px",
  margin: "60px auto",
  fontFamily: "sans-serif",
  textAlign: "center",
  padding: "32px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  backgroundColor: "#fafafa",
};

const btnStyle = {
  padding: "10px 24px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  cursor: "pointer",
  margin: "8px",
};


// ============================================================
// ANSWER KEY — don't peek until you've given it a real try! 😄
// ============================================================

// Step 1:
// function handleAdopt() {
//   alert("You adopted a dog! 🐾");
// }

// Step 2:
// function handleLearnMore() {
//   console.log("Showing more info...");
// }

// Step 3:
// onClick={handleAdopt}

// Step 4:
// onClick={() => handleLearnMore()}
// or simply: onClick={handleLearnMore}