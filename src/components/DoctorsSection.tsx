import { Star, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    location: "New York",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    nextSlot: "2:00 PM"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    rating: 4.8,
    experience: "12 years",
    location: "Los Angeles",
    availability: "Available Tomorrow",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    nextSlot: "10:30 AM"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    rating: 4.9,
    experience: "10 years",
    location: "Chicago",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1594824388853-5d39d18c4c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    nextSlot: "4:15 PM"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedic",
    rating: 4.7,
    experience: "18 years",
    location: "Houston",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    nextSlot: "1:45 PM"
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    specialization: "Dermatologist",
    rating: 4.8,
    experience: "14 years",
    location: "Miami",
    availability: "Available Tomorrow",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    nextSlot: "11:00 AM"
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialization: "Psychiatrist",
    rating: 4.9,
    experience: "16 years",
    location: "Seattle",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    nextSlot: "3:30 PM"
  }
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-medical bg-clip-text text-transparent">
              Meet Our Doctors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced healthcare professionals specialized in various medical fields
          </p>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group hover:shadow-2xl"
            >
              {/* Doctor image */}
              <div className="relative mb-4">
                <img 
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      doctor.availability.includes('Today') 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                    }`}
                  >
                    {doctor.availability}
                  </Badge>
                </div>
              </div>

              {/* Doctor info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.specialization}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({doctor.experience} exp)
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.location}</span>
                </div>
              </div>

              {/* Next available slot */}
              <div className="glass-subtle rounded-lg p-3 mb-4">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Next available:</span>
                  <span className="font-medium text-primary">{doctor.nextSlot}</span>
                </div>
              </div>

              {/* Action button */}
              <Button 
                className="w-full bg-gradient-medical hover:opacity-90 transition-opacity"
                size="sm"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          ))}
        </div>

        {/* View all doctors button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass hover:glass-subtle border-primary/30 hover:border-primary/50"
          >
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;