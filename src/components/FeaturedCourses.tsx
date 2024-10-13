'use client'
import courseData from "@/data/code_courses.json"
import { BackgroundGradient} from "./ui/background-gradient"
import Link from "next/link"



interface Course{
  "id" : number,
        "title" : string,
        "slug" : string,
        "description" :string,
        "price" :number,
        "instructor" :string,
        "isFeatured" : boolean,
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course : Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-slate-1">
      <div>
      <div className="text-center">
        <h1 className="text-base text-teal-600 font-semibold tracking-wide sm:text-4xl pt-8">Featured Courses</h1>
        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">Learn With Fun</p>
      </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-space-around">
          {featuredCourses.map((course : Course) => (
          <div key={course.id} className="flex justify-center">
          <BackgroundGradient className="flex flex-col rounded-[22px] bg-zin-900 overflow-hidden h-full max-w-sm">
          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
          <p className="text-lg sm:text-xl mt-4 mb-2 text-neutral-200">{course.title}</p>{""}
          <p className="text-sm text-slate-1 font-bold flex-grow italic">{course.description}</p>{""}
          <Link href={`/course/${course.slug}`}>
            <span className="text-teal-500 hover:underline">
              Learn More
            </span>
          </Link>
          </div>
          
          </BackgroundGradient>
          </div>

        ))}
        </div>
      </div>

      <div>
      <p className="text-slate-1">a <br />a</p>
      </div>


      <div className="px-6 py-3 rounded-lg w-48 mr-auto ml-auto bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold hover:from-teal-600 hover:to-teal-800 transition duration-300 text-center" >
        <Link href="#">
        View All Courses
        </Link>
      </div>
    </div>

  )
}

export default FeaturedCourses;
