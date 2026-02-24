import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/gair-legal-logo.jpeg";

const offices = [
  {
    group: [
      {
        name: "Northern Beaches Office",
        address: ["Suite 1 & 6-7, 635 Pittwater Road", "Dee Why NSW 2099"],
        phone: "+61 2 9916 9600",
        email: "sydneyoffice@gairlegal.com.au",
      },
      {
        name: "Newcastle Office",
        address: ["Suite 14 & 1, 123 Scott Street", "Newcastle NSW 2300"],
        phone: "+61 2 9916 9650",
        email: "newcastleoffice@gairlegal.com.au",
      },
    ],
  },
  {
    group: [
      {
        name: "Chatswood Office",
        address: ["Level 5, Suite 503, 1-5 Railway Street", "Chatswood NSW 2067"],
        phone: "+61 2 9916 9675",
        email: "chatswoodoffice@gairlegal.com.au",
      },
      {
        name: "Melbourne Office",
        address: ["Level 50, 120 Collins Street", "Melbourne VIC 3000"],
        phone: "+61 3 8637 9950",
        email: "melbourneoffice@gairlegal.com.au",
      },
    ],
  },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Expertise", path: "/expertise" },
  { label: "Our Team", path: "/our-team" },
  { label: "About", path: "/about" },
  { label: "Community", path: "/community" },
  { label: "Locations", path: "/locations" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-navy-black text-primary-foreground/70">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="Gair Legal" className="h-11 mb-6 bg-primary-foreground/90 rounded px-2 py-1" />
            <p className="text-sm leading-relaxed mb-6">
              Legal Provider for Insurers & Employers. Delivering superior representation across Australia since 2011.
            </p>
            <div className="flex items-center gap-1.5 text-luxury-gold text-xs tracking-[0.2em] uppercase">
              <span>Integrity</span><span className="text-luxury-gold/40">·</span>
              <span>Loyalty</span><span className="text-luxury-gold/40">·</span>
              <span>Excellence</span>
            </div>
          </div>

          {/* Office Groups */}
          {offices.map((col, i) => (
            <div key={i} className="space-y-8">
              {col.group.map((office) => (
                <div key={office.name}>
                  <h4 className="text-luxury-gold text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                    {office.name}
                  </h4>
                  {office.address.map((line) => (
                    <p key={line} className="text-sm">{line}</p>
                  ))}
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Phone size={12} className="text-brand-teal" />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-gold-light transition-colors">{office.phone}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Mail size={12} className="text-brand-teal" />
                    <a href={`mailto:${office.email}`} className="hover:text-gold-light transition-colors text-xs">{office.email}</a>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm hover:text-gold-light transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-luxury-gold/20" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Gair Legal. All rights reserved.</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
          <span>Gair Legal is a corporation and not a partnership.</span>
          <span>Limited Liability by a scheme approved under Professional Standards Legislation.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
