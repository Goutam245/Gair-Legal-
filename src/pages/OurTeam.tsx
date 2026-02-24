import { useState } from "react";
import { Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://www.gairlegal.com.au/wp-content/uploads/2025/07/exceptional-customer-service-a.png";

type Role = "All" | "Partners" | "Special Counsel" | "Senior Associates" | "Associates";

const team = [
  { name: "Jennifer Gair", title: "Managing Partner", email: "jen.gair@gairlegal.com.au", category: "Partners" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2019/12/jg.jpg" },
  { name: "Anthony Cummins", title: "Director", email: "anthony.cummins@gairlegal.com.au", category: "Partners" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2019/12/team_0006_2018-48-355r_bw.jpg" },
  { name: "Alice Davis", title: "Partner", email: "alice.davis@gairlegal.com.au", category: "Partners" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2019/12/team_0005_2018-48-382r_bw.jpg" },
  { name: "Stephen Hodges", title: "Partner", email: "stephen.hodges@gairlegal.com.au", category: "Partners" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2021/04/Stephen-new.jpg" },
  { name: "Christie Blake", title: "Partner", email: "christie.blake@gairlegal.com.au", category: "Partners" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2019/12/team_0007_2018-48-352r_bw.jpg" },
  { name: "Dennis Kim", title: "Partner", email: "dennis.kim@gairlegal.com.au", category: "Partners" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2020/12/dennis-kim.png" },
  { name: "Phoebe Singer", title: "Special Counsel", email: "phoebe.singer@gairlegal.com.au", category: "Special Counsel" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2024/02/Nadia-Baker-edited-1.jpg" },
  { name: "Laura Risti", title: "Special Counsel", email: "laura.risti@gairlegal.com.au", category: "Special Counsel" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2019/12/team_0000_2018-48-465r_bw.jpg" },
  { name: "Declan O'Connor", title: "Special Counsel", email: "declan.oconnor@gairlegal.com.au", category: "Special Counsel" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2025/03/declan-o-connor-679-x-1000-1.jpg" },
  { name: "Anthony Pryor", title: "Senior Associate", email: "anthony.pryor@gairlegal.com.au", category: "Senior Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2022/10/Anthony-Pryor-1.jpg" },
  { name: "Alisha Dyson", title: "Senior Associate", email: "alisha.dyson@gairlegal.com.au", category: "Senior Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2024/02/Alisha-Dyson.jpg" },
  { name: "Olivia Leonard", title: "Senior Associate", email: "olivia.leonard@gairlegal.com.au", category: "Senior Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2024/06/olivia-leonard-web-1.jpg" },
  { name: "Zac Simons", title: "Senior Associate", email: "zac.simons@gairlegal.com.au", category: "Senior Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2024/06/Zac-Simmons-web.jpg" },
  { name: "Lauren Hose", title: "Associate", email: "lauren.hose@gairlegal.com.au", category: "Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2024/06/Lauren-Hose-web-1.jpg" },
  { name: "Anastasija Milovic", title: "Associate", email: "anastasija.milovic@gairlegal.com.au", category: "Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2024/06/anastasija-milovic-web-1.jpg" },
  { name: "Tensin Lungtok", title: "Associate", email: "tensin.lungtok@gairlegal.com.au", category: "Associates" as const, photo: "https://www.gairlegal.com.au/wp-content/uploads/2025/03/Tenzin-Lungtok-679-x-1000-1.jpg" },
];

const filters: Role[] = ["All", "Partners", "Special Counsel", "Senior Associates", "Associates"];

const OurTeam = () => {
  const [filter, setFilter] = useState<Role>("All");
  const filtered = filter === "All" ? team : team.filter((m) => m.category === filter);

  return (
    <>
      <PageHero image={HERO_IMG} title="Exceptional People. Exceptional Results." subtitle="Meet the team behind Australia's premier legal practice" />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground leading-relaxed body-lg">
                Our senior staff are supported by experienced lawyers, graduates, paralegals and administrative professionals. Gair Legal is one of NSW's premier law firms. Our highly experienced Partners are leaders in Workers Compensation and are supported by knowledgeable lawyers and support professionals. We provide exceptional customer outcomes and service.
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                  filter === f
                    ? "bg-luxury-gold text-navy-black"
                    : "bg-secondary text-foreground hover:bg-muted border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.04}>
                <div className="group bg-card border border-border hover:border-luxury-gold/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-luxury-gold/5">
                  <div className="h-[220px] overflow-hidden relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-navy-black/70 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <a href={`mailto:${member.email}`} className="text-luxury-gold text-xs tracking-wider hover:text-gold-light transition-colors">
                          Send Email →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-luxury-gold text-sm mb-2">{member.title}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-muted-foreground text-xs hover:text-luxury-gold transition-colors"
                    >
                      <Mail size={11} /> {member.email}
                    </a>
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

export default OurTeam;
