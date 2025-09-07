import { useState } from "react";
import { Menu, X, Heart, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import AdminLogin from "@/components/AdminLogin";
import BookingSearch from "@/components/BookingSearch";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Doctors", href: "#doctors" },
    { name: "Appointments", href: "#appointments" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Heart className="h-8 w-8 text-primary" />
              <Stethoscope className="h-4 w-4 text-primary-glow absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-medical bg-clip-text text-transparent">
              MediCare+
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <AdminLogin>
              <Button 
                variant="outline" 
                className="hidden sm:inline-flex glass hover:glass-subtle border-primary/20 hover:border-primary/40"
              >
                Admin Login
              </Button>
            </AdminLogin>
            <BookingSearch>
              <Button className="bg-gradient-medical hover:opacity-90 transition-opacity">
                Book Now
              </Button>
            </BookingSearch>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="glass"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1 glass">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 space-y-2">
              <AdminLogin>
                <Button variant="outline" className="w-full glass">
                  Admin Login
                </Button>
              </AdminLogin>
              <BookingSearch>
                <Button className="w-full bg-gradient-medical hover:opacity-90 transition-opacity">
                  Book Now
                </Button>
              </BookingSearch>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;