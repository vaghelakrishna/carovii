import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  template: any;
}

const TemplateCard = ({ template }: Props) => {
  return (
    <motion.a
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
      href={template.url}
      target="_blank"
      rel="noreferrer"
      className="
      group
      w-[330px]
      shrink-0
      overflow-hidden
      rounded-[34px]
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

      <div className="flex items-center justify-between p-4">

        <div className="flex items-center gap-3">

          <img
            src={template.profile}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>

            <h4 className="text-sm font-semibold text-slate-900">
              {template.username}
            </h4>

            <p className="text-xs text-slate-500">
              Creator
            </p>

          </div>

        </div>

        <button className="text-2xl leading-none text-slate-500">
          •••
        </button>

      </div>

      {/* Image */}

      <div className="overflow-hidden bg-[#F8F8FC]">

        <img
          src={template.image}
          alt=""
          className="
          h-[390px]
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-105
          "
        />

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

        <p className="mt-2 text-sm leading-6 text-slate-700">

          <span className="font-semibold">
            {template.username}
          </span>{" "}

          {template.caption}

        </p>

        <p className="mt-4 font-semibold text-violet-700">
          View on Instagram →
        </p>

      </div>

    </motion.a>
  );
};

export default TemplateCard;