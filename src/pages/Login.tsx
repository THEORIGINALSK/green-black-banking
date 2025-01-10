import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bank-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-bank-green">WIIC CITY</span>
            <br />
            <span className="text-bank-purple">BANKING</span>
          </h1>
          <p className="text-gray-400">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-bank-card border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-bank-green focus:ring-bank-green"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-bank-card border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-bank-green focus:ring-bank-green"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-bank-green hover:bg-bank-green/90 text-bank-background font-semibold"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;