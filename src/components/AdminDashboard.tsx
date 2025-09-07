import { Users, Calendar, TrendingUp, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "10,423",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Today's Appointments",
      value: "145",
      change: "+8%",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Revenue",
      value: "$24,567",
      change: "+15%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Pending Appointments",
      value: "23",
      change: "-5%",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      time: "10:00 AM",
      status: "confirmed",
      type: "Consultation"
    },
    {
      id: 2,
      patient: "Mary Brown",
      doctor: "Dr. Michael Chen",
      time: "11:30 AM",
      status: "pending",
      type: "Follow-up"
    },
    {
      id: 3,
      patient: "Robert Davis",
      doctor: "Dr. Emily Rodriguez",
      time: "2:15 PM",
      status: "completed",
      type: "Checkup"
    }
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      status: "available",
      appointments: 12
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Neurologist",
      status: "busy",
      appointments: 8
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      status: "available",
      appointments: 15
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'available':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'busy':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-medical bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive management system for healthcare administration
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="glass border-primary/20 hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {' '}from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard tabs */}
        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass mb-8">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Recent Appointments</h3>
              <Button className="bg-gradient-medical hover:opacity-90 transition-opacity">
                <Plus className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </div>

            <div className="grid gap-4">
              {recentAppointments.map((appointment) => (
                <Card key={appointment.id} className="glass border-primary/20 hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold">{appointment.patient}</h4>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          with {appointment.doctor} • {appointment.type}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {appointment.time}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Doctor Management</h3>
              <Button className="bg-gradient-medical hover:opacity-90 transition-opacity">
                <Plus className="mr-2 h-4 w-4" />
                Add Doctor
              </Button>
            </div>

            <div className="grid gap-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="glass border-primary/20 hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold">{doctor.name}</h4>
                          <Badge className={getStatusColor(doctor.status)}>
                            {doctor.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium">
                          {doctor.specialization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {doctor.appointments} appointments today
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Schedule
                        </Button>
                        <Button variant="outline" size="sm" className="glass-subtle">
                          Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="text-center py-20">
              <div className="glass rounded-3xl p-12 max-w-md mx-auto">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  Detailed analytics and reporting features coming soon
                </p>
                <Button className="bg-gradient-medical hover:opacity-90 transition-opacity">
                  Request Demo
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdminDashboard;