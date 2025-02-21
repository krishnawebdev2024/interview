/* Key Things to Remember
✔️ useRef does not trigger re-renders when updated.
✔️ It is commonly used for accessing DOM elements and storing mutable values across renders.
✔️ The value persists across renders but does not cause re-renders when modified.
✔️ You should use useRef only when you don’t need state updates (otherwise, useState is preferred).
✔️ When accessing DOM elements, useRef should be initialized with null and assigned the correct type (HTMLElement | null). */
/* ---------------------------InputFocus------------------------------------- */

import { useRef, useEffect } from "react";

export const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(
    null
  ); /* ///////////////////////// */

  useEffect(() => {
    inputRef.current?.focus(); // Focus input on mount
  }, []);

  return <input ref={inputRef} type="text" />;
};

/* --------------Storing Mutable Values Without Re-Rendering------------------ */

import { useRef } from "react";

export const Counter = () => {
  const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current); // Logs updated value, but does not re-render
  };

  return <button onClick={increment}>Increment</button>;
};

/* --------------Keeping Track of Previous State Value------------------ */

import { useState, useRef, useEffect } from "react";

export const PreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
