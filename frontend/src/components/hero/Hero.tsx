import { motion } from "framer-motion";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 h-screen">
    {/* <section className="relative overflow-hidden py-16 md:py-24" style={{
      backgroundImage: "url('./src/assets/images/bg.png')"
    }}> */}
      <Container>

        {/* Brand */}

        <div className="mb-12 flex items-center justify-center">

          <div
            className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-[#ECEAF3]
      bg-white/80
      px-5
      py-2.5
      shadow-sm
      backdrop-blur
    "
          >
            <span
              className="
        font-['Fraunces']
        text-2xl
        font-black
        tracking-tight
        text-[#5B21B6]
      "
            >
              Carovii
            </span>

            <div className="h-4 w-px bg-[#E5E7EB]" />

            <span className="text-sm text-slate-500">
              by
            </span>

            <span className="text-sm font-semibold text-slate-800">
              krishnacreates.design
            </span>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >

          {/* Badge */}

          {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#E9E2FF] bg-white/90 px-5 py-2 shadow-sm backdrop-blur">
            <span className="text-sm font-medium text-slate-700">
              Free • No Watermark • Browser Based
            </span>
          </div> */}

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

          {/* <p
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
          </p> */}

          <p
            className="
    mt-12
    max-w-2xl
    text-center
    text-lg
    leading-8
    text-slate-500
  "
          >
            Drop your image, pick your slides, download & post.
            <span className="font-medium text-slate-800">
              {" "}No signup. No nonsense. Just clean cuts.
            </span>
          </p>

        </motion.div>

      </Container>

    </section>
  );
};

export default Hero;