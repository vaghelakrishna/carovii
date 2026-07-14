const Footer = () => {
  // const visitors = "2,541"; // Replace with real visitor count

  return (
    <footer className="border-t border-[#ECEAF3] bg-[#FCFBFF]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center">

        {/* Main Text */}

        <p className="max-w-xl text-[16px] leading-7 text-slate-800">
          Built with too much ☕ and late-night ideas.
          More free creator tools & tiny internet experiments on{" "}
          <a
            href="https://carovii.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="border-b border-slate-900 font-semibold transition hover:border-violet-600 hover:text-violet-600"
          >
            Carovii
          </a>
          .
        </p>

        {/* Visitor Counter */}

        <div className="mt-6 flex items-center justify-center gap-2">
          <span>👀</span>

          <img
            src="https://krishnacreates.goatcounter.com/counter/TOTAL.svg"
            alt="Visitor count"
          />

          <span className="text-sm text-slate-600">
            creators visited Carovii
          </span>
        </div>

        {/* Links */}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[14px] font-medium text-slate-500">

          <a
            href="https://instagram.com/krishnacreates.design"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-violet-600"
          >
            Instagram
          </a>

          <span>✦</span>

          <a
            href="https://carovii.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-violet-600"
          >
            Carovii
          </a>

          <span>✦</span>

          <a
            href="https://in.pinterest.com/krishnacreatesdesign/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-violet-600"
          >
            Pinterest
          </a>

          <span>✦</span>

          <a
            href="#"
            className="transition hover:text-violet-600"
          >
            Buy me a coffee ☕
          </a>

        </div>

        {/* Bottom */}

        <p className="mt-8 text-xs text-slate-400">
          © 2026 Carovii · free forever · no watermark · made for creators 💛
        </p>

      </div>
    </footer>
  );
};

export default Footer;