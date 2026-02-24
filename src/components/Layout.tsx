import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/61299169600"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-7 right-7 z-[9999] w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-[1.12] hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] transition-all duration-300 animate-whatsapp-pulse"
    style={{ backgroundColor: "#25D366" }}
    aria-label="Chat on WhatsApp"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      width={28}
      height={28}
    />
  </a>
);

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
