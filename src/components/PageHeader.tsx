import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  rightContent?: React.ReactNode;
}

export const PageHeader = ({ title, rightContent }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="text-white hover:text-bank-green"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      {rightContent}
    </div>
  );
};