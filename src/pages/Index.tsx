import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Scale, Heart, Briefcase, Building2, Car, CheckCircle, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const headlines = [
  "Superior Representation",
  "Law Firm of Choice",
  "Exceeding Client Expectations",
  "A Culture of Innovation & Excellence",
];

const HERO_IMG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90&fit=crop";
const CORP_IMG = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=85&fit=crop";

const services = [
  { title: "Workers Compensation", icon: Shield, desc: "Strategic advocacy for insurers and employers in contested disputes", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=85&fit=crop" },
  { title: "Work Injury Damages & Recoveries", icon: Scale, desc: "Proactive management of work injury damages claims and recoveries", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=85&fit=crop" },
  { title: "Catastrophic Injuries & Death Claims", icon: Heart, desc: "Sensitive and expert handling of the most serious injury claims", img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=85&fit=crop" },
  { title: "Employment Law & WHS", icon: Briefcase, desc: "Comprehensive employment law advice and WHS compliance", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=85&fit=crop" },
  { title: "Public Liability", icon: Building2, desc: "Defending public liability claims with precision and expertise", img: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600&q=85&fit=crop" },
  { title: "Motor Vehicle", icon: Car, desc: "Cost-effective resolution of motor vehicle claims", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&fit=crop" },
];

const values = ["Integrity", "Loyalty", "Dedication", "Accountability", "Excellence"];

const whyPoints = [
  "Exceeding client expectations at every stage",
  "Outstanding legal knowledge and representation",
  "Dedicated and experienced legal practitioners",
  "Exceptional and enduring client relationships",
  "Expertise in effective dispute resolution",
  "Minimising costs and maximising results",
  "Commitment to excellence in all matters",
  "Modern, secure technology and systems",
];

const Index = () => {
  const [headlineIdx, setHeadlineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setHeadlineIdx((i) => (i + 1) % headlines.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-black/80 to-deep-navy/85" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="label-text text-luxury-gold mb-8"
          >
            Legal Provider for Insurers & Employers
          </motion.p>

          <div className="h-[140px] md:h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="heading-xl text-primary-foreground"
              >
                {headlines[headlineIdx]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-primary-foreground/55 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Established in 2011, Gair Legal is one of Australia's premier law firms delivering strategic and proactive dispute resolution services for insurers, employers, scheme agents, self-insurers, and corporations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/expertise"
              className="px-10 py-4 bg-luxury-gold text-navy-black font-semibold tracking-wider text-sm hover:bg-gold-light transition-all duration-300 gold-shimmer"
            >
              Explore Our Expertise
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border border-primary-foreground/30 text-primary-foreground font-medium tracking-wider text-sm hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>

        {/* Values strip at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-deep-navy/90 backdrop-blur-sm py-5 border-t border-luxury-gold/10">
          <div className="flex items-center justify-center gap-4 md:gap-10 flex-wrap px-6">
            {values.map((value, i) => (
              <span key={value} className="text-luxury-gold/80 text-xs tracking-[0.25em] uppercase font-medium flex items-center gap-4 md:gap-10">
                {value}
                {i < values.length - 1 && <span className="text-luxury-gold/30 hidden md:inline">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="bg-navy-black py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CountUp end={15} suffix="+" label="Years Established" />
          <CountUp end={500} suffix="+" label="Matters Resolved" />
          <CountUp end={4} label="Offices Nationally" />
          <CountUp end={1} suffix="" label="NSW Premier Law Firm" />
        </div>
      </section>

      {/* Firm Overview - 2 column */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="label-text text-brand-teal mb-4">About Our Firm</p>
              <h2 className="heading-lg text-foreground mb-8">
                One of Australia's Most Recognised Law Firms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gair Legal was established in 2011 and has quickly become one of NSW's premier law firms. We are a progressive and highly specialised firm providing strategic and proactive dispute resolution for insurers, employers, scheme agents, self-insurers, general insurers, corporate and government self-insurers, and small and large corporations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Gair Legal's reputation for exceptional service has resulted in the firm being nominated by major organisations as the preferred law firm to handle their claims. The firm is founded on outstanding legal knowledge and experience with core values of quality, integrity, loyalty, accountability and dedication to a superior legal service.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-luxury-gold font-medium text-sm tracking-wide hover:text-gold-light transition-colors group"
              >
                Learn About Our Firm <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold/40" />
              <img
                src={CORP_IMG}
                alt="Corporate meeting at Gair Legal"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-luxury-gold/40" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Practice Areas - 6 cards */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label-text text-brand-teal mb-4">Our Services</p>
              <h2 className="heading-lg text-foreground mb-4">Gair Legal Expertise</h2>
              <div className="gold-divider mb-6" />
              <p className="text-muted-foreground body-lg max-w-2xl mx-auto">Proven expertise across a range of specialised legal fields</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <Link
                  to="/expertise"
                  className="group block relative h-72 overflow-hidden"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-black/90 via-navy-black/50 to-navy-black/20 group-hover:from-navy-black/95 transition-all duration-500" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <service.icon className="w-7 h-7 text-luxury-gold mb-3" />
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2 group-hover:text-luxury-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/50 text-sm">{service.desc}</p>
                    <span className="mt-3 text-luxury-gold text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Gair Legal */}
      <section className="section-padding bg-deep-navy">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label-text text-luxury-gold mb-4">Our Promise</p>
              <h2 className="heading-lg text-primary-foreground mb-4">Gair Legal's Superior Reputation Is Built On</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-5 border border-primary-foreground/5 hover:border-luxury-gold/20 transition-colors duration-300">
                  <CheckCircle size={18} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{point}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label-text text-brand-teal mb-4">Leadership</p>
              <h2 className="heading-lg text-foreground mb-4">Led by Australia's Finest Legal Minds</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             {[
              { name: "Jennifer Gair", title: "Managing Partner", email: "jen.gair@gairlegal.com.au", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
              { name: "Anthony Cummins", title: "Director", email: "anthony.cummins@gairlegal.com.au", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" },
              { name: "Stephen Hodges", title: "Partner", email: "stephen.hodges@gairlegal.com.au", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
            ].map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.1}>
                <div className="group bg-card border border-border hover:border-luxury-gold/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-luxury-gold/5">
                  <div className="h-56 overflow-hidden relative">
                     <img
                       src={leader.photo}
                       alt={leader.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                       loading="lazy"
                     />
                     <div className="absolute inset-0 bg-navy-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <Link to="/our-team" className="text-luxury-gold text-sm tracking-wider uppercase">View Profile →</Link>
                     </div>
                   </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">{leader.name}</h3>
                    <p className="text-brand-teal text-sm mb-2">{leader.title}</p>
                    <a href={`mailto:${leader.email}`} className="text-muted-foreground text-xs hover:text-luxury-gold transition-colors">{leader.email}</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/our-team"
              className="inline-flex items-center gap-2 px-8 py-3 border border-luxury-gold text-luxury-gold text-sm font-medium tracking-wider hover:bg-luxury-gold hover:text-navy-black transition-all duration-300 gold-shimmer"
            >
              Meet The Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Banner */}
      <section className="bg-secondary py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="label-text text-brand-teal mb-4">National Presence</p>
              <h2 className="heading-lg text-foreground mb-4">Serving Clients Nationally</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { loc: "Northern Beaches", sub: "Dee Why, NSW" },
              { loc: "Newcastle", sub: "NSW" },
              { loc: "Chatswood", sub: "NSW" },
              { loc: "Melbourne", sub: "VIC" },
            ].map((office, i) => (
              <ScrollReveal key={office.loc} delay={i * 0.1}>
                <Link to="/locations" className="group text-center block p-6 border border-border hover:border-luxury-gold/30 bg-card transition-all duration-300 hover:-translate-y-1">
                  <MapPin className="w-6 h-6 text-luxury-gold mx-auto mb-3 group-hover:text-gold-light transition-colors" />
                  <p className="font-display text-lg font-semibold text-foreground group-hover:text-luxury-gold transition-colors">{office.loc}</p>
                  <p className="text-muted-foreground text-xs mt-1">{office.sub}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/locations" className="text-luxury-gold text-sm tracking-wider font-medium hover:text-gold-light transition-colors inline-flex items-center gap-2 group">
              View All Office Locations <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-navy-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=50&fit=crop)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10">
          <ScrollReveal>
            <p className="label-text text-luxury-gold mb-6">Get Started</p>
            <h2 className="heading-lg text-primary-foreground mb-6">
              Ready To Work With Australia's<br className="hidden md:block" />Premier Legal Team?
            </h2>
            <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto mb-10">
              Contact us today for strategic legal advice tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-luxury-gold text-navy-black font-semibold tracking-wider hover:bg-gold-light transition-all duration-300 gold-shimmer"
            >
              Get In Touch Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
