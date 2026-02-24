import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://www.gairlegal.com.au/wp-content/uploads/2020/01/client-relationships.png";

const practiceAreas = [
  "Workers Compensation",
  "Work Injury Damages & Recoveries",
  "Catastrophic Injuries & Death Claims",
  "Employment Law & Workplace Health & Safety",
  "Public Liability",
  "Motor Vehicle",
];

const officeLocations = ["Northern Beaches", "Newcastle", "Chatswood", "Melbourne"];

const contactOffices = [
  { name: "Northern Beaches", address: "Suite 1 & 6-7, 635 Pittwater Road, Dee Why NSW 2099", phone: "+61 2 9916 9600", email: "sydneyoffice@gairlegal.com.au" },
  { name: "Newcastle", address: "Suite 14 & 1, 123 Scott Street, Newcastle NSW 2300", phone: "+61 2 9916 9650", email: "newcastleoffice@gairlegal.com.au" },
  { name: "Chatswood", address: "Level 5, Suite 503, 1-5 Railway Street, Chatswood NSW 2067", phone: "+61 2 9916 9675", email: "chatswoodoffice@gairlegal.com.au" },
  { name: "Melbourne", address: "Level 50, 120 Collins Street, Melbourne VIC 3000", phone: "+61 3 8637 9950", email: "melbourneoffice@gairlegal.com.au" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", office: "", area: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.company.trim()) e.company = "Company name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Valid email required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Thank you for your enquiry. A member of our team will be in touch shortly.");
      setFormData({ name: "", company: "", email: "", phone: "", office: "", area: "", message: "" });
      setErrors({});
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-card border text-foreground text-sm focus:outline-none transition-colors ${
      errors[field] ? 'border-destructive focus:border-destructive' : 'border-border focus:border-luxury-gold'
    }`;

  return (
    <>
      <PageHero image={HERO_IMG} title="Get In Touch With Our Team" subtitle="We're here to help with your legal needs" />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="label-text text-brand-teal mb-3">Send Enquiry</p>
              <h2 className="heading-lg text-foreground mb-2">Contact Us</h2>
              <div className="gold-divider !mx-0 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">Full Name *</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass('name')} placeholder="Your full name" />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">Company Name *</label>
                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass('company')} placeholder="Your company" />
                    {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">Email Address *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass('email')} placeholder="your@email.com" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">Phone Number *</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass('phone')} placeholder="+61..." />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">Office Location</label>
                    <select value={formData.office} onChange={(e) => setFormData({ ...formData, office: e.target.value })} className={inputClass('office')}>
                      <option value="">Select office</option>
                      {officeLocations.map((o) => (<option key={o} value={o}>{o}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">Practice Area</label>
                    <select value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} className={inputClass('area')}>
                      <option value="">Select a practice area</option>
                      {practiceAreas.map((area) => (<option key={area} value={area}>{area}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground mb-2 block tracking-wide">How can we help you? *</label>
                  <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass('message')} resize-none`} placeholder="Please describe your legal matter..." />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-luxury-gold text-navy-black font-semibold tracking-wider hover:bg-gold-light transition-all duration-300 gold-shimmer"
                >
                  Submit Enquiry <ArrowRight size={16} />
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              {/* All offices */}
              <div className="bg-deep-navy p-8 text-primary-foreground mb-6">
                <h3 className="font-display text-xl font-semibold mb-6 text-luxury-gold">Our Offices</h3>
                <div className="space-y-6">
                  {contactOffices.map((office) => (
                    <div key={office.name} className="border-b border-primary-foreground/10 pb-4 last:border-0 last:pb-0">
                      <p className="text-luxury-gold/80 text-xs font-semibold tracking-[0.15em] uppercase mb-2">{office.name}</p>
                      <div className="flex items-start gap-2 mb-1">
                        <MapPin size={12} className="text-brand-teal mt-1 flex-shrink-0" />
                        <p className="text-primary-foreground/60 text-xs">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Phone size={12} className="text-brand-teal flex-shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-primary-foreground/60 text-xs hover:text-gold-light transition-colors">{office.phone}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={12} className="text-brand-teal flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-primary-foreground/60 text-xs hover:text-gold-light transition-colors">{office.email}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business hours & response promise */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-luxury-gold" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Business Hours</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Monday – Friday, 8:30am – 5:30pm</p>
                <div className="h-px bg-border mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We aim to respond to all enquiries within one business day. For urgent matters, please call our head office directly on <a href="tel:+61299169600" className="text-luxury-gold hover:text-gold-light transition-colors">+61 2 9916 9600</a>.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
