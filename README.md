# React State — Concept Reference
> Adding Interactivity · Managing State · Hooks

---

## 1. Responding to Events

React handles events through event handler functions passed directly to JSX elements. You pass the function reference, not a call.

> **Pass the function, don't call it:** `onClick={handleClick}` not `onClick={handleClick()}`

```jsx
export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

Inline arrow functions work too, useful for short logic:

```jsx
<button onClick={() => alert("Clicked!")}>Click me</button>
```

---

## 2. State: A Component's Memory

A regular variable resets every time a component renders. State is a special variable that React remembers between renders — and updating it causes a re-render.

> **Think of state as:** a variable + a trigger that tells React to update the screen.

**Regular variable — does NOT work:**

```jsx
export default function Counter() {
  let count = 0; // resets on every render

  function handleClick() {
    count = count + 1; // React doesn't know this changed
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

**State variable — works correctly:**

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // tells React to re-render
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

`useState` returns two things: the current value, and a setter function. Convention is to name them `[thing, setThing]`.

---

## 3. Render and Commit

When state changes, React goes through two steps before the screen updates:

```
1. Render   — React calls your component function and builds a new UI description
2. Commit   — React applies the changes to the actual DOM
```

> **Re-render does not mean the whole page refreshes** — React is surgical about what it updates. Only the parts that actually changed are touched.

---

## 4. State as a Snapshot

State doesn't change mid-render. When a render begins, state is frozen as a snapshot for that render. Even if you call the setter multiple times, the value you read is always the snapshot from when the render started.

**This only increments by 1, not 3:**

```jsx
const [count, setCount] = useState(0);

<button onClick={() => {
  setCount(count + 1); // count is 0
  setCount(count + 1); // count is still 0
  setCount(count + 1); // count is still 0
}}>+3</button>

// Result: count becomes 1, not 3
```

> `setCount` schedules a new render — it doesn't mutate the current value. Each render has its own snapshot of state.

---

## 5. Queueing State Updates

To apply multiple updates in one render, use an updater function instead of a value. React queues these up and runs them in order, each receiving the latest result.

```jsx
// Absolute update — uses the snapshot value
setCount(count + 1);

// Relative update — uses whatever is currently queued
setCount(n => n + 1);
```

**This actually increments by 3:**

```jsx
<button onClick={() => {
  setCount(n => n + 1); // 0 → 1
  setCount(n => n + 1); // 1 → 2
  setCount(n => n + 1); // 2 → 3
}}>+3</button>
```

> `n => n + 1` is called an **updater function**. `n` is just a parameter name — React passes in the latest queued value. Use it whenever the new state depends on the previous one.

---

## 6. Updating Objects in State

State should be treated as read-only. Never mutate an object in state directly — create a new object instead using the spread operator.

**Wrong — mutating state directly:**

```jsx
const [user, setUser] = useState({ name: "Alex", age: 25 });

// ❌ Never do this
user.name = "Jordan";
setUser(user); // React may not detect the change
```

**Correct — spread into a new object:**

```jsx
const [user, setUser] = useState({ name: "Alex", age: 25 });

// ✅ Create a new object
setUser({ ...user, name: "Jordan" });

// ...user copies all existing fields, then name is overwritten
```

> `...user` copies all existing fields. Then you override just the ones that changed. Everything else stays the same.

---

## 7. Updating Arrays in State

Same rule as objects — never mutate the array directly. Use methods that return a new array.

```jsx
const [items, setItems] = useState(["apple", "banana"]);

// ✅ Add an item
setItems([...items, "mango"]);

// ✅ Remove an item
setItems(items.filter(item => item !== "banana"));

// ✅ Update an item
setItems(items.map(item => item === "apple" ? "pear" : item));
```

**Methods to AVOID** (they mutate the original array):
```
push()   pop()   splice()   sort()   reverse()
```

**Methods that are SAFE** (they return a new array):
```
map()    filter()    concat()    slice()    spread [...arr]
```

---

## 8. Reacting to Input with State

Instead of manually showing/hiding elements with the DOM, describe what the UI should look like for each possible state. React handles the rest.

> **Think in states, not steps.** Ask: what does the UI look like when loading? When empty? When there's an error?

**Controlled input — React state is the single source of truth:**

```jsx
const [value, setValue] = useState("");

<input
  value={value}
  onChange={e => setValue(e.target.value)}
/>
<p>You typed: {value}</p>
```

**Disabled button that enables when input has a value:**

```jsx
const [value, setValue] = useState("");

<input
  value={value}
  onChange={e => setValue(e.target.value)}
  placeholder="Type something..."
/>
<button disabled={value === ""}>Submit</button>
```

> `disabled={value === ""}` evaluates to `true` when the input is empty, and `false` once the user types anything. No manual DOM toggling needed — state drives it automatically.

---

## 9. Choosing the State Structure

Good state structure makes components easier to update and debug.

```jsx
// ✅ Group related state together
const [position, setPosition] = useState({ x: 0, y: 0 });

// ❌ Avoid state that can be calculated from other state
const [firstName, setFirstName] = useState("Alex");
const [lastName, setLastName] = useState("Smith");
const [fullName, setFullName] = useState("Alex Smith"); // unnecessary

// ✅ Derive it instead
const fullName = firstName + " " + lastName;
```

Avoid deeply nested state — flat structures are easier to update without accidentally mutating.

---

## 10. Sharing State Between Components

When two components need to share the same state, lift the state up to their closest common parent and pass it down as props.

```jsx
function Parent() {
  const [count, setCount] = useState(0); // shared state lives here

  return (
    <>
      <Display count={count} />
      <Controls onIncrement={() => setCount(n => n + 1)} />
    </>
  );
}

function Display({ count }) {
  return <p>Count: {count}</p>;
}

function Controls({ onIncrement }) {
  return <button onClick={onIncrement}>+1</button>;
}
```

> **Data flows down** via props. **Events flow up** via handler functions passed as props.
>
> Note: `onIncrement={() => setCount(n => n + 1)}` — wrapped in an arrow function so it registers as a function reference, not an immediate call.

---

## What are Hooks?

Hooks are special functions that let you use React features inside a component. Every hook starts with the word `use`.

```js
useState()      // remember a value between renders
useEffect()     // run code when something changes
useRef()        // reference a DOM element directly
useContext()    // read shared data without passing props
```

You've been using `useState` this whole time — that's a hook. The others follow the same pattern: call them at the top of your component, and React handles the rest.

> **Rules of Hooks:**
> - Only call hooks at the **top level** of a component — not inside loops or conditions
> - Only call them inside **React components**

The full list of built-in hooks lives in the React docs under [Built-in React Hooks](https://react.dev/reference/react) — a useful reference as you build more complex components.