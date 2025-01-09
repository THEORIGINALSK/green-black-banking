import { TransactionList } from "@/components/TransactionList";
import { PageHeader } from "@/components/PageHeader";

const mockTransactions = [
  {
    id: "1",
    type: "Deposit",
    description: "ATM Deposit",
    amount: "+ $700 USD",
  },
  {
    id: "2",
    type: "Withdraw",
    description: "ATM Withdrawal",
    amount: "- $300 USD",
  },
  {
    id: "3",
    type: "Transfer",
    description: "To John Doe",
    amount: "- $150 USD",
  },
  {
    id: "4",
    type: "Deposit",
    description: "Bank Transfer",
    amount: "+ $1,200 USD",
  },
  {
    id: "5",
    type: "Withdraw",
    description: "ATM Withdrawal",
    amount: "- $500 USD",
  },
];

const Transactions = () => {
  return (
    <div className="min-h-screen bg-bank-background text-white p-6">
      <PageHeader 
        title="Transactions"
        rightContent={<span className="text-bank-purple">Wallet: $2,600 USD</span>}
      />
      
      <div className="bg-bank-card p-6 rounded-lg">
        <TransactionList transactions={mockTransactions} />
      </div>
    </div>
  );
};

export default Transactions;