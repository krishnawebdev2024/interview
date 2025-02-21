/* 🔹 useCallback Hook in React with TypeScript
useCallback is a React hook that memoizes a function so that it is only re-created when its dependencies change. This improves performance by preventing unnecessary function re-creations on every render. */

const memoizedFunction = useCallback(() => {
  // Function logic
}, [dependencies]);

/*   The function is re-created only if the dependencies change.
If the dependency array [] is empty, the function reference remains the same throughout the component’s lifecycle. */
