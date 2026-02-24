import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/gair-legal-logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Expertise", path: "/expertise" },
  { label: "Our Team", path: "/our-team" },
  { label: "About", path: "/about" },
  { label: "Community & Sustainability", path: "/community" },
  { label: "Locations", path: "/locations" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const headerBg = scrolled || !isHome
    ? "bg-deep-navy/[0.97] backdrop-blur-md shadow-lg shadow-navy-black/30 border-b border-luxury-gold/20"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[70px] ${headerBg}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center px-6 h-full">
          <Link to="/" className="flex-shrink-0">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={logo}
              alt="Gair Legal"
              className="h-[45px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-luxury-gold"
                    : "text-primary-foreground/80 hover:text-gold-light"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex justify-end">
            <Link
              to="/contact"
              className="px-5 py-2 border border-luxury-gold text-luxury-gold text-[13px] font-medium tracking-wider hover:bg-luxury-gold hover:text-navy-black transition-all duration-300 gold-shimmer"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-black flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-2xl font-display tracking-wide ${
                  location.pathname === item.path ? "text-luxury-gold" : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 px-8 py-3 border border-luxury-gold text-luxury-gold text-lg font-medium tracking-wider hover:bg-luxury-gold hover:text-navy-black transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
