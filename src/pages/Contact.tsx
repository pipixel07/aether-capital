import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock, Send, Phone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "4th Floor, Centre, SCO – 255 & 256, Block-F, Gmada Aerocity, Sahibzada Ajit Singh Nagar, Matran, Punjab 140603",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@gscapital.co.in",
    link: "mailto:info@gscapital.co.in",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Layout>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss investment opportunities."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      {/* Contact Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-4">
                    Get in <span className="text-gradient-gold">Touch</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Whether you're a startup looking for capital or an investor seeking opportunities, 
                    we'd love to hear from you.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="glass-card p-6 flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold font-heading mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Map Embed */}
                <AnimatedSection delay={0.3}>
                  <div className="glass-card p-2 rounded-xl overflow-hidden mt-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1!2d76.78!3d30.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQxJzI0LjAiTiA3NsKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 lg:p-10"
              >
                <h3 className="text-xl font-bold font-heading mb-6">
                  Make an <span className="text-gradient-gold">Appointment</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Date</label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your investment goals or project..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Submitting...
                      </motion.span>
                    ) : (
                      <>
                        Submit Form
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
