"use client";
import { useState } from "react"

export function SearchBar({ value, onChange, placeholder = "Search..." }) {
  const [search, setSearch] = useState = ""
  // TODO: Build your controlled SearchBar component here
  return (
    <div className="search-bar-wrapper">
      <span className="search-icon">🔍</span>
      {/* TODO: Add input connected to value and onChange */}
      <input>
        type="text"
        value={value}
        placeHolder="Search courses, instructors, topics..."
        onChange{(a) => setSearch(a.target.value)}
      </input>
    </div>
  );
}
