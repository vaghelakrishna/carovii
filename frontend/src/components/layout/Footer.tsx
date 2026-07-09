import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 py-8">

      <Container>

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">

          <p>© 2026 Carovii. All rights reserved.</p>

          <p>Made for creators ❤️</p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;