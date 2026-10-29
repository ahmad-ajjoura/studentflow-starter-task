"use client";
import {useState} from "react"
export default function TaskFilters({
  
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  courseFilter,
  setCourseFilter,
  courses = [],
  onReset,
})
 {
  // TODO: Build your Status, Priority, and Course filter UI here
  return (
    <div className="filters-container">
      {/* TODO: Add filter buttons & select dropdowns */}

      //status
      <select
      value={statusFilter}
      onChange={(a)=> setStatusFilter(a.target.value)}
      >
        <option>All</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>

      //priority
      <select>
        <option>All Priorities</option>
        <option>High Priority</option>
        <option>Medium Priority</option> 
        <option>Low Priority</option>
      </select>

      //course filter UI
      <select>
        <option>All Cources</option>
        <option>HTML5 & Modern CSS</option>
        <option>JavaScript Core & ES6+ </option>
        <option>React 19 Essentials</option>
        <option>Next.js 15+ & App Router</option>
      </select>
    </div>
  );
}
