import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      if ((window as any).goatcounter?.visit_count) {
        clearInterval(timer);

        (window as any).goatcounter.visit_count({
          append: "#visitor-count",
          type: "total",
          no_branding: true,
        });
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer>
      {/* baaki footer */}

      <p className="mt-4 text-sm text-slate-500">
        👀 <span id="visitor-count"></span> creators visited Carovii
      </p>
    </footer>
  );
};

export default Footer;