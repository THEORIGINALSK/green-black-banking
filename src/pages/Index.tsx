import { BellIcon } from "lucide-react";
import { BankCard } from "@/components/BankCard";
import { TransactionList } from "@/components/TransactionList";
import { StatisticsChart } from "@/components/StatisticsChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mockTransactions = [
  {
    id: "1",
    type: "From Salary",
    description: "Received",
    amount: "+ 700 EUR",
  },
  {
    id: "2",
    type: "From Salary",
    description: "Received",
    amount: "+ 700 EUR",
  },
  {
    id: "3",
    type: "From Salary",
    description: "Received",
    amount: "+ 700 EUR",
  },
];

const mockChartData = [
  { date: "2 Jan", amount: 0 },
  { date: "3 Jan", amount: 0 },
  { date: "4 Jan", amount: 0 },
  { date: "5 Jan", amount: 0 },
  { date: "6 Jan", amount: 0 },
  { date: "7 Jan", amount: 0 },
  { date: "8 Jan", amount: -200000000 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-bank-background text-white">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-accent">Wallet: 2,600 USD</span>
            <Button variant="ghost" size="icon">
              <BellIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Statistics */}
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Statistics</h2>
              <StatisticsChart data={mockChartData} />
            </Card>

            {/* Transactions */}
            <Card className="p-6 bg-bank-card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Last Transactions</h2>
                <Button variant="outline" className="text-accent">
                  VIEW ALL
                </Button>
              </div>
              <TransactionList transactions={mockTransactions} />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Information Card */}
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Informations</h2>
              <BankCard status="ACTIVE" expiry="08/25" />
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-white/70">Balance</p>
                  <p className="text-2xl font-bold text-accent">6,994,868,658 EUR</p>
                </div>
                <div>
                  <p className="text-white/70">IBAN</p>
                  <p className="text-lg font-medium">PROTOEMISSA</p>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-bank-green hover:bg-bank-green/90">
                  Deposit
                </Button>
                <Button className="w-full bg-bank-purple hover:bg-bank-purple/90">
                  Withdraw
                </Button>
                <Button className="w-full bg-bank-card hover:bg-bank-card/90 border border-white/10">
                  Transfer
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;