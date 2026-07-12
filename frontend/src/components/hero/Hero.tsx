import { motion } from "framer-motion";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
    {/* <section className="relative overflow-hidden py-16 md:py-24" style={{
      backgroundImage: "url('./src/assets/images/bg.png')"
    }}> */}
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9E2FF] bg-white/90 px-5 py-2 shadow-sm backdrop-blur">
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
                  bg-white/90
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-600
                  shadow-sm
                  backdrop-blur
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