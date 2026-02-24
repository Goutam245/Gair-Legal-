import { Link } from "react-router-dom";
import { ArrowRight, Shield, Scale, Heart, Briefcase, Building2, Car } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://www.gairlegal.com.au/wp-content/uploads/2020/01/Superior-Reprensentation.png";

const areas = [
  {
    title: "Workers Compensation",
    icon: Shield,
    img: "https://www.gairlegal.com.au/wp-content/uploads/2019/11/home-ser1.jpg",
    desc: "We make it a priority to understand and meet the needs of the workers compensation insurer and their insured. Gair Legal acts as an advocate in contested disputes and we proactively pursue strategic, cost effective and commercially sound resolution of claims. We are leaders in this area of law and have a reputation of defending and resolving the more difficult and complex matters. Gair Legal provides comprehensive matter management and reporting to insurers and employers. We provide value added services and support, focusing on the reduction and avoidance of workers compensation claims and associated costs.",
    bullets: ["Contested dispute resolution", "Strategic matter management", "Comprehensive insurer reporting", "Cost reduction strategies"],
    expert: "Stephen Hodges",
    expertTitle: "Partner",
    expertPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces&auto=format",
  },
  {
    title: "Work Injury Damages & Recoveries",
    icon: Scale,
    img: "https://www.gairlegal.com.au/wp-content/uploads/2019/11/home-ser2.jpg",
    desc: "Gair Legal has extensive experience in defending work injury damages claims and pursuing recovery actions. Our team provides strategic advice on liability, quantum assessment and litigation management to achieve optimal outcomes for our clients. We proactively manage work injury damages claims, providing timely and commercially focused advice to insurers and employers at every stage of the process.",
    bullets: ["Liability and quantum assessment", "Recovery action management", "Litigation strategy", "Commercially focused advice"],
    expert: "Christie Blake",
    expertTitle: "Partner",
    expertPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&h=80&fit=crop&crop=faces&auto=format",
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    icon: Heart,
    img: "https://www.gairlegal.com.au/wp-content/uploads/2019/11/home-s3.jpg",
    desc: "Our team handles catastrophic injury and death claims with the utmost sensitivity and professionalism. We provide comprehensive legal support through these complex and high-value matters, ensuring our clients receive expert guidance at every stage. Our lawyers have extensive experience managing the unique challenges these claims present, including complex medical evidence and significant financial exposure.",
    bullets: ["High-value claim management", "Complex medical evidence handling", "Sensitive case approach", "Expert litigation support"],
    expert: "Jennifer Gair",
    expertTitle: "Managing Partner",
    expertPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces&auto=format",
  },
  {
    title: "Employment Law & Workplace Health & Safety",
    icon: Briefcase,
    img: "https://www.gairlegal.com.au/wp-content/uploads/2019/11/home-s4.jpg",
    desc: "Gair Legal provides specialist advice on all aspects of employment law including unfair dismissal, workplace investigations, enterprise bargaining, and workplace health and safety compliance and prosecution defence. We assist employers in navigating complex workplace regulations and provide proactive legal strategies to minimise risk and ensure compliance.",
    bullets: ["Unfair dismissal defence", "Workplace investigations", "WHS compliance & prosecution defence", "Enterprise bargaining"],
    expert: "Alice Davis",
    expertTitle: "Partner",
    expertPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=faces&auto=format",
  },
  {
    title: "Public Liability",
    icon: Building2,
    img: "https://www.gairlegal.com.au/wp-content/uploads/2019/11/home-s5.jpg",
    desc: "We defend public liability claims with strategic precision, drawing on our extensive experience to achieve cost-effective resolutions. Our approach focuses on early assessment, liability analysis and proactive claims management. Gair Legal has a strong track record of successfully defending complex public liability matters across multiple jurisdictions.",
    bullets: ["Early liability assessment", "Proactive claims management", "Multi-jurisdictional defence", "Cost-effective resolution"],
    expert: "Dennis Kim",
    expertTitle: "Partner",
    expertPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&auto=format",
  },
  {
    title: "Motor Vehicle",
    icon: Car,
    img: "https://www.gairlegal.com.au/wp-content/uploads/2019/11/home-s6.jpg",
    desc: "Gair Legal provides expert representation in motor vehicle accident claims, including CTP matters. Our team manages these claims from inception through to resolution, ensuring efficient and effective outcomes for our clients. We provide strategic advice and robust defence of motor vehicle claims, leveraging our deep expertise in this area of law.",
    bullets: ["CTP claim management", "Strategic defence", "End-to-end claims handling", "Cost-effective outcomes"],
    expert: "Anthony Cummins",
    expertTitle: "Director",
    expertPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=faces&auto=format",
  },
];

const Expertise = () => {
  return (
    <>
      <PageHero image={HERO_IMG} title="Our Expertise" subtitle="Superior Representation Across Every Practice Area" />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="label-text text-brand-teal mb-4">Practice Areas</p>
              <h2 className="heading-lg text-foreground mb-6">Gair Legal Expertise</h2>
              <div className="gold-divider mb-8" />
              <p className="text-muted-foreground body-lg">
                Gair Legal has proven expertise in a range of legal fields utilising highly competent and experienced lawyers. We can guide you through complex legal issues to find an effective and cost-efficient business solution.
              </p>
            </div>
          </ScrollReveal>

          {/* Alternating sections */}
          <div className="space-y-24">
            {areas.map((area, i) => (
              <ScrollReveal key={area.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <area.icon className="w-6 h-6 text-luxury-gold" />
                      <p className="label-text text-brand-teal">{`0${i + 1}`}</p>
                    </div>
                    <h3 className="heading-lg text-foreground mb-6">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{area.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {area.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 p-4 bg-secondary border border-border">
                      <img src={area.expertPhoto} alt={area.expert} className="w-12 h-12 rounded-full object-cover object-top border-2 border-luxury-gold" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{area.expert}</p>
                        <p className="text-xs text-muted-foreground">{area.expertTitle}</p>
                      </div>
                      <Link to="/our-team" className="ml-auto text-luxury-gold text-xs tracking-wider hover:text-gold-light transition-colors">
                        View Profile →
                      </Link>
                    </div>
                  </div>
                  <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={area.img}
                      alt={area.title}
                      className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-black text-center">
        <ScrollReveal>
          <h2 className="heading-lg text-primary-foreground mb-6">Need Expert Legal Advice?</h2>
          <p className="text-primary-foreground/50 mb-10 max-w-xl mx-auto">Our experienced team is ready to discuss your legal needs and provide strategic solutions.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-luxury-gold text-navy-black font-semibold tracking-wider hover:bg-gold-light transition-all duration-300 gold-shimmer"
          >
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Expertise;
