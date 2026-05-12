import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeHero() {
  return (
    <div className=" w-full">
      {/* ── Mobile layout (no image) ── */}
      <div className="lg:hidden bg-black flex flex-col px-5 sm:px-8 py-10 sm:py-14 md:py-18 gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <FiHome className="text-white text-sm" />
          <MdKeyboardArrowRight className="text-gray-600" />
          <span className="text-gray-500">Services</span>
          <MdKeyboardArrowRight className="text-gray-600" />
          <span className="text-white font-medium">Website</span>
        </div>

        {/* Subheading */}
        <div className="flex flex-col gap-1 border-l-2 border-white pl-3">
          <p
            style={{ fontWeight: 100 }}
            className="text-gray-400 text-xs sm:text-sm tracking-wide"
          >
            Bespoke website development to seamlessly foster growth.
          </p>
          <p
            style={{ fontWeight: 100 }}
            className="text-gray-400 text-xs sm:text-sm tracking-wide"
          >
            We put your vision online.
          </p>
        </div>

        {/* Main Heading */}
        <div>
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1 block">
            Our Services
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-semibold leading-tight">
            Website <br />
            Development
          </h1>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-white rounded-full" />

        {/* Description */}
        <p
          style={{ fontWeight: 100 }}
          className="text-gray-400 text-sm sm:text-base max-w-sm leading-relaxed"
        >
          In today&apos;s market, every business needs a website that reflects its
          goals. As a website development company in India, we build sites that
          leave a lasting impression.
        </p>
      </div>

      {/* ── Desktop layout (with image) ── */}
      <div className="hidden lg:block group relative w-full h-[880px] overflow-hidden">
        <Image
          src="/images/Website.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-between py-20 px-40">
          {/* Top: Breadcrumb + Subheading */}
          <div className="flex flex-col gap-2">
            <div
              id="Bread"
              className="flex items-center gap-1 text-gray-300 text-sm opacity-45"
            >
              <FiHome className="text-base" />
              <MdKeyboardArrowRight className="text-lg" />
              <span>Services</span>
              <MdKeyboardArrowRight className="text-lg" />
              <span>Website</span>
            </div>

            <div className="flex flex-col gap-0.5 mt-2">
              <p
                style={{ fontWeight: 100, opacity: 0.80 }}
                className="text-white text-lg"
              >
                Bespoke website development to seamlessly foster growth.
              </p>
              <p
                style={{ fontWeight: 100, opacity: 0.80 }}
                className="text-white text-lg"
              >
                We put your vision online.
              </p>
            </div>
          </div>

          {/* Bottom: Main Heading + Description */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-7xl leading-tight">
              Website Development
            </h1>
            <p
              style={{ fontWeight: 100, opacity: 0.75 }}
              className="text-white text-lg max-w-210 leading-relaxed"
            >
              In today&apos;s market, every business needs a website that reflects
              its goals. As a website development company in India, we build
              sites that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
