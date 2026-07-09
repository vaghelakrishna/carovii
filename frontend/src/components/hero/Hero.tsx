// import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* Soft Background */}
      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[130px]" />
      <div className="absolute right-0 top-20 -z-10 h-[300px] w-[300px] rounded-full bg-pink-200/20 blur-[120px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9E2FF] bg-white px-5 py-2 shadow-sm">


            <span className="text-sm font-medium text-slate-700">
              Free • No Watermark • Browser Based
            </span>

          </div>

          {/* Heading */}

          <div className="mt-10 space-y-2">

            <h1
              className="
          font-['Fraunces']
          text-5xl
          font-black
          leading-[0.92]
          tracking-[-0.05em]
          text-[#19181D]
          md:text-7xl
          lg:text-[84px]
        "
            >
              Design your
            </h1>

            <h1
              className="
          font-['Fraunces']
          text-5xl
          font-black
          leading-[0.92]
          tracking-[-0.05em]
          text-[#5B21B6]
          md:text-7xl
          lg:text-[84px]
        "
            >
              Carousel beautifully.
            </h1>

          </div>

          {/* Quote */}

          <p
            className="
        mt-8
        font-['Cormorant_Garamond']
        text-2xl
        italic
        leading-tight
        text-[#47425B]
        md:text-3xl
      "
          >
            Don't crop your story.
            <br />
            Split it beautifully.
          </p>

          {/* CTA */}

          {/* <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button
              className="
          rounded-2xl
          bg-[#5B21B6]
          px-8
          py-4
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#4C1D95]
        "
            >
              Start Creating
            </button>

            <button
              className="
          rounded-2xl
          border
          border-[#E7E3F3]
          bg-white
          px-8
          py-4
          font-semibold
          text-[#3C3652]
          transition
          hover:bg-[#F8F6FF]
        "
            >
              View Demo
            </button>

          </div> */}

          {/* Features */}

          <div className="mt-12 flex flex-wrap justify-center gap-3">

            {[
              "Instant Split",
              "HD Export",
              "Unlimited",
              "Privacy First",
              "No Upload Limit",
            ].map((item) => (
              <span
                key={item}
                className="
            rounded-full
            border
            border-[#ECEAF3]
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
            shadow-sm
          "
              >
                {item}
              </span>
            ))}

          </div>

        </motion.div>

      </Container>

    </section>
  );
};

export default Hero;