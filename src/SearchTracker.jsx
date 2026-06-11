import React, { useState, useRef, useEffect } from "react";

function SearchTracker() {
  const [search, setSearch] = useState("");
  const previousSearch = useRef("");

  useEffect(() => {
    const timer = setTimeout(() => {
      previousSearch.current = search;
    }, 0);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Previous Search Tracker</h2>

      <input
        type="text"
        placeholder="Enter search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Current Search: {search}</h3>
      <h3>Previous Search: {previousSearch.current}</h3>
    </div>
  );
}

export default SearchTracker;