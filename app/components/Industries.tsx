"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const industries = [
  {
    src: "/images/indimg1.png",
    title: "Health Care",
    description: "Driving transformation in patient care with Microsoft Dynamics 365 Apps",
  },
  {
    src: "/images/indimg2.png",
    title: "Logistics and Supply Chain",
    description: "Building connected, transparent, and resilient supply chains and logistics solutions.",
  },
  {
    src: "/images/indimg3.png",
    title: "Retail and Ecommerce",
    description: "Delivering unified omnichannel experiences with Microsoft Dynamics Commerce",
  },
  {
    src: "/images/indimg4.png",
    title: "Industrial Manufacturing",
    description: "Driving Industry 4.0 and smart factory transformation with Microsoft Dynamics 365 Apps",
  },
    {
    src: "/images/industry5.jpg",
    title: "Government",
    description: "Modernizing public services, optimizing resources, building trust with digital governance",
  },
    {
    src: "/images/industry6.jpg",
    title: "Banking & Finance",
    description: "Delivering secure, compliant, and customer-first financial services with digital-driven agility",
  },
    {
    src: "/images/industry7.jpg",
    title: "Professional Services",
    description: "Elevating client engagement, efficiency, and project success in a knowledge-driven economy",
  }
];

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });
  const scrollbarDragState = useRef(false);
  const [scrollbar, setScrollbar] = useState({ progress: 0, thumbWidth: 100 });

  const updateScrollbar = useCallback(() => {
    const scroller = scrollRef.current;

    if (!scroller) {
      return;
    }

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const thumbWidth =
      scroller.scrollWidth > 0
        ? Math.min(100, (scroller.clientWidth / scroller.scrollWidth) * 100)
        : 100;

    setScrollbar({
      progress: maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0,
      thumbWidth,
    });
  }, []);

  const scrollToScrollbarPosition = (clientX: number) => {
    const scroller = scrollRef.current;
    const scrollbarTrack = scrollbarRef.current;

    if (!scroller || !scrollbarTrack) {
      return;
    }

    const trackRect = scrollbarTrack.getBoundingClientRect();
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const usableTrackWidth = trackRect.width * (1 - scrollbar.thumbWidth / 100);
    const thumbOffset =
      clientX - trackRect.left - (trackRect.width * scrollbar.thumbWidth) / 200;
    const nextProgress =
      usableTrackWidth > 0
        ? Math.min(1, Math.max(0, thumbOffset / usableTrackWidth))
        : 0;

    scroller.scrollLeft = maxScroll * nextProgress;
  };

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollRef.current;

    if (!scroller) {
      return;
    }

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
    };
    scroller.setPointerCapture(event.pointerId);
  };

  const dragScroll = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollRef.current;

    if (!scroller || !dragState.current.isDragging) {
      return;
    }

    event.preventDefault();
    scroller.scrollLeft =
      dragState.current.scrollLeft - (event.clientX - dragState.current.startX);
  };

  const stopDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollRef.current;

    dragState.current.isDragging = false;
    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
  };

  const startScrollbarDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    scrollbarDragState.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    scrollToScrollbarPosition(event.clientX);
  };

  const dragScrollbar = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollbarDragState.current) {
      return;
    }

    scrollToScrollbarPosition(event.clientX);
  };

  const stopScrollbarDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    scrollbarDragState.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const moveScrollbarWithKeys = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const scroller = scrollRef.current;

    if (!scroller) {
      return;
    }

    const step = scroller.clientWidth / 4;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scroller.scrollLeft += step;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scroller.scrollLeft -= step;
    }
  };

  useEffect(() => {
    updateScrollbar();
    window.addEventListener("resize", updateScrollbar);

    return () => window.removeEventListener("resize", updateScrollbar);
  }, [updateScrollbar]);

  return (
    <div className="bg-black py-16 sm:py-24 px-5 sm:px-6 md:px-16 lg:px-24 flex flex-col items-center gap-7 min-h-[600px]">

      {/* Title */}
      <h1 className="text-white text-4xl sm:text-5xl font-normal lg:text-6xl text-center mb-4">
        Industries We Serve Serve
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm text-center max-w-5xl mb-8 sm:mb-16 leading-relaxed lg:text-xl">
        We help global brands, startups, and enterprises build customer-cherished products by bringing innovation and human-centered design to life.
      </p>

      {/* Cards scroller */}
      <div
        id="industries-scroller"
        ref={scrollRef}
        onPointerDown={startDrag}
        onPointerMove={dragScroll}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
        onScroll={updateScrollbar}
        className="industries-scrollbar flex w-full max-w-6xl cursor-grab gap-6 overflow-x-auto overflow-y-hidden active:cursor-grabbing"
      >
        {industries.map((item) => (
          <div key={item.title} className="group flex shrink-0 basis-[85%] select-none flex-col overflow-hidden bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#222] sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-72px)/4)]">

            {/* Image */}
            <div className="h-[160px] w-full overflow-hidden sm:h-[140px]">
              <Image
                src={item.src}
                alt={item.title}
                width={320}
                height={180}
                unoptimized
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-white text-base font-medium">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Scrollbar */}
      <div
        ref={scrollbarRef}
        role="scrollbar"
        tabIndex={0}
        aria-label="Industries carousel scrollbar"
        aria-controls="industries-scroller"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollbar.progress * 100)}
        onKeyDown={moveScrollbarWithKeys}
        onPointerDown={startScrollbarDrag}
        onPointerMove={dragScrollbar}
        onPointerUp={stopScrollbarDrag}
        onPointerCancel={stopScrollbarDrag}
        className="mt-14 h-4 w-full max-w-6xl cursor-pointer touch-none py-[7px] focus:outline-none"
      >
        <div className="h-px w-full bg-gray-700">
          <div
            className="h-px bg-white"
            style={{
              width: `${scrollbar.thumbWidth}%`,
              transform: `translateX(${
                scrollbar.progress * (10000 / scrollbar.thumbWidth - 100)
              }%)`,
            }}
          />
        </div>
      </div>

    </div>
  );
}
