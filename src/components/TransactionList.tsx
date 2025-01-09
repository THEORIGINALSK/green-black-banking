import { ArrowDownIcon } from "lucide-react";

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
          className="flex items-center justify-between p-4 bg-bank-card rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-bank-background rounded-full">
              <ArrowDownIcon className="w-4 h-4 text-bank-green" />
            </div>
            <div>
              <p className="text-white font-medium">{transaction.type}</p>
              <p className="text-sm text-white/70">{transaction.description}</p>
            </div>
          </div>
          <span className="text-bank-green font-medium">{transaction.amount}</span>
        </div>
      ))}
    </div>
  );
};