import Image from "next/image";

export default function PhasesComp() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mt-20">
        <div className="flex flex-col sm:flex-row items-start gap-8 px-6 md:px-16 py-10">
          {/* Left*/}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0">
            <Image
              src="/images/onboard.png"
              alt="onboard image"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right */}
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
              className="text-gray-500 text-sm leading-relaxed max-w-xl"
            >
              To ensure we're on the same page, we like to begin with a meeting
              to discuss the processes involved in the development of the
              website, and a general roadmap to lay out the timeline of the
              project. Here, you will meet your project manager who will be
              available to discuss the goals and aims of your website.
            </p>
          </div>
        </div>

        <div></div>
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-8 px-6 md:px-16 py-10">
            {/* Left*/}
            <div className="relative w-46 h-36 sm:w-43 sm:h-64 flex-shrink-0">
              <Image
                src="/images/discover.png"
                alt="onboard image"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right */}
            <div className="flex flex-col gap-2">
              <span className="text-blue-600 text-sm font-medium">Phase 2</span>
              <h2
                style={{ fontWeight: 300 }}
                className="text-2xl sm:text-3xl text-gray-900"
              >
                Onboarding & Kick-off
              </h2>
              <p
                style={{ fontWeight: 300 }}
                className="text-gray-500 text-sm leading-relaxed max-w-xl"
              >
                To ensure we're on the same page, we like to begin with a
                meeting to discuss the processes involved in the development of
                the website, and a general roadmap to lay out the timeline of
                the project. Here, you will meet your project manager who will
                be available to discuss the goals and aims of your website.
              </p>
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-8 px-6 md:px-16 py-10">
            {/* Left*/}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0">
              <Image
                src="/images/discover.png"
                alt="onboard image"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right */}
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
                className="text-gray-500 text-sm leading-relaxed max-w-xl"
              >
                To ensure we're on the same page, we like to begin with a
                meeting to discuss the processes involved in the development of
                the website, and a general roadmap to lay out the timeline of
                the project. Here, you will meet your project manager who will
                be available to discuss the goals and aims of your website.
              </p>
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-8 px-6 md:px-16 py-10">
            {/* Left*/}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0">
              <Image
                src="/images/onboard.png"
                alt="onboard image"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right */}
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
                className="text-gray-500 text-sm leading-relaxed max-w-xl"
              >
                To ensure we're on the same page, we like to begin with a
                meeting to discuss the processes involved in the development of
                the website, and a general roadmap to lay out the timeline of
                the project. Here, you will meet your project manager who will
                be available to discuss the goals and aims of your website.
              </p>
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-8 px-6 md:px-16 py-10">
            {/* Left*/}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0">
              <Image
                src="/images/onboard.png"
                alt="onboard image"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right */}
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
                className="text-gray-500 text-sm leading-relaxed max-w-xl"
              >
                To ensure we're on the same page, we like to begin with a
                meeting to discuss the processes involved in the development of
                the website, and a general roadmap to lay out the timeline of
                the project. Here, you will meet your project manager who will
                be available to discuss the goals and aims of your website.
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
