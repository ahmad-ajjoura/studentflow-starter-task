import Link from "next/link";


export default function CourseCard({ course }) {
  // TODO: Build your CourseCard component here
  return (
    <div className="course-card">
      <div>
        <p>{course.category}</p>
        <span>{course.person}</span>
        <p>{course.text}</p>
        <h2>{course.title}</h2>
        <span>{course.time}</span>
        <span>{course.level}</span>
      </div>
      {/* TODO: Display course icon, category, title, description, instructor, and link to /courses/[courseId] */}
      <Link to={`/courses/${course. id}`}>
      <button>View Course & Tasks → </button>
      </Link>
    </div>
  );
}
