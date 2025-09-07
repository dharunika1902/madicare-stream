import { useState } from "react";
import { Eye, EyeOff, Lock, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface AdminLoginProps {
  children: React.ReactNode;
}

const AdminLogin = ({ children }: AdminLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (credentials.username === "admin" && credentials.password === "admin123") {
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard!",
        });
        setOpen(false);
        setCredentials({ username: "", password: "" });
        // Here you would typically redirect to admin dashboard or set auth state
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password. Try admin/admin123",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="glass border-primary/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <div className="bg-gradient-medical p-2 rounded-full">
              <Lock className="h-5 w-5 text-white" />
            </div>
            <span>Admin Login</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Demo credentials notice */}
          <div className="glass-subtle rounded-lg p-3 border border-primary/20">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Demo Credentials:</strong><br />
              Username: admin | Password: admin123
            </p>
          </div>

          {/* Username field */}
          <div className="space-y-2">
            <Label htmlFor="username" className="flex items-center space-x-2">
              <User className="h-4 w-4 text-primary" />
              <span>Username</span>
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="glass-subtle border-primary/30 focus:border-primary/50"
              required
            />
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-primary" />
              <span>Password</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="glass-subtle border-primary/30 focus:border-primary/50 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Login button */}
          <Button
            type="submit"
            className="w-full bg-gradient-medical hover:opacity-90 transition-opacity"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Signing In...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </div>
            )}
          </Button>

          {/* Additional options */}
          <div className="text-center space-y-2">
            <a
              href="#forgot"
              className="text-sm text-primary hover:text-primary-glow transition-colors"
            >
              Forgot your password?
            </a>
            <p className="text-xs text-muted-foreground">
              Need help? Contact IT support at ext. 5555
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;