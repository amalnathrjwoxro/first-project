import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Corporate Website",
    description:
      "We build high-quality, scalable corporate websites that drive growth. Our team delivers custom solutions focused on user experience, responsiveness, and strong security to ensure success.",
  },
  {
    title: "Interactive Website",
    description:
      "Interactive website development improves user experience with engaging elements that respond to user actions. This helps users navigate websites or applications more effectively, intuitively, and enjoyably.",
  },
  {
    title: "Personal Blogs",
    description:
      "Create a beautiful, engaging blog with user-friendly templates, flexible layouts, and custom backgrounds. Share stories easily and track performance through built-in analytics and insights.",
  },
  {
    title: "Interface Development",
    description:
      "Designing responsive user interfaces involves thoughtful use of typography, layout, and interaction. The goal is to ensure users can engage with systems effectively, efficiently, and with minimal friction.",
  },
  {
    title: "CMS Integration",
    description:
      "CMS integration streamlines content updates and site management. It provides easy control, flexible customization, and ensures a smooth, consistent experience for both editors and users.",
  },
];

export default function SpecComp() {
  return (
 <div className="px-8 md:px-20 lg:px-40 py-16">
  {/* First row — 3 columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 place-items-center">
    {services.slice(0, 3).map((service) => (
      <div key={service.title} className="flex flex-col gap-3 max-w-sm w-full">
        <h3 className="text-gray-900 text-lg ">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-700 text-sm font-medium mt-1 hover:gap-3 transition-all"
        >
          Explore Now <FaArrowRight className="text-xs" />
        </a>
      </div>
    ))}
  </div>

  {/* Second row — 2 columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
    {services.slice(3).map((service) => (
      <div key={service.title} className="flex flex-col gap-3 max-w-sm w-full">
        <h3 className="text-gray-900 text-lg ">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
        <a
          href="#"
          className="flex items-center gap-2 text-blue-700 text-sm font-medium mt-1 hover:gap-3 transition-all"
        >
          Explore Now <FaArrowRight className="text-xs" />
        </a>
      </div>
    ))}
  </div>
</div>
  );
}