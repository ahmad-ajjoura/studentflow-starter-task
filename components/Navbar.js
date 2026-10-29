"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // TODO: Build your Navbar component here
  return (
    <header className="navbar-wrapper">
      <div className="container navbar-inner">
        <Link href="/" className="logo-brand">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">Student<span className="logo-accent">Flow</span></span>
        </Link>
        <div>
  <Link href="/">Dashboard</Link>
  <Link href="/courses">Cources</Link>
  <Link href="/tasks">Tasks</Link>
  <Link href="/resources">Resources</Link>
  <Link href="/tasks/new">+ New Task</Link>
  <Link href="/tasks/new">+ Create New Task</Link>
</div>
        {/* TODO: Add navigation links for '/', '/courses', '/tasks', '/resources' and a link button for '/tasks/new' */}
      </div>
    </header>
  );
}