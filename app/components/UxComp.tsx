export default function SpecComp() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-6 text-center bg-white">
      {/* Top heading */}
      <h2
        style={{ fontWeight: 300 }}
        className="text-2xl sm:text-3xl md:text-7xl text-gray-900 mb-6"
      >
        It's All About An Amazing
      </h2>

      {/* Giant UX with image clipping */}
      <div
        style={{
          fontSize: "clamp(10rem, 25vw, 27rem)",
          fontWeight: 900,
          lineHeight: 1,
          backgroundImage: "url('/images/uximage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          backgroundColor: "#111",
        }}
      >
        UX
      </div>

      {/* Description */}
      <p
        style={{ fontWeight: 300 }}
        className="text-gray-500 text-sm sm:text-base lg:w-200 leading-relaxed mt-10"
      >
        Our goal is to build lasting brands that connect deeply with your
        audience and stand out across industries. By combining strategy, design,
        and development, we help you strengthen customer relationships through
        engaging websites, apps, and digital systems.
      </p>

      {/* Bottom heading */}
      <h2
        style={{ fontWeight: 300 }}
        className="text-2xl sm:text-3xl md:text-7xl text-gray-900 mb-6 mt-40"
      >
        Enhancing Digital Experiences with <br className="hidden md:block" />
        <span className="lg:mt-4 block">Expert Web Development Company</span>
      </h2>

      <p
        style={{ fontWeight: 300 }}
        className="text-gray-500 text-sm sm:text-base lg:w-300 leading-relaxed mt-10"
      >
        With the ever-increasing competition in the web development and
        eCommerce sectors today, it can be challenging to find a web development
        firm that matches your specific vision for your business. At Woxro, We
        stand as one of most trusted{" "}
        <span className="underline underline-offset-4">
          web development companies in India
        </span>{" "}
        dedicated to understanding your brand and providing you with the
        solutions that are tailored to your website's specific priorities, thus
        making your brand stand out from the rest.
      </p>
    </div>
  );
}
