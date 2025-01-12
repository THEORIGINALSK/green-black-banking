import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface Transaction {
  id: string;
  type: string;
  description: string;
  amount: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="space-y-2">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 bg-bank-card rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-bank-background to-bank-background/50 rounded-full group-hover:scale-110 transition-transform">
              {transaction.amount.startsWith("+") ? (
                <ArrowDownIcon className="w-4 h-4 text-bank-green" />
              ) : (
                <ArrowUpIcon className="w-4 h-4 text-bank-red" />
              )}
            </div>
            <div>
              <p className="text-white font-medium group-hover:text-bank-green transition-colors">{transaction.type}</p>
              <p className="text-sm text-white/70">{transaction.description}</p>
            </div>
          </div>
          <span 
            className={`font-medium transition-all duration-300 ${
              transaction.amount.startsWith("+") 
                ? "text-bank-green group-hover:text-bank-green/80" 
                : "text-bank-red group-hover:text-bank-red/80"
            }`}
          >
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
};