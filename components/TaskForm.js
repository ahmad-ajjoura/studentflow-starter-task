"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { generateId } from "@/lib/helpers";

export function TaskForm({ courses = [] }) {

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [courseId, setCourseId] = useState()
  const [dueDate, setDueDate] = useState()
  const [priority, setPriority] = useState()
  const [error, setError] = useState()

  function HandleSubmit(e) {
    e.preventdefault()

    if (!title) {
      setError("⚠️ Please enter a task title. ")
    }
    if (!dueDate) {
      setError("⚠️ Please choose a due date.")
    }
    addTask({
      title,
      description,
      courseId,
      dueDate,
      priority
    })
    navigate('/tasks')

    //SUBMIT BUTTON
    return (
      <>
        <form onSubmit={HandleSubmitBtn}>

          <button type="Submit">Save Task</button>
        </form>

 //TITLE INPUT
        <label>Task Title *</label>
        <input
          type="text"
          value={title}
          onChange={(t) => setTitle(t.target.value)}
          placeHolder="e.g. Build responsive navbar"
        />

//DESCRIPTION
        <label>Description (optional)</label>
        <input
          type="text"
          value={description}
          onChange={(d) => setDescription(d.target.value)}
          placeHolder="Add any instructions, links, or notes..."
        />

//courseId
        <label>Course</label>
        <select
          value={courseId}
          onChange={(c) => setCourseId(c.target.value)}
        >
          <option value="html-css">HTML5 & Modern CSS</option>
          <option value="javascript">JavaScript Core & ES6+</option>
          <option value="react">React 19 Essentials</option>
          <option value="nextjs">Next.js 15 & App Router</option>
        </select>


//DueDate
        <label>Due Date *</label>
        <input
          text="date"
          value={dueDate}
          onChange={(a) => setDueDate(a.target.value)}
          placeHolder="mm/dd/yyyy"
        ></input>

//PRIORITY
        <label>priority</label>
        <select
          value={priority}
          onChange={(p) => setPriority(a.target.value)}
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>

        </select>
      </>
    );
  }






  // TODO: Build your controlled TaskForm component here
  // 1. Create state for title, description, courseId, dueDate, priority, error
  // 2. Validate inputs on submit
  // 3. Call addTask() and redirect to '/tasks'

  return (
    <form className="task-form card">
      {/* TODO: Add title input, description textarea, course select, dueDate input, priority select, and submit button */}
    </form>
  );
}
