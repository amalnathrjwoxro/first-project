import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeHero() {
  return (
    <div className="mt-5 w-full">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[880px] overflow-hidden">
        <Image
          src="/images/Website.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 sm:py-6 md:py-10 lg:py-20 px-4 sm:px-8 md:px-20 lg:px-40">
          
          {/* Top: Breadcrumb + Subheading */}
          <div className="flex flex-col gap-1 sm:gap-2">
            {/* Breadcrumb */}
            <div
              id="Bread"
              className="flex items-center gap-1 text-gray-300 text-xs sm:text-sm opacity-45"
            >
              <FiHome className="text-xs sm:text-sm md:text-base" />
              <MdKeyboardArrowRight className="text-sm sm:text-base md:text-lg" />
              <span>Services</span>
              <MdKeyboardArrowRight className="text-sm sm:text-base md:text-lg" />
              <span>Website</span>
            </div>

            {/* Subheading */}
            <div className="flex flex-col gap-0.5 mt-1 sm:mt-2">
              <p
                style={{ fontWeight: 100, opacity: 0.85 }}
                className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
              >
                Bespoke website development to seamlessly foster growth.
              </p>
              <p
                style={{ fontWeight: 100, opacity: 0.85 }}
                className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
              >
                We put your vision online.
              </p>
            </div>
          </div>

          {/* Bottom: Main Heading + Description */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-white  text-2xl sm:text-4xl md:text-5xl lg:text-8xl leading-tight">
              Website Development
            </h1>
            <p
              style={{ fontWeight: 100, opacity: 0.75 }}
              className="text-white text-xs sm:text-sm md:text-sm lg:text-lg max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed"
            >
              In today's market, every business needs a website that reflects
              its goals. As a website development company in India, we build
              sites that leave a lasting impression.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}