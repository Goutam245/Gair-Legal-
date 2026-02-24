import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Leaf, Users, Shield, FileText } from "lucide-react";

const HERO_IMG = "https://www.gairlegal.com.au/wp-content/uploads/2025/07/Integrity-loyalty-dedication-a.png";

const tabs = [
  {
    id: "pro-bono",
    title: "Pro Bono Work",
    icon: Heart,
    content: "Gair Legal is committed to being a responsible firm and provides a positive social and economic contribution to the community. We provide pro bono legal assistance and the use of our office facilities for pro bono clients. Our team regularly volunteers their time and expertise to support those in need, ensuring access to justice for those who may otherwise go without legal representation.",
    extra: "We work closely with community legal centres and not-for-profit organisations to identify individuals and families who require legal support but cannot afford private representation. Our pro bono program is an integral part of our firm's identity and values.",
  },
  {
    id: "environment",
    title: "Environment & Sustainability",
    icon: Leaf,
    content: "We are committed to sustainable work and life practices. Our firm actively works to reduce our environmental footprint through paperless systems, energy efficiency, and sustainable procurement. We believe in operating responsibly and minimising our impact on the environment for future generations.",
    extra: "Our offices utilise energy-efficient systems, recycled materials, and digital-first workflows. We are continuously reviewing and improving our environmental practices to meet the highest standards of corporate environmental responsibility.",
  },
  {
    id: "charities",
    title: "Charities",
    icon: Users,
    content: "Gair Legal actively supports a range of charitable organisations and community initiatives, recognising our responsibility as a successful firm to contribute positively to society. Our team participates in fundraising events, charity runs, and community volunteer programs throughout the year.",
    extra: "We believe that giving back to the communities we serve is essential to our identity as a responsible corporate citizen. We proudly support organisations focused on health, education, disadvantage, and community wellbeing.",
  },
  {
    id: "diversity",
    title: "Diversity & Inclusion",
    icon: Shield,
    content: "We celebrate diversity and are committed to creating an inclusive workplace where everyone is valued, respected, and empowered to reach their full potential. Our policies and practices are designed to ensure equal opportunity and foster a culture of mutual respect.",
    extra: "We actively promote diversity across all levels of our firm, and believe that diverse teams deliver better outcomes for our clients. Our leadership team is committed to maintaining an inclusive workplace where different perspectives are celebrated.",
  },
  {
    id: "privacy",
    title: "Privacy Note",
    icon: FileText,
    content: "Gair Legal is committed to protecting the privacy of our clients and contacts in accordance with Australian Privacy Law. We handle all personal information in accordance with the Australian Privacy Principles and applicable privacy legislation.",
    extra: "Our privacy practices are regularly reviewed and updated to ensure compliance with the latest legislative requirements. We take every precaution to protect the confidentiality and security of the personal information entrusted to us.",
  },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHero image={HERO_IMG} title="Giving Back. Thinking Forward." subtitle="Actively supporting the community and committed to sustainable practices" />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="label-text text-brand-teal mb-4">Our Commitment</p>
              <h2 className="heading-lg text-foreground mb-6">Community & Sustainability</h2>
              <div className="gold-divider mb-8" />
              <p className="body-lg text-muted-foreground">
                Gair Legal actively supports the community and is committed to sustainable work and life practices. We believe in operating responsibly and making a positive impact beyond the courtroom.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-1">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-3 text-left px-6 py-4 transition-all duration-300 text-sm font-medium ${
                      activeTab === i
                        ? "bg-luxury-gold text-navy-black"
                        : "bg-card text-foreground hover:bg-secondary border-l-4 border-brand-teal/30"
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <ScrollReveal key={activeTab}>
                <div className="bg-card border border-border p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    {(() => { const Icon = tabs[activeTab].icon; return <Icon size={28} className="text-brand-teal" />; })()}
                    <h3 className="heading-md text-foreground">{tabs[activeTab].title}</h3>
                  </div>
                  <div className="gold-divider !mx-0 mb-6" />
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">{tabs[activeTab].content}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{tabs[activeTab].extra}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-deep-navy text-center">
        <ScrollReveal>
          <h2 className="heading-lg text-primary-foreground mb-6">Want To Learn More About Our Firm?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-luxury-gold text-navy-black font-semibold tracking-wider text-sm hover:bg-gold-light transition-all duration-300 gold-shimmer">
              About Gair Legal <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-medium tracking-wider text-sm hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Community;
