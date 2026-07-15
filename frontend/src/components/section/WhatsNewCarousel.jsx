import React, { useRef, useState, useEffect } from 'react';

// Sample data mirroring recent Canva feature launches
const LAUNCHES_DATA = [
  {
    id: 1,
    tag: 'Canva AI 2.0',
    title: 'Turn conversation into editable layouts instantly.',
    actionText: 'Try Magic Layers',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 2,
    tag: 'Print Shop',
    title: 'Explore Canva\'s new Print Shop for merchandise.',
    actionText: 'Try Print Shop',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-teal-50',
  },
  {
    id: 3,
    tag: 'Pro Designer',
    title: 'All your professional brand kit tools. One creative home.',
    actionText: 'Explore Pro tools',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-purple-50',
  },
  {
    id: 4,
    tag: 'Community Wish',
    title: 'Bring your videos to life with expressive caption styles.',
    actionText: 'Learn more',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-amber-50',
  },
  {
    id: 5,
    tag: 'Canva Offline',
    title: 'Keep designing seamlessly without an internet connection.',
    actionText: 'Try Canva Offline',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=600&q=80',
    bgColor: 'bg-rose-50',
  },
];

export default function WhatsNewCarousel() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll positions to dynamically enable/disable navigation buttons
  const checkScrollBounds = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5);
      // Math.ceil deals with fractional pixel scaling on high-res displays
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollBounds);
      // Check bounds initially after component mount
      checkScrollBounds();
    }
    return () => carousel?.removeEventListener('scroll', checkScrollBounds);
  }, []);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-white select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            See what's new
          </h2>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-full border border-slate-200 transition-all ${canScrollLeft
                  ? 'bg-white text-slate-800 hover:bg-slate-50 hover:shadow-sm cursor-pointer'
                  : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                }`}
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-full border border-slate-200 transition-all ${canScrollRight
                  ? 'bg-white text-slate-800 hover:bg-slate-50 hover:shadow-sm cursor-pointer'
                  : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                }`}
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {LAUNCHES_DATA.map((item) => (
            <div
              key={item.id}
              className={`flex-none w-[290px] sm:w-[340px] md:w-[380px] rounded-2xl overflow-hidden snap-start flex flex-col justify-between border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${item.bgColor}`}
            >
              {/* Content Top */}
              <div className="p-6 md:p-8">
                {/* Canva Pill Tag */}
                <span className="inline-block bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm mb-4 border border-slate-100">
                  {item.tag}
                </span>
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug mb-3">
                  {item.title}
                </h3>
                {/* CTA Action link */}
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 group transition-colors"
                >
                  {item.actionText}
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

              {/* Graphic/Image Bottom */}
              <div className="h-44 md:h-52 w-full mt-auto overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}