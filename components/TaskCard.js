"use client";

import Link from "next/link";
import { formatDate, getPriorityClass, isOverdue } from "@/lib/helpers";

export function TaskCard({ task, courses = [], onToggle, onDelete }) {
  // TODO: Build your TaskCard component here
  return (

    <div className="task-card">
      {/* TODO: Add completion checkbox, title link, tags, priority badge, and delete button */}

//CHECKBOX
      <input>
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      </input>

//TITLE LINK
      <Link href={`/tasks/${taskId}`}> {task.title}</Link>

//TAGS
      {task.tag.map((tag) => (<span key={tag}>{tag}</span>))}

//priority
      <span>{priority}</span>

//delete
      <button onClick={() => delete (task.id)}></button>
    </div>
  );
}
