// import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#ECEAF3] bg-[#FCFBFF]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center">

        {/* Main Text */}

        <p className="max-w-xl text-[16px] leading-7 text-slate-800">
          Built with too much ☕ and late-night ideas.
          More free creator tools & tiny internet experiments on{" "}
          <a
            href="/"
            className="border-b border-slate-900 font-semibold transition hover:text-violet-600 hover:border-violet-600"
          >
            Carovii
          </a>
          .
        </p>

        {/* Links */}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[14px] font-medium text-slate-500">
          <a className="transition hover:text-violet-600" href="https://instagram.com/krishnacreates.design">
            Instagram
          </a>



          <span>✦</span>

          <a className="transition hover:text-violet-600" href="https://carovii.vercel.app">
            Carovii
          </a>

          <span>✦</span>


          <a className="transition hover:text-violet-600" href="https://in.pinterest.com/krishnacreatesdesign/">
            Pinterest
          </a>

          <span>✦</span>

          <a className="transition hover:text-violet-600" href="#">
            Buy me a coffee
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