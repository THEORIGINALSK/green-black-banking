import { BankCard } from "@/components/BankCard";
import { TransactionList } from "@/components/TransactionList";
import { StatisticsChart } from "@/components/StatisticsChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

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
];

const mockChartData = [
  { date: "2 Jan", amount: 10000 },
  { date: "3 Jan", amount: 15000 },
  { date: "4 Jan", amount: 12000 },
  { date: "5 Jan", amount: 18000 },
  { date: "6 Jan", amount: 22000 },
  { date: "7 Jan", amount: 19000 },
  { date: "8 Jan", amount: 25000 },
];

const SocietyOverview = () => {
  return (
    <div className="min-h-screen bg-bank-background text-white flex">
      <div className="flex-1 p-6">
        <PageHeader 
          title="Society Overview"
          rightContent={<span className="text-bank-purple">Business Balance: $25,600 USD</span>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Business Statistics</h2>
              <StatisticsChart data={mockChartData} />
            </Card>

            <Card className="p-6 bg-bank-card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Business Transactions</h2>
                <Button variant="ghost" className="text-bank-green">
                  VIEW ALL
                </Button>
              </div>
              <TransactionList transactions={mockTransactions} />
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Business Information</h2>
              <BankCard status="BUSINESS" expiry="12/25" />
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-white/70">Business Balance</p>
                  <p className="text-2xl font-bold text-bank-purple">$25,600 USD</p>
                </div>
                <div>
                  <p className="text-white/70">Business ID</p>
                  <p className="text-lg font-medium">WIICBUS001</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-bank-card">
              <h2 className="text-xl font-semibold mb-4">Business Actions</h2>
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

export default SocietyOverview;
