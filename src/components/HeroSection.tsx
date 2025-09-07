import { Calendar, UserCheck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLogin from "@/components/AdminLogin";
import BookingSearch from "@/components/BookingSearch";
import heroImage from "@/assets/medical-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with image and gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/10 float">
          <Shield className="h-16 w-16" />
        </div>
        <div className="absolute top-40 right-20 text-primary/10 float-delayed">
          <Clock className="h-12 w-12" />
        </div>
        <div className="absolute bottom-32 left-20 text-primary/10 float-slow">
          <UserCheck className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 right-10 text-primary/10 float">
          <Calendar className="h-14 w-14" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Hero text container with glassmorphism */}
            <div className="glass rounded-3xl p-8 lg:p-12 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-medical bg-clip-text text-transparent">
                  Book Your Doctor
                </span>
                <br />
                <span className="text-foreground">
                  Appointment Easily
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Experience seamless healthcare management with our modern appointment system. 
                Connect with qualified doctors, schedule appointments, and manage your health records all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BookingSearch>
                  <Button 
                    size="lg" 
                    className="bg-gradient-medical hover:opacity-90 transition-opacity text-lg px-8 py-4 pulse-glow"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </BookingSearch>
                <AdminLogin>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="glass hover:glass-subtle border-primary/30 hover:border-primary/50 text-lg px-8 py-4"
                  >
                    <UserCheck className="mr-2 h-5 w-5" />
                    Admin Login
                  </Button>
                </AdminLogin>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Feature highlights */}
          <div className="hidden lg:block space-y-6">
            <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-medical p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Easy Scheduling</h3>
                  <p className="text-muted-foreground">Book appointments with just a few clicks</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-medical p-3 rounded-full">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Secure & Private</h3>
                  <p className="text-muted-foreground">Your health data is protected and encrypted</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-medical p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Updates</h3>
                  <p className="text-muted-foreground">Get instant notifications and reminders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;