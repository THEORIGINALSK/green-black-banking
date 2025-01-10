import { Card } from "@/components/ui/card";

interface BankCardProps {
  status: string;
  expiry: string;
}

export const BankCard = ({ status, expiry }: BankCardProps) => {
  return (
    <Card className="w-full bg-gradient-to-br from-bank-card via-bank-card/90 to-accent/10 p-6 relative overflow-hidden backdrop-blur-sm shadow-xl border border-white/10 group transition-all duration-300 hover:shadow-accent/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Holographic effect */}
      <div className="absolute -right-24 -top-24 w-48 h-48 bg-gradient-to-br from-accent/30 via-bank-purple/20 to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity" />
      
      {/* Card content */}
      <div className="flex flex-col gap-4 relative">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent font-orbitron tracking-wider">
            Wiic City Bank
          </span>
          <span className="text-sm text-white/70 font-medium">Platinum</span>
        </div>

        {/* Chip */}
        <div className="w-12 h-9 bg-gradient-to-br from-yellow-200/80 via-yellow-400/80 to-yellow-600/80 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          <div className="grid grid-cols-3 grid-rows-3 gap-[2px] h-full w-full p-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-yellow-900/30 rounded-sm" />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-white/70">Status</div>
          <div className="text-xl font-bold text-accent font-orbitron tracking-wider">
            {status}
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <span className="text-sm text-white/70 font-orbitron">
            {expiry}
          </span>
        </div>

        {/* Network logo */}
        <div className="absolute bottom-0 right-0">
          <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  );
};