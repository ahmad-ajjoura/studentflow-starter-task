import {useState} from "react"

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const filteredCourseList = courseList.filter((course)=> course.title.toLowerCase().includes(search.toLowerCase()))

  const courseList = [
  {id : 1 , title : "HTML5 & Modern CSS", category : "FRONTEND", text : "Master the foundations of the web: semantic HTML, responsive web design, Flexbox, CSS Grid, and modern CSS variables.", person: "👤 Sarah Jenkins", time : "4 weeks", level:"📊 Beginner"},
  {id : 2 , title : "JavaScript Core & Es6+", category : "JAVASCRIPT", text: "Deep dive into modern JavaScript: DOM manipulation, asyncronous programming, Promices, ES Modules, and functional concepts.", person: "👤 Alex Chen", time : "5 weeks", level:"📊 Intermediate"},
  {id : 3 , title : "React 19 Essentials", category : "REACT", text: "Build dynamic user interfaces with React: Components, Props, State, Hooks (useState, useEffect, useRef, useContext), and custom hooks.", person: "👤 Michael Ross", time : "6 weeks", level:"📊 Intermediate"},
  {id : 4 , title : "Next.js 15+ & App Router", category : "NEXTJS", text: "Learn modern full-stack frontend development: App Router, Server vs Client Components, dynamic routes, API routes, and deployment.", person: "👤 Elena Rostova", time : "5 weeks", level:"📊 Advanced"}
];

  return (
    <div>
    <div className="container">
      <h1 className="page-title">Course Catalog</h1>
      {/* TODO: Implement Course list, SearchBar, and Category Filters */}

{filteredCourseList.map((course) => (
<div key={course.id}>
<div>{course.category}</div>
<h1>{course.title}</h1>
<p>{course.text}</p>
<div>
  <span>{course.person}</span>
  <span>{course.time}</span>
  <span>{course.level}</span>
</div>

</div>  ))}

<input
type = "text"
placeHolder = "Search courses, instructors, topics..."
value = {search}
onChange={(e) => setSearch(e.target.value)} /> 
</div>
</div>
  );
}

