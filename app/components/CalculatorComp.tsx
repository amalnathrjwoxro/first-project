import Link from "next/link";

export default function CalculatorComp() {
  return (
    <div className="px-5 py-8 sm:px-6 md:px-16 lg:px-24">
      <div className="relative mx-auto flex min-h-[340px] w-full items-center overflow-hidden rounded-sm bg-[#f2f0ed] px-5 py-10 sm:px-8 sm:py-12 md:px-16">
        {/* Left content */}
        <div className="z-10 flex max-w-lg flex-col gap-4">
          <span className="text-sm text-red-400">
            Get a Quick Website Cost Estimate Now!
          </span>
          <h2 className="text-3xl font-normal leading-tight text-gray-900 sm:text-5xl lg:w-200">
            How Much Should You Pay for Website Development?
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            We provide flexible pricing for custom web development in India,
            based on the scope of your project.
          </p>
          <Link
            href="#"
            className="group mt-2 flex w-full max-w-56 items-center justify-between bg-black px-6 py-5 text-sm text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
          >
            Calculate Cost{" "}
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Right - blurred gradient blobs, hidden on small screens */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 md:block">
          {/* Top blob */}
          <div className="absolute right-[140px] top-[20px] h-52 w-52 rounded-full bg-orange-700 opacity-70 blur-[90px]" />
          {/* Bottom blob */}
          <div className="absolute bottom-[10px] right-[100px] h-44 w-44 rounded-full bg-orange-600 opacity-65 blur-[80px]" />
        </div>
      </div>
    </div>
  );
}
