import { useState, useEffect } from "react";
import { Search, Calendar, Clock, MapPin, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface BookingSearchProps {
  children: React.ReactNode;
}

const specializations = [
  "All Specializations",
  "Cardiologist",
  "Neurologist", 
  "Pediatrician",
  "Orthopedic",
  "Dermatologist",
  "Psychiatrist",
  "General Medicine"
];

const timeSlots = [
  "Any Time",
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 5 PM)",
  "Evening (5 PM - 8 PM)"
];

const locations = [
  "All Locations",
  "New York",
  "Los Angeles", 
  "Chicago",
  "Houston",
  "Miami",
  "Seattle"
];

const searchResults = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    location: "New York",
    availability: "Available Today",
    nextSlot: "2:00 PM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    fee: "$150"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    rating: 4.8,
    experience: "12 years",
    location: "Los Angeles",
    availability: "Available Tomorrow",
    nextSlot: "10:30 AM",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    fee: "$200"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    rating: 4.9,
    experience: "10 years",
    location: "Chicago",
    availability: "Available Today",
    nextSlot: "4:15 PM",
    image: "https://images.unsplash.com/photo-1594824388853-5d39d18c4c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    fee: "$120"
  }
];

const BookingSearch = ({ children }: BookingSearchProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    specialization: "All Specializations",
    timeSlot: "Any Time", 
    location: "All Locations"
  });
  const [filteredResults, setFilteredResults] = useState(searchResults);

  useEffect(() => {
    let results = searchResults;

    // Filter by search query
    if (searchQuery) {
      results = results.filter(doctor => 
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by specialization
    if (filters.specialization !== "All Specializations") {
      results = results.filter(doctor => doctor.specialization === filters.specialization);
    }

    // Filter by location
    if (filters.location !== "All Locations") {
      results = results.filter(doctor => doctor.location === filters.location);
    }

    setFilteredResults(results);
  }, [searchQuery, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="glass border-primary/20 max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <div className="bg-gradient-medical p-2 rounded-full">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span>Search & Book Appointment</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by doctor name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass-subtle border-primary/30 focus:border-primary/50"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center space-x-2">
                <Filter className="h-4 w-4 text-primary" />
                <span>Specialization</span>
              </label>
              <Select value={filters.specialization} onValueChange={(value) => handleFilterChange("specialization", value)}>
                <SelectTrigger className="glass-subtle border-primary/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass border-primary/20">
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Preferred Time</span>
              </label>
              <Select value={filters.timeSlot} onValueChange={(value) => handleFilterChange("timeSlot", value)}>
                <SelectTrigger className="glass-subtle border-primary/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass border-primary/20">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Location</span>
              </label>
              <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                <SelectTrigger className="glass-subtle border-primary/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass border-primary/20">
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">
                Available Doctors ({filteredResults.length} found)
              </h3>
              {searchQuery && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="glass-subtle"
                >
                  Clear Search
                </Button>
              )}
            </div>

            {filteredResults.length === 0 ? (
              <div className="text-center py-8">
                <div className="glass-subtle rounded-lg p-6">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No doctors found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredResults.map((doctor) => (
                  <div key={doctor.id} className="glass-subtle rounded-lg p-4 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                      {/* Doctor image */}
                      <img 
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      
                      {/* Doctor info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-lg">{doctor.name}</h4>
                            <p className="text-primary font-medium">{doctor.specialization}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{doctor.rating}</span>
                              </div>
                              <span>{doctor.experience}</span>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{doctor.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{doctor.fee}</div>
                            <Badge 
                              variant="secondary"
                              className={doctor.availability.includes('Today') 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                              }
                            >
                              {doctor.availability}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Next slot and book button */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">Next slot:</span>
                            <span className="font-medium text-primary">{doctor.nextSlot}</span>
                          </div>
                          
                          <Button 
                            size="sm" 
                            className="bg-gradient-medical hover:opacity-90 transition-opacity"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingSearch;