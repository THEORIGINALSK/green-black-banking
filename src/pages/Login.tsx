import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await register(username, password);
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
      } else {
        await login(username, password);
      }
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bank-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center relative">
          <h1 className="text-4xl font-bold text-white mb-2 relative z-10 transition-transform hover:scale-105 duration-300">
            <span className="text-bank-purple inline-block animate-pulse hover:animate-none relative after:content-[''] after:absolute after:-inset-2 after:bg-bank-purple/20 after:rounded-lg after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity">
              WIIC CITY
            </span>
            <br />
            <span className="text-bank-purple inline-block animate-pulse hover:animate-none relative after:content-[''] after:absolute after:-inset-2 after:bg-bank-purple/20 after:rounded-lg after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity">
              BANKING
            </span>
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-bank-green/0 via-bank-green/10 to-bank-purple/0 blur-lg opacity-50 animate-pulse"></div>
          <p className="text-gray-400 relative z-10">
            {isRegistering ? "Create a new account" : "Please login to continue"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-bank-card border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-bank-purple focus:ring-bank-purple"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-bank-card border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-bank-purple focus:ring-bank-purple"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-bank-purple hover:bg-bank-purple/90 text-bank-background font-semibold"
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-bank-purple hover:text-bank-purple/90 text-sm font-medium"
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;