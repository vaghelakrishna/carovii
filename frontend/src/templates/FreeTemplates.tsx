import { ArrowRight } from "lucide-react";
import TemplateCard from "./TemplateCard";
import { templates } from "./templateData";

const FreeTemplates = () => {
  return (
    <section className="py-24">

      <div className="mb-10 flex items-end justify-between">

        <div>

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Free Resources
          </span>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Free Instagram Templates
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Browse beautiful carousel templates.
            Click any template to open the original Instagram post.
          </p>

        </div>

        <button
          className="
          hidden
          items-center
          gap-2
          rounded-2xl
          border
          border-[#ECEAF3]
          bg-white
          px-5
          py-3
          font-medium
          transition
          hover:border-violet-300
          hover:bg-violet-50
          md:flex
          "
        >
          Browse All

          <ArrowRight size={18} />

        </button>

      </div>

      {/* Scroll */}

      <div
        className="
        flex
        gap-7
        overflow-x-auto
        pb-4
        scroll-smooth
        snap-x
        snap-mandatory
        "
      >
        {templates.map((template) => (
          <div
            key={template.id}
            className="snap-start"
          >
            <TemplateCard
              template={template}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default FreeTemplates;