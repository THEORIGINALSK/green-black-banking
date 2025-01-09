import { BellIcon, LogOutIcon } from "lucide-react";
import { BankCard } from "@/components/BankCard";
import { TransactionList } from "@/components/TransactionList";
import { StatisticsChart } from "@/components/StatisticsChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

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
];

const mockChartData = [
  { date: "2 Jan", amount: 1000 },
  { date: "3 Jan", amount: 1500 },
  { date: "4 Jan", amount: 1200 },
  { date: "5 Jan", amount: 1800 },
  { date: "6 Jan", amount: 2200 },
  { date: "7 Jan", amount: 1900 },
  { date: "8 Jan", amount: 2500 },
];

const Index = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-bank-background text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-bank-card p-6 flex flex-col">
        <div className="mb-10">
          <Link to="/" className="block">
            <h1 className="text-2xl font-bold">
              <span className="text-bank-green">WIIC CITY</span>
              <br />
              <span className="text-bank-purple">BANKING</span>
            </h1>
          </Link>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-muted text-sm">Personal</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-bank-green" onClick={() => navigate('/')}>
                📊 Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/transactions')}>
                💱 Transactions
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/settings')}>
                ⚙️ Settings
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-muted text-sm">Society</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/society')}>
                📊 Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/society/transactions')}>
                💱 Transactions
              </Button>
            </div>
          </div>
        </div>

        <Button 
          variant="ghost" 
          className="mt-auto text-bank-red w-full justify-start"
          onClick={logout}
        >
          <LogOutIcon className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-bank-purple">Wallet: $2,600 USD</span>
            <Button variant="ghost" size="icon">
              <BellIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Statistics</h2>
              <StatisticsChart data={mockChartData} />
            </Card>

            <Card className="p-6 bg-bank-card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Last Transactions</h2>
                <Button 
                  variant="ghost" 
                  className="text-bank-green"
                  onClick={() => navigate('/transactions')}
                >
                  VIEW ALL
                </Button>
              </div>
              <TransactionList transactions={mockTransactions} />
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Information</h2>
              <BankCard status="ACTIVE" expiry="08/25" />
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-white/70">Balance</p>
                  <p className="text-2xl font-bold text-bank-purple">$6,994,868,658 USD</p>
                </div>
                <div>
                  <p className="text-white/70">IBAN</p>
                  <p className="text-lg font-medium">WIICCITYBANK</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-bank-green hover:bg-bank-green/90 text-bank-background">
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