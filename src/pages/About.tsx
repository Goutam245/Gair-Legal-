import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { Heart, Leaf, Shield, Users, Award, Target } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&q=85&fit=crop";

const timeline = [
  { year: "2011", event: "Founded by Jennifer Gair" },
  { year: "2013", event: "Newcastle office opened" },
  { year: "2015", event: "Chatswood office established" },
  { year: "2018", event: "Melbourne office launched" },
  { year: "2020", event: "Recognised as NSW Premier Law Firm" },
  { year: "2024", event: "Continued national expansion" },
];

const values = [
  { icon: Award, title: "Quality", desc: "Superior outcomes in every matter we undertake for our clients." },
  { icon: Shield, title: "Integrity", desc: "Honest, transparent client relationships built on trust and respect." },
  { icon: Heart, title: "Loyalty", desc: "Committed to our clients' success and long-term partnerships." },
  { icon: Target, title: "Accountability", desc: "We take ownership of results and deliver on our promises." },
  { icon: Users, title: "Dedication", desc: "Relentless pursuit of the best outcomes for our clients." },
  { icon: Leaf, title: "Innovation", desc: "Modern technology and practices driving superior service." },
];

const differentiators = [
  "Nominated by major organisations as their preferred law firm",
  "Leaders in Workers Compensation law nationally",
  "Proactive strategic approach to dispute resolution",
  "Value-added services and comprehensive matter management",
  "Sustainable and socially responsible practices",
  "Modern secure technology systems",
];

const About = () => {
  return (
    <>
      <PageHero image={HERO_IMG} title="About Gair Legal" subtitle="Established 2011 — Australia's Premier Legal Provider" />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <p className="label-text text-brand-teal mb-4">Our Story</p>
                <h2 className="heading-lg text-foreground mb-8">A Progressive & Highly Specialised Firm</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gair Legal was established in 2011 and has quickly become one of NSW's premier law firms. We are a progressive and highly specialised firm providing strategic and proactive dispute resolution services for insurers and employers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gair Legal acts on behalf of and in partnership with icare, general insurers, corporate and government self-insurers, and small and large corporations. Our reputation for exceptional service has resulted in the firm being nominated by major organisations as the preferred law firm to handle their claims.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The firm is founded on outstanding legal knowledge and experience with core values of quality, integrity, loyalty, accountability and dedication to a superior legal service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=85&fit=crop"
                alt="Gair Legal professional office"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-black py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CountUp end={15} suffix="+" label="Years of Excellence" />
          <CountUp end={500} suffix="+" label="Matters Resolved" />
          <CountUp end={4} label="National Offices" />
          <CountUp end={17} suffix="+" label="Expert Lawyers" />
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label-text text-brand-teal mb-4">Our Journey</p>
              <h2 className="heading-lg text-foreground mb-4">Milestones</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-px bg-luxury-gold/20 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.08}>
                  <div className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <p className="font-display text-3xl font-bold text-luxury-gold">{item.year}</p>
                    </div>
                    <div className="w-4 h-4 bg-luxury-gold rounded-full flex-shrink-0 relative z-10 hidden md:block" />
                    <div className="flex-1">
                      <p className="text-foreground font-medium">{item.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label-text text-brand-teal mb-4">What We Stand For</p>
              <h2 className="heading-lg text-foreground mb-4">Our Core Values</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="bg-card p-8 border border-border hover:border-luxury-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-luxury-gold/5">
                  <v.icon className="w-8 h-8 text-luxury-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-deep-navy">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="label-text text-luxury-gold mb-4">Why Us</p>
              <h2 className="heading-lg text-primary-foreground mb-4">What Makes Gair Legal Different</h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentiators.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-5 border border-primary-foreground/5 hover:border-luxury-gold/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0" />
                  <p className="text-primary-foreground/70">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-luxury-gold text-navy-black font-semibold tracking-wider text-sm hover:bg-gold-light transition-all duration-300 gold-shimmer">
              Get In Touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
