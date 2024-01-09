import { ICourse } from "../../types";

export default function CourseCard({ course }: { course: ICourse }) {
  return (
    <div className="flex min-h-[12rem] flex-col justify-between rounded-md border border-gray-400 p-4 shadow-md hover:shadow-xl duration-300 hover:transition-transform">
      <div>
        <h4 className="mb-2 text-2xl text-slate-800">{course.name}</h4>
        <p className="text-slate-500">{course.subjects} Subjects</p>
      </div>
      <button className="border-primary hover:bg-primary border py-1 duration-300 hover:transition-transform">
        Join
      </button>
    </div>
  );
}
