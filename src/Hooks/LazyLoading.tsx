/* Key Things to Remember
✔️ React.lazy() is used for lazy-loading components.
✔️ Must be wrapped in <Suspense> to handle the loading state.
✔️ Route-based lazy loading reduces initial bundle size.
✔️ Lazy loading images improves performance with loading="lazy".
✔️ Use IntersectionObserver for dynamic content loading (e.g., infinite scrolling).
✔️ Helps reduce initial load time and improve performance.
 */

/* ---------✅ Lazy Loading with Routes (react-router-dom)-------------- */

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

/* ---------✅ Example of Lazy Loading a Component-------------- */

import React, { Suspense, lazy } from "react";

// Lazy import the component
const LazyComponent = lazy(() => import("./LazyComponent"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
};

export default App;

/* ------------------------Lazy Load Large Data with Intersection Observer
Loads components only when they are in the viewport.
Useful for infinite scrolling or loading heavy components dynamically.
✅ Example of Lazy Loading with Intersection Observer----------------- */
import { useEffect, useRef, useState } from "react";

const LazyComponent = () => {
  return <div>Heavy Component Loaded</div>;
};

const LazyLoadWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>{isVisible ? <LazyComponent /> : <p>Loading...</p>}</div>
  );
};

/* To achieve lazy loading where components only load when they come into the viewport (like scrolling down to see the About component), you'd need to use something like IntersectionObserver or react-lazyload. */

import { useState, useEffect, useRef } from "react";
import { lazy, Suspense } from "react";

// Dynamically load the components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const LazyLoadWrapper = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsAboutVisible(true);
      }
    });

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Suspense fallback={<p>Loading Home...</p>}>
        <Home />
      </Suspense>

      <div ref={aboutRef}>
        {isAboutVisible && (
          <Suspense fallback={<p>Loading About...</p>}>
            <About />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default LazyLoadWrapper;
