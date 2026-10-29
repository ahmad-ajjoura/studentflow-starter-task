export function Footer({ course }) {
  // TODO: Build your Footer component here
  return (
    <footer className="footer-wrapper">
      <div>
        <h2>{course.title}</h2>
        <p>The all-in-one learning workspace and task tracker for modern frontend development students</p>
        <h2>Navigation</h2>
        <link>Dashboard</link>
        <link>All Courses</link>
        <link>Task Manager</link>
        <link>Learning Resources</link>
        <h2>Capstone Project</h2>
        <h2>Next.js 15+ App Router</h2>
        <h2>React 19 & Context API</h2>
        <h2>Vanilla CSS System</h2>
        <h2>LocalStorage Sync</h2>
      </div>
      <div className="container footer-bottom">
        <div><p>Built for Students with ❤️</p></div>
        <p>© {new Date().getFullYear()} StudentFlow. Frontend Web Development Final Project.</p>
      </div>
    </footer>
  );
}
