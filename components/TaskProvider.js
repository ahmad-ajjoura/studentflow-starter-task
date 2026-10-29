"use client";

import { TaskProvider as Provider } from "@/context/TaskContext";

export default function TaskProviderP({ children }) {
  return <Provider>{children}</Provider>;
}
