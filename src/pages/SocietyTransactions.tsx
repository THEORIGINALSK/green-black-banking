import { TransactionList } from "@/components/TransactionList";

const mockTransactions = [
  {
    id: "1",
    type: "Income",
    description: "Business Revenue",
    amount: "+ $5,000 USD",
  },
  {
    id: "2",
    type: "Expense",
    description: "Employee Salary",
    amount: "- $2,500 USD",
  },
  {
    id: "3",
    type: "Transfer",
    description: "To Main Account",
    amount: "- $1,000 USD",
  },
  {
    id: "4",
    type: "Income",
    description: "Service Fee",
    amount: "+ $3,200 USD",
  },
  {
    id: "5",
    type: "Expense",
    description: "Supplies",
    amount: "- $800 USD",
  },
];

const SocietyTransactions = () => {
  return (
    <div className="min-h-screen bg-bank-background text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Society Transactions</h1>
        <span className="text-bank-purple">Business Balance: $25,600 USD</span>
      </div>
      
      <div className="bg-bank-card p-6 rounded-lg">
        <TransactionList transactions={mockTransactions} />
      </div>
    </div>
  );
};

export default SocietyTransactions;