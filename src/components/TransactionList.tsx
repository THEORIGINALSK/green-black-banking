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
          className="flex items-center justify-between p-4 bg-bank-card rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-bank-background rounded-full">
              {transaction.amount.startsWith("+") ? (
                <ArrowDownIcon className="w-4 h-4 text-bank-green" />
              ) : (
                <ArrowUpIcon className="w-4 h-4 text-bank-red" />
              )}
            </div>
            <div>
              <p className="text-white font-medium">{transaction.type}</p>
              <p className="text-sm text-white/70">{transaction.description}</p>
            </div>
          </div>
          <span className={transaction.amount.startsWith("+") ? "text-bank-green" : "text-bank-red"} style={{ fontWeight: 500 }}>
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
};