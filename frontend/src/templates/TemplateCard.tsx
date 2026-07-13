import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  template: any;
}



const TemplateCard = ({ template }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(template.images);
    setCurrentImage((prev) => {
      console.log(prev);
      return prev === template.images.length - 1 ? 0 : prev + 1;
    });
  };
  
  const prevImage = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
  
    setCurrentImage((prev) =>
      prev === 0 ? template.images.length - 1 : prev - 1
    );
  };
  return (
    <motion.a
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      href={template.url}
      target="_blank"
      rel="noreferrer"
      className="
    group
    w-full
    max-w-[330px]

    md:w-[330px]

    flex-shrink-0
    overflow-hidden
    rounded-[30px]
    border
    border-[#ECEAF3]
    bg-white
    shadow-sm
    transition-all
    duration-300
    hover:border-violet-200
    hover:shadow-2xl
  "
    >
      {/* Header */}

      <div className="flex items-center justify-between p-3 sm:p-4">

        <div className="flex items-center gap-3">

          <img
            src={template.profile}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>

            <h4 className="text-[15px] font-semibold text-slate-900">
              {template.username}
            </h4>

            <p className="text-xs text-slate-500">
              Creator
            </p>

          </div>

        </div>

        <button className="text-xl leading-none text-slate-500">
          •••
        </button>

      </div>

      {/* Image */}

      <div className="relative overflow-hidden bg-[#F8F8FC]">

        <motion.img
          key={currentImage}
          src={template.images[currentImage]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="
        h-[350px]
        sm:h-[390px]
        w-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
        />

        {template.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="
            absolute
            left-2
            sm:left-3
            top-1/2
            z-20
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/95
            shadow-lg
            opacity-100
            sm:opacity-0
            sm:group-hover:opacity-100
            transition
          "
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="
            absolute
            right-2
            sm:right-3
            top-1/2
            z-20
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/95
            shadow-lg
            opacity-100
            sm:opacity-0
            sm:group-hover:opacity-100
            transition
          "
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {template.images.map((_: any, index: number) => (
                <div
                  key={index}
                  className={`rounded-full transition-all ${currentImage === index
                      ? "h-1.5 w-5 bg-white"
                      : "h-1.5 w-1.5 bg-white/60"
                    }`}
                />
              ))}
            </div>
          </>
        )}

      </div>

      {/* Actions */}

      <div className="flex items-center justify-between px-4 pt-4">

        <div className="flex gap-4">

          <Heart size={20} />

          <MessageCircle size={20} />

          <Send size={20} />

        </div>

        <Bookmark size={20} />

      </div>

      {/* Content */}

      <div className="px-4 pb-5 pt-3">

        <p className="text-sm font-semibold">
          {template.likes} likes
        </p>

        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-slate-700 sm:text-sm">

          <span className="font-semibold">
            {template.username}
          </span>{" "}

          {template.caption}

        </p>

        <p className="mt-4 text-sm font-semibold text-violet-700">
          View on Instagram →
        </p>

      </div>

    </motion.a>
  );
};

export default TemplateCard;