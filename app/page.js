import CourseCard from "/components/CourseCard.js";
import { Footer } from "/components/Footer.js";
import Navbar from "/components/Navbar.js";
import { SearchBar } from "/components/SearchBar.js";
import StatsCard from "/components/StatsCard.js";
import { TaskCard } from "/components/TaskCard.js";
import TaskFilters from "/components/TaskFilters.js";
import { TaskForm } from "/components/TaskForm.js"
import TaskProviderP from "/components/TaskProvider.js"
import { TaskProvider } from "/context/TaskContext.js"
import RootError from "./tasks/error.js"
import { RootLayout } from "./tasks/layout.js"
import RootLoading from "./tasks/loading.js"
import { NotFound } from "./tasks/not-found.js"



export default function HomePage() {
  return (
    <>
      <CourseCard />
      <Footer />
      <Navbar />
      <SearchBar />
      <StatsCard />
      <TaskCard />
      <TaskFilters />
      <TaskForm />
      <TaskProviderP />
      <TaskProvider />
      <RootError />
      <RootLayout />
      <RootLoading />
      <NotFound />
      <div className="container">
        <h1 className="page-title">StudentFlow Dashboard</h1>
        <p className="page-subtitle">
          Welcome to your capstone project! Build your dashboard following the Student Guide.
        </p>
      </div>
    </>
  );
}
