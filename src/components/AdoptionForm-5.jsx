// 🐶 Block 5 — Adoption Form
// Concepts: Reacting to Input with State, Choosing State Structure

import { useState } from "react";

// 💭 State structure discussion:
// We need to track: the applicant's name, their email, and whether the form was submitted.
// Should these be three separate state variables, or one object?
// Think about it before scrolling to the answer key.

export default function AdoptionForm() {

  // Step 1: Create a state variable for the applicant's name (start as empty string)
  const[name, setName] = useState("");

  // Step 2: Create a state variable for the applicant's email (start as empty string)
  const[email, setEmail] = useState("");

  // Step 3: Create a state variable for submitted (start as false)
  const[isSubmitted, setSubmitted] = useState(false);

  // Step 4: Write a handleSubmit function that sets submitted to true
  function handleSubmit(){
    setSubmitted(true);
  }

  // Step 5: If submitted is true, show a success message instead of the form
  // "Thank you, {name}! We'll be in touch at {email} 🐾"
  if(isSubmitted){
    //early return
    return(<><h1>Thank you, {name}! We'll be in touch at {email} 🐾</h1></>)
  }

  return (
    <div style={{ maxWidth: "480px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>🐾 Adopt a Dog</h1>
      <p style={{ color: "#666" }}>Fill in your details and we'll be in touch!</p>

      <div style={formStyle}>

        {/* Step 6: Wire up the name input — value and onChange */}
        <label style={labelStyle}>Your Name</label>
        <input
          type="text"
          placeholder="e.g. Alex Smith"
          value={null}
          onChange={null}
          style={inputStyle}
        />

        {/* Step 7: Wire up the email input — value and onChange */}
        <label style={labelStyle}>Your Email</label>
        <input
          type="email"
          placeholder="e.g. alex@email.com"
          value={null}
          onChange={null}
          style={inputStyle}
        />

        {/* Step 8: Disable the submit button when name or email is empty */}
        {/* Wire onClick to handleSubmit */}
        <button
          onClick={handleSubmit}
          disabled={false}
          style={{
            ...btnStyle,
            backgroundColor: (name === "" || email === "") ? "#ccc" : "#4a90d9",
            cursor: (name === "" || email === "") ? "not-allowed" : "pointer",
          }}
        >
          Submit Application
        </button>

      </div>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  backgroundColor: "#fafafa",
};

const labelStyle = { fontSize: "14px", fontWeight: "bold", color: "#444" };

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const btnStyle = {
  padding: "12px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  marginTop: "8px",
};
