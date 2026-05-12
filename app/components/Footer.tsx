import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerColumns = [
  {
    title: "Explore",
    links: [
      "Partnership",
      "Outcomes",
      "News Room",
      "E-Magazine",
      "Insights",
      "Woxhost 24/7",
      "IJEA Foundation",
      "Montay",
      "Containex 360",
      "FAQs",
    ],
  },
  {
    title: "Support",
    links: [
      "Support Services",
      "Support Ticket",
      "Download Brochure",
      "Connect with CEO",
      "Terms & Conditions",
      "Privacy Policy",
      "Cookie Policy",
      "Payments",
      "Knowledge Base",
    ],
  },
  {
    title: "Quick Links",
    links: [
      "Enterprise Resource Planning",
      "D365 Business Central",
      "D365 Supply Chain Management",
      "Ecommerce Development",
      "Mobile Application Development",
      "Cognitive AI",
      "IoT and Enterprise Hardware",
      "Resource Augmentation",
      "Process Re-engineering",
      "Support and Maintenance",
    ],
  },
];

const storeBadges = [
  {
    label: "App Store",
    eyebrow: "Download on the",
    icon: FaApple,
  },
  {
    label: "Google Play",
    eyebrow: "GET IT ON",
    icon: FaGooglePlay,
  },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "X", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Instagram", icon: FaInstagram },
 
];

const contacts = [
  ["W! Team India", "+91 480 2981730"],
  ["W! Team UK", "+44 1225 29 0773"],
  ["Sales Queries", "+91 9778800 730"],
  ["HR Queries", "+91 9778800 739"],
];

const underlineLink =
  "relative w-fit after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-zinc-100 after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-16">
        <div className="max-w-[520px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-zinc-500">
            Drop Us a Line
          </p>
          <a
            href="mailto:hello@woxro.com"
            className={`${underlineLink} mt-2 block break-words text-[32px] font-light leading-none text-zinc-100 transition-colors duration-300 hover:text-white sm:text-[37px]`}
          >
            hello@woxro.com
          </a>
          <p className="mt-5 max-w-[440px] text-[14px] leading-[1.55] text-zinc-500">
            Combining intentional design with an original application of
            progressive technologies to create sustainable innovation.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.55fr_1.25fr]">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-[14px] font-semibold text-zinc-100">
                {column.title}
              </h4>
              <div className="flex flex-col gap-3">
                {column.links.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className={`${underlineLink} text-[13px] leading-snug text-zinc-500 transition-colors duration-300 hover:text-zinc-100`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="mb-5 text-[14px] font-semibold text-zinc-100">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {contacts.map(([label, phone]) => (
                <div
                  key={label}
                  className="grid grid-cols-[112px_1fr] text-[13px] leading-snug text-zinc-500"
                >
                  <span>{label}</span>
                  <span>: {phone}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {socialLinks.map(({ label, icon: Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-[18px] items-center justify-center rounded-full bg-zinc-300 text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  <Icon size={9} />
                </Link>
              ))}
              <div className="ml-1 flex items-center gap-1 text-zinc-300">
                <span className="text-[22px] font-bold leading-none text-zinc-300">
                  C
                </span>
                <div>
                  <div className="flex gap-px">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} size={7} className="text-zinc-300" />
                    ))}
                  </div>
                  <p className="mt-px text-[7px] font-semibold uppercase leading-none text-zinc-400">
                    100+ Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {storeBadges.map(({ label, eyebrow, icon: Icon }) => (
              <Link
                key={label}
                href="#"
                aria-label={`Download on ${label}`}
                className="flex h-[27px] min-w-[86px] items-center gap-1.5 rounded-[4px] border border-zinc-500 px-2 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white"
              >
                <Icon size={15} />
                <span className="leading-none">
                  <span className="block text-[5px] font-medium uppercase tracking-normal">
                    {eyebrow}
                  </span>
                  <span className="block text-[11px] font-semibold tracking-tight">
                    {label}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-3 text-[12px] text-zinc-500 sm:flex-row sm:items-center">
            <p>
              Woxconnect- Get our latest thinking on your iPhone, iPad, or
              Android device.
            </p>
            <p className="sm:text-right">
              &copy; 2026 Woxro Technology Solutions Pvt Ltd. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
