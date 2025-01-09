import { Card } from "@/components/ui/card";

interface BankCardProps {
  status: string;
  expiry: string;
}

export const BankCard = ({ status, expiry }: BankCardProps) => {
  return (
    <Card className="w-full bg-gradient-to-br from-bank-card to-accent/10 p-6 relative overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent">Wiic City Bank</span>
          <span className="text-sm text-white/70">Platinum</span>
        </div>
        <div className="mt-4">
          <div className="text-sm text-white/70">Status</div>
          <div className="text-xl font-bold text-accent">{status}</div>
        </div>
        <div className="flex justify-end mt-2">
          <span className="text-sm text-white/70">{expiry}</span>
        </div>
      </div>
    </Card>
  );
};