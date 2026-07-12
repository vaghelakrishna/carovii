import { ArrowUpRight, Heart, Mail } from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-[#ECEAF3] bg-[#FCFBFF]">


      <div className="mx-auto max-w-7xl px-6 pt-20 pb-6">


        {/* Footer */}

        <div className="mt-20 grid gap-14 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-black tracking-tight text-slate-900">
              Carovii
            </h3>

            <p className="mt-5 max-w-sm leading-7 text-slate-500">
              Beautiful Instagram carousel creator built for
              creators, designers and marketers.
            </p>

            <div className="mt-8 flex gap-3">

              <a
                href="https://instagram.com/carovii"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#ECEAF3] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#ECEAF3] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#ECEAF3] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="mailto:hello@carovii.com"
                className="rounded-xl border border-[#ECEAF3] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h4 className="font-bold text-slate-900">
              Product
            </h4>

            <ul className="mt-5 space-y-4 text-slate-500">

              <li>
                <a href="#">Generator</a>
              </li>

              <li>
                <a href="#">Templates</a>
              </li>

              <li>
                <a href="#">FAQ</a>
              </li>

              <li>
                <a href="#">Updates</a>
              </li>

            </ul>

          </div>



          {/* Contact */}

          <div>

            <h4 className="font-bold text-slate-900">
              Contact
            </h4>

            <p className="mt-5 leading-7 text-slate-500">
              Have a feature request?
              We'd love to hear from you.
            </p>

            <button
              className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-violet-100
              px-5
              py-3
              font-medium
              text-violet-700
              transition
              hover:bg-violet-200
              "
            >
              Contact Us

              <ArrowUpRight size={18} />

            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#ECEAF3] pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Carovii. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with

            <Heart
              size={15}
              className="fill-pink-500 text-pink-500"
            />

            for creators.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;