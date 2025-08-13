// Info:
// We use a custom hook:
// - to create a utility function
// - to make it reusable
// For example, to create a dark theme toggle
// Let's say we have a button that resets in two components (ThemeToggle.jsx and ItemList.jsx)

import { useState, useEffect } from "react";

export function useLocaleStorage() {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [key, value]);
}
