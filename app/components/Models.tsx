import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function Models() {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col items-center">

      {/* Header */}
      <h1 className="lg:text-6xl text-3xl sm:text-5xl font-normal text-gray-900 text-center max-w-5xl">
        Engagement Model for Website
      </h1>
      <p className="text-gray-500 text-sm text-center lg:text-lg  max-w-5xl mt-7 leading-relaxed">
        Woxro provides expert 24/7 IT support tailored for your website development needs. Our dedicated service desk ensures fast, knowledgeable assistance, resolving technical issues efficiently to keep your website running seamlessly.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 w-full max-w-5xl">

        {/* Card 1 */}
        <div className="border border-gray-200 p-6 flex flex-col justify-between min-h-[520px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Dedicated Team</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Expand your team with remote professionals tailored to your specific requirements. Get the right skill set to match your project needs.
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              {["Hourly payment structure.", "Fast resource replacement when needed.", "Daily commitment to your project.", "Guaranteed number of work hours.", "Full-time or part-time team availability.", "Seamless integration with your in-house team."].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <FaCheckCircle className="text-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="#" className="group flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-4 mt-8 transition-all duration-300 hover:shadow-lg">
            Get a Quote <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 p-6 flex flex-col justify-between min-h-[520px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Time and Material</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ideal for projects needing continuous updates. Share your scope, and we&apos;ll create a phased plan to adapt to your changing needs.
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              {["Flexibility to adjust the scope as necessary.", "Pay for the work completed.", "Deliverables provided on a sprint basis.", "Excellent cost management.", "Ideal for long-term or evolving projects.", "Transparency in project progress and budget."].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <FaCheckCircle className="text-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="#" className="group flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-4 mt-8 transition-all duration-300 hover:shadow-lg">
            Get a Quote <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 p-6 flex flex-col justify-between min-h-[520px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Fixed Price</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Choose this model when your project has a clearly defined scope and timeline. Share the initial project details, and we&apos;ll create a phased plan with specific milestones.
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              {["Clearly defined scope of work.", "Work delivered based on milestones.", "Fixed timeline for project completion.", "Pay upon achieving specific targets.", "Ideal for short-term or one-off projects.", "Predictable budgeting and costs."].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <FaCheckCircle className="text-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="#" className="group flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-4 mt-8 transition-all duration-300 hover:shadow-lg">
            Get a Quote <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
