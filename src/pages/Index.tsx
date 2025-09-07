import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorsSection";
import AppointmentsSection from "@/components/AppointmentsSection";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DoctorsSection />
        <AppointmentsSection />
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
