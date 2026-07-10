import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is Carovii completely free?",
    answer:
      "Yes! Carovii is completely free to use. Create unlimited Instagram carousel slides without any watermark.",
    emoji: "💜",
  },
  {
    question: "Are my files private?",
    answer:
      "Absolutely. Everything happens inside your browser. Your files are never uploaded to any server.",
    emoji: "🔒",
  },
  {
    question: "Can I split videos too?",
    answer:
      "Yes! You can upload both images and videos to generate perfectly aligned carousel slides.",
    emoji: "🎬",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes. Carovii works beautifully on desktop, tablet and mobile devices.",
    emoji: "📱",
  },
  {
    question: "Which Instagram formats are supported?",
    answer:
      "Currently Portrait (1080×1350) and Square (1080×1080). More formats are coming soon.",
    emoji: "🖼️",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-20 top-16 text-5xl opacity-20">
          ✨
        </div>

        <div className="absolute right-24 top-32 text-4xl opacity-20">
          🌸
        </div>

        <div className="absolute left-1/3 bottom-16 text-4xl opacity-20">
          💜
        </div>

        <div className="absolute right-1/4 bottom-32 text-3xl opacity-20">
          ⭐
        </div>

      </div>

      <div className="mx-auto max-w-4xl">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            🌸 FAQs
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-3 h-2 w-48 rounded-full bg-violet-200">
            <div className="h-full w-24 rounded-full bg-violet-600 animate-pulse" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-500">
            Everything you need to know before creating your first Instagram
            carousel.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: .2,
                }}
                className="
                overflow-hidden
                rounded-[28px]
                border
                border-[#ECEAF3]
                bg-white
                shadow-sm
                hover:border-violet-200
                hover:shadow-xl
                "
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-6
                  text-left
                  "
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-violet-50
                      text-2xl
                      "
                    >
                      {faq.emoji}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {faq.question}
                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: active ? 45 : 0,
                    }}
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-violet-100
                    text-violet-700
                    "
                  >
                    <Plus size={20} />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {active && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .25,
                      }}
                    >

                      <div className="px-6 pb-6">

                        <div className="ml-[76px] rounded-2xl bg-violet-50 p-5 text-[15px] leading-7 text-slate-600">
                          {faq.answer}
                        </div>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}