import { Card } from "@/components/ui/card";

interface BankCardProps {
  status: string;
  expiry: string;
}

export const BankCard = ({ status, expiry }: BankCardProps) => {
  return (
    <Card className="w-full bg-gradient-to-br from-bank-card to-bank-card/50 p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">Proto Bank</span>
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