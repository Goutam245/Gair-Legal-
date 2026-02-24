import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&q=85&fit=crop";

const offices = [
  {
    name: "Northern Beaches",
    address: ["Suite 1, 635 Pittwater Road, Dee Why NSW 2099", "Suite 6 & 7, 635 Pittwater Road, Dee Why NSW 2099", "P.O. Box 1277"],
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8!2d151.2870!3d-33.7530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ1JzEwLjgiUyAxNTHCsDE3JzEzLjIiRQ!5e0!3m2!1sen!2sau!4v1",
  },
  {
    name: "Newcastle",
    address: ["Suite 14, 123 Scott Street, Newcastle NSW 2300", "Suite 1, 123 Scott Street, Newcastle NSW 2300"],
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.5!2d151.7780!3d-32.9260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU1JzMzLjYiUyAxNTHCsDQ2JzQwLjgiRQ!5e0!3m2!1sen!2sau!4v1",
  },
  {
    name: "Chatswood",
    address: ["Level 5, South Tower, Suite 503", "1-5 Railway Street, Chatswood NSW 2067"],
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8!2d151.1830!3d-33.7960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ3JzQ1LjYiUyAxNTHCsDEwJzU4LjgiRQ!5e0!3m2!1sen!2sau!4v1",
  },
  {
    name: "Melbourne",
    address: ["Level 50, 120 Collins Street", "Melbourne VIC 3000"],
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8!2d144.9710!3d-37.8140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzUwLjQiUyAxNDTCsDU4JzE1LjYiRQ!5e0!3m2!1sen!2sau!4v1",
  },
];

const Locations = () => {
  return (
    <>
      <PageHero image={HERO_IMG} title="Four Offices. One National Team." subtitle="Strategically located to serve clients across Australia" />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <ScrollReveal key={office.name} delay={i * 0.1}>
                <div className="bg-card border border-border hover:border-luxury-gold/30 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-luxury-gold/5">
                  <div className="h-52 bg-muted">
                    <iframe
                      src={office.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${office.name} Office Map`}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-5">
                      {office.name} Office
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                          {office.address.map((line) => (<p key={line}>{line}</p>))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-brand-teal flex-shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-brand-teal flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(office.address[0])}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-navy-black transition-all duration-300"
                      >
                        Get Directions <ExternalLink size={12} />
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-border text-foreground hover:border-brand-teal hover:text-brand-teal transition-all duration-300"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
