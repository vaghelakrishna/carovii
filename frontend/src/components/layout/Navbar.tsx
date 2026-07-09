import { Sparkles } from "lucide-react";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg">

            <Sparkles size={18} />

          </div>

          <div>

            <h2 className="text-lg font-bold tracking-tight">
              Carovii
            </h2>

            <p className="text-xs text-gray-500">
              Carousel Studio
            </p>

          </div>

        </div>

        <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
          Free
        </button>

      </Container>
    </header>
  );
};

export default Navbar;