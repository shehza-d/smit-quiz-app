import CourseCard from "../components/course/CourseCard";
import { ICourse } from "../types";

export default function Courses() {
  const name = "Shehzad Iqbal";

  const courses: ICourse[] = [
    { name: "Python", subjects: 1 },
    { name: "Web and App Crash Course", subjects: 2 },
    { name: "Web & App Development (Madaris)", subjects: 3 },
    { name: "TypeScript", subjects: 1 },
    { name: "Web And Mobile Hybrid App Development", subjects: 4 },
    { name: "Generative AI & Chatbot Batch-3", subjects: 2 },
    { name: "Java", subjects: 1 },
  ];

  return (
    <section>
      <h2 className="text-3xl text-primary ml:text-5xl">Hi, {name} 👋</h2>
      <p className="my-4 text-lg">Select your course below to take a quiz.</p>
      <div className="grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 md:grid-cols-3 ">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </section>
  );
}
