import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bank-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-bank-card">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            <span className="text-bank-green">WIIC CITY</span>
            <br />
            <span className="text-bank-purple">BANKING</span>
          </h1>
          <p className="text-gray-400">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-bank-background border-gray-700"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-bank-background border-gray-700"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-bank-green hover:bg-bank-green/90 text-bank-background"
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;