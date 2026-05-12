import Image from "next/image";

export default function PhasesComp() {
  return (
    <div className="flex flex-col lg:ms-50 items-center lg:gap-17 gap-10 px-5 sm:px-6 md:px-16 py-14 sm:py-16">
      {/* Phase 1 */}
      <div className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-5xl transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative lg:w-39 lg:h-39 w-36 h-36 sm:w-44 sm:h-44">
            <Image
              src="/images/onboard.png"
              alt="onboard image"
              fill
              sizes="(min-width: 1024px) 156px, (min-width: 640px) 176px, 144px"
              className="object-cover object-center"
            />
          </div>
          <div className="w-px h-40 bg-gray-300 mt-15 hidden  sm:block" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 text-sm font-medium">Phase 1</span>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl text-gray-900"
          >
            Onboarding & Kick-off
          </h2>
          <p
            style={{ fontWeight: 300 }}
            className="text-gray-500 text-sm leading-relaxed w-full max-w-xl lg:w-200"
          >
            To ensure we&apos;re on the same page, we like to begin with a meeting to
            discuss the processes involved in the development of the website,
            and a general roadmap to lay out the timeline of the project. Here,
            you will meet your project manager who will be available to discuss
            the goals and aims of your website.
          </p>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-5xl transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative lg:w-39 lg:h-55 w-39 h-55 ">
            <Image
              src="/images/discover.png"
              alt="discover image"
              fill
              sizes="156px"
              className="object-cover object-center"
            />
          </div>
          <div className="w-px h-40 bg-gray-300 mt-15 hidden  sm:block" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 text-sm font-medium">Phase 2</span>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl text-gray-900"
          >
            Discovery & Plan
          </h2>
          <p
            style={{ fontWeight: 300 }}
            className="text-gray-500 text-sm leading-relaxed w-full max-w-xl lg:w-200"
          >
            In this phase, a thorough inspection of your business, requirements
            and goals is done through collaborative meetings. We assess the
            scope of the project, your target audience, SEO strategies and
            future prospects for your business. Based on this, our UX and UI
            teams will draft wireframes and detailed timelines according to your
            preference. Resources and budgets are also discussed.
          </p>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-5xl transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44">
            <Image
              src="/images/uiuxdesign.png"
              alt="uiux image"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-cover object-center"
            />
          </div>
          <div className="w-px h-40 bg-gray-300 mt-15 hidden  sm:block" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 text-sm font-medium">Phase 3</span>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl text-gray-900"
          >
            UI & UX Design
          </h2>
          <p
            style={{ fontWeight: 300 }}
            className="text-gray-500 text-sm leading-relaxed w-full max-w-xl lg:w-200"
          >
            Once you sign off, we move onto designing the website. Our designers
            create interesting layouts and visual designs using
            industry-standard tools like Sketch and InVision. During this phase,
            we will be in constant communication with you to receive feedback on
            your personal design choices for the website.
          </p>
        </div>
      </div>

      {/* Phase 4 */}
      <div className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-5xl transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44">
            <Image
              src="/images/implement.png"
              alt="implement image"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-cover object-center"
            />
          </div>
          <div className="w-px h-40 bg-gray-300 mt-15 hidden  sm:block" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 text-sm font-medium">Phase 4</span>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl text-gray-900"
          >
            Implementation
          </h2>
          <p
            style={{ fontWeight: 300 }}
            className="text-gray-500 text-sm leading-relaxed w-full max-w-xl lg:w-200"
          >
            Now it’s time to turn designs into a fully functioning website. Our
            development team prepares the front and back-end processes and
            begins optimizing it for performance. We integrate several essential
            features to ensure the smooth functioning of all aspect of the site.
            We also ensure the optimization of the website to various devices
            and operating systems thanks to our promise of quality assurance
            (QA).
          </p>
        </div>
      </div>

      {/* Phase 5 */}
      <div className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-5xl transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44">
            <Image
              src="/images/deploy.png"
              alt="deploy image"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-cover object-center"
            />
          </div>
          <div className="w-px h-40 bg-gray-300 mt-15 hidden  sm:block" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 text-sm font-medium">Phase 5</span>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl text-gray-900"
          >
            Deploy (Going-live)
          </h2>
          <p
            style={{ fontWeight: 300 }}
            className="text-gray-500 text-sm leading-relaxed w-full max-w-xl lg:w-200"
          >
            After all the developments and tests, we move to the publishing
            phase of the website. This includes configuration of servers and web
            browsers and any last minute fixes. We monitor the website launch
            carefully to make sure there are no unforeseen issues with user
            experience once the site is running.
          </p>
        </div>
      </div>

      {/* Phase 6 — no connector line after last item */}
      <div className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full max-w-2xl lg:max-w-5xl transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44">
            <Image
              src="/images/accelerate.png"
              alt="accelerate image"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 text-sm font-medium">Phase 6</span>
          <h2
            style={{ fontWeight: 300 }}
            className="text-2xl sm:text-3xl text-gray-900"
          >
            Accelerate
          </h2>
          <p
            style={{ fontWeight: 300 }}
            className="text-gray-500 text-sm leading-relaxed w-full max-w-xl lg:w-200"
          >
            Our dedication to your website doesn’t stop with the launch. We will
            be available to help you with any maintenance issues, performance
            enhancements, new features, customer engagements, or anything else
            you may need. We’re always ready to help.
          </p>
        </div>
      </div>
    </div>
  );
}
