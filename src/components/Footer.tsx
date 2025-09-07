import { Heart, Stethoscope, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Services", href: "#services" },
    { name: "Appointments", href: "#appointments" },
    { name: "Contact", href: "#contact" },
    { name: "Emergency", href: "#emergency" }
  ];

  const services = [
    { name: "Cardiology", href: "#cardiology" },
    { name: "Neurology", href: "#neurology" },
    { name: "Pediatrics", href: "#pediatrics" },
    { name: "Orthopedics", href: "#orthopedics" },
    { name: "Dermatology", href: "#dermatology" },
    { name: "Psychiatry", href: "#psychiatry" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary" />
                <Stethoscope className="h-4 w-4 text-primary-glow absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-medical bg-clip-text text-transparent">
                MediCare+
              </span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Your trusted healthcare partner providing exceptional medical services with modern technology and compassionate care.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass p-2 rounded-full hover:glass-subtle transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Healthcare Avenue</p>
                  <p>Medical District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-muted-foreground">General: (555) 123-4567</p>
                  <p className="text-destructive font-medium">Emergency: 911</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>info@medicare-plus.com</p>
                  <p>support@medicare-plus.com</p>
                </div>
              </div>
            </div>

            {/* Emergency notice */}
            <div className="glass rounded-lg p-3 mt-6 border border-destructive/20">
              <p className="text-xs text-destructive font-medium mb-1">24/7 Emergency Service</p>
              <p className="text-xs text-muted-foreground">
                For medical emergencies, call 911 or visit our emergency department immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MediCare+. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;