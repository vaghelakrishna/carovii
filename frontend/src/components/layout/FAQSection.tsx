import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is Carovii completely free?",
    answer:
      "Yes! Carovii is completely free. Create unlimited Instagram carousel posts without any watermark.",
  },
  {
    question: "Are my files private?",
    answer:
      "Absolutely. Everything happens locally inside your browser. Nothing is uploaded to our servers.",
  },
  {
    question: "Can I split videos too?",
    answer:
      "Yes. Images and videos are both supported with high quality export.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes! Carovii works beautifully on desktop, tablet and mobile.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-100/40 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-pink-100/40 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-3xl px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            Frequently Asked
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Questions
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-slate-500 md:text-base">
            Everything you need to know before creating your first Instagram carousel.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: .25 }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#ECEAF3]
                  bg-white/90
                  backdrop-blur-xl
                  shadow-sm
                  transition-all
                  hover:border-violet-200
                  hover:shadow-lg
                "
              >

                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    p-5
                    md:p-6
                  "
                >

                  <div className="flex items-center gap-4">

                    {/* <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-violet-50
                        text-xl
                      "
                    >
                      {faq.icon}
                    </div> */}

                    <h3 className="text-left text-[15px] font-semibold text-slate-900 md:text-lg">
                      {faq.question}
                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: active ? 45 : 0,
                    }}
                    transition={{
                      duration: .2,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-50
                      text-violet-600
                    "
                  >
                    <Plus size={18} />
                  </motion.div>

                </button>

                <AnimatePresence initial={false}>

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

                      <div className="px-5 pb-5 md:px-6 md:pb-6">

                        <div
                          className="
                            rounded-2xl
                            bg-[#FAF8FF]
                            p-5
                            text-sm
                            leading-7
                            text-slate-600
                          "
                        >
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