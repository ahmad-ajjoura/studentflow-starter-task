import { useEffect, useState } from "react"
export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;
  const [details, setDetails] = useState(null)
  const [topics, setTopics] = useState([])
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    fetch(details, tasks)
      .then((response) => response.json())
      .then((data) => {
        setResouces()
        setLoading()
        setSuccess()
      })
  })
    .catch((error) => {
      setLoading()
      setError()
      setSuccess()
    })

  return (
    <div className="container">
      <h1 className="page-title">Course Detail: {courseId}</h1>
      {/* TODO: Fetch course details, topics, and course-specific tasks with progress bar */}
    </div>
  );
} 
