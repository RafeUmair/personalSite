import { Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to work together. Feel free to reach out through any of
          the platforms below.
        </p>

        <h3 className="text-2xl font-semibold text-center mb-8">
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Mail className="w-5 h-5" />
              </div>
            </div>

            <h4 className="font-semibold">Email</h4>

            <a
              href="mailto:rafeumair12@gmail.com"
              className="text-primary hover:underline text-sm break-all"
            >
              rafeumair12@gmail.com
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Phone className="w-5 h-5" />
              </div>
            </div>

            <h4 className="font-semibold">Phone</h4>
            <p className="text-sm text-muted-foreground">+61 414 476 590</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            <h4 className="font-semibold">Location</h4>
            <p className="text-sm text-muted-foreground">Perth, Australia</p>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-muted-foreground">Connect with me</p>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/rafe-umair-92a651245/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.youtube.com/@rafeumair8553"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
