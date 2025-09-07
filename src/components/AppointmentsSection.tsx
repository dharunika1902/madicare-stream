import { Calendar, Clock, User, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    date: "Today",
    time: "2:00 PM",
    status: "confirmed",
    type: "Follow-up",
    location: "Room 301, Main Building"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialization: "Neurologist",
    date: "Tomorrow",
    time: "10:30 AM",
    status: "pending",
    type: "Consultation",
    location: "Room 205, Neurology Wing"
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    date: "Jan 15, 2024",
    time: "4:15 PM",
    status: "confirmed",
    type: "Checkup",
    location: "Room 102, Pediatrics"
  }
];

const appointmentHistory = [
  {
    id: 4,
    doctor: "Dr. James Wilson",
    specialization: "Orthopedic",
    date: "Dec 20, 2023",
    time: "1:45 PM",
    status: "completed",
    type: "Surgery Follow-up",
    notes: "Recovery progressing well"
  },
  {
    id: 5,
    doctor: "Dr. Lisa Park",
    specialization: "Dermatologist",
    date: "Dec 15, 2023",
    time: "11:00 AM",
    status: "completed",
    type: "Skin Analysis",
    notes: "Prescribed topical treatment"
  }
];

const AppointmentsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <section id="appointments" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-medical bg-clip-text text-transparent">
              Your Appointments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your healthcare appointments with ease. View, reschedule, or book new appointments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick actions */}
          <div className="lg:col-span-1">
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-medical hover:opacity-90 transition-opacity">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book New Appointment
                </Button>
                <Button variant="outline" className="w-full glass-subtle border-primary/30">
                  <Clock className="mr-2 h-4 w-4" />
                  View Available Slots
                </Button>
                <Button variant="outline" className="w-full glass-subtle border-primary/30">
                  <User className="mr-2 h-4 w-4" />
                  Find Doctor
                </Button>
                
                {/* Emergency contact */}
                <div className="glass-subtle rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-sm mb-2 text-destructive">Emergency Contact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-destructive" />
                      <span>911 (Emergency)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>help@medicare.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments tabs */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 glass">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="space-y-4 mt-6">
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="glass border-primary/20 hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{appointment.doctor}</h3>
                          <p className="text-primary font-medium">{appointment.specialization}</p>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm sm:col-span-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Cancel
                        </Button>
                        <Button size="sm" className="bg-gradient-medical hover:opacity-90 transition-opacity">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4 mt-6">
                {appointmentHistory.map((appointment) => (
                  <Card key={appointment.id} className="glass border-primary/20 hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{appointment.doctor}</h3>
                          <p className="text-primary font-medium">{appointment.specialization}</p>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      
                      {appointment.notes && (
                        <div className="glass-subtle rounded-lg p-3 mb-4">
                          <p className="text-sm"><strong>Notes:</strong> {appointment.notes}</p>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Download Report
                        </Button>
                        <Button size="sm" className="bg-gradient-medical hover:opacity-90 transition-opacity">
                          Book Follow-up
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentsSection;