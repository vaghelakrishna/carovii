import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[120px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >

          {/* Badge */}

          <div className="mb-6 flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">

            <Sparkles size={16} />

            Free • Private • No Watermark

          </div>

          {/* Heading */}

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">

            Create Beautiful

            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">

              Instagram Carousels

            </span>

          </h1>

          {/* Subtitle */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

            Split images and videos into perfectly aligned Instagram
            carousel slides — right inside your browser.

          </p>

          {/* CTA */}

          <button
            className="
            mt-10
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-indigo-600
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-xl
            transition-all
            hover:-translate-y-1
            hover:shadow-2xl
          "
          >
            Start Creating
          </button>

          {/* Small Features */}

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "Images",
              "Videos",
              "High Quality",
              "Instant Download",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm"
              >
                {item}
              </span>
            ))}

          </div>

          <ArrowDown className="mt-14 animate-bounce text-slate-400" />

        </motion.div>

      </Container>

    </section>
  );
};

export default Hero;