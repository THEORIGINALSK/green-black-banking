import { BellIcon, LogOutIcon, Plus, Minus, ArrowRight } from "lucide-react";
import { BankCard } from "@/components/BankCard";
import { TransactionList } from "@/components/TransactionList";
import { StatisticsChart } from "@/components/StatisticsChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const QUICK_AMOUNTS = [100, 500, 1000, 5000];

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
  const { toast } = useToast();
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [selectedQuickAmount, setSelectedQuickAmount] = useState<number | null>(null);
  const [balance, setBalance] = useState(2600);

  const handleQuickAmountSelect = (value: number) => {
    setSelectedQuickAmount(value);
    setAmount(value.toString());
  };

  const handleDeposit = () => {
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount) || numAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid positive number",
        variant: "destructive",
      });
      return;
    }

    // Update balance
    setBalance(prev => prev + numAmount);

    // Show success message with confetti effect
    toast({
      title: "💸 Deposit successful!",
      description: `Added $${numAmount.toLocaleString()} to your account`,
    });

    // Reset and close
    setIsDepositOpen(false);
    setAmount("");
    setSelectedQuickAmount(null);
  };

  const handleWithdraw = () => {
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount) || numAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid positive number",
        variant: "destructive",
      });
      return;
    }

    if (numAmount > balance) {
      toast({
        title: "❌ Insufficient funds",
        description: "You don't have enough money in your account",
        variant: "destructive",
      });
      return;
    }

    // Update balance
    setBalance(prev => prev - numAmount);

    // Show success message
    toast({
      title: "💸 Withdrawal successful!",
      description: `Withdrawn $${numAmount.toLocaleString()} from your account`,
    });

    // Reset and close
    setIsWithdrawOpen(false);
    setAmount("");
    setSelectedQuickAmount(null);
  };

  const handleTransfer = () => {
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount) || numAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid positive number",
        variant: "destructive",
      });
      return;
    }

    if (!recipientId.trim()) {
      toast({
        title: "Invalid recipient",
        description: "Please enter a recipient ID",
        variant: "destructive",
      });
      return;
    }

    if (numAmount > balance) {
      toast({
        title: "❌ Insufficient funds",
        description: "You don't have enough money in your account",
        variant: "destructive",
      });
      return;
    }

    // Update balance
    setBalance(prev => prev - numAmount);

    // Show success message
    toast({
      title: "💸 Transfer successful!",
      description: `Transferred $${numAmount.toLocaleString()} to ID: ${recipientId}`,
    });

    // Reset and close
    setIsTransferOpen(false);
    setAmount("");
    setRecipientId("");
    setSelectedQuickAmount(null);
  };

  return (
    <div className="min-h-screen bg-bank-background text-white flex">
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
                <Button 
                  className="w-full bg-bank-green hover:bg-bank-green/90 text-bank-background group transition-all duration-300"
                  onClick={() => setIsDepositOpen(true)}
                >
                  <Plus className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  Deposit
                </Button>
                <Button 
                  className="w-full bg-bank-purple hover:bg-bank-purple/90"
                  onClick={() => setIsWithdrawOpen(true)}
                >
                  <Minus className="mr-2 h-4 w-4" />
                  Withdraw
                </Button>
                <Button 
                  className="w-full bg-bank-card hover:bg-bank-card/90 border border-white/10"
                  onClick={() => setIsTransferOpen(true)}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Transfer
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={isDepositOpen} onOpenChange={setIsDepositOpen}>
        <DialogContent className="bg-bank-card border-bank-green/20 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <Plus className="h-5 w-5 text-bank-green" />
              Deposit Money
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Choose an amount to deposit into your account
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-2">
              {QUICK_AMOUNTS.map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant="outline"
                  className={`h-12 text-lg transition-all duration-300 ${
                    selectedQuickAmount === quickAmount 
                      ? 'bg-bank-green text-bank-background border-bank-green'
                      : 'hover:border-bank-green hover:text-bank-green'
                  }`}
                  onClick={() => handleQuickAmountSelect(quickAmount)}
                >
                  ${quickAmount}
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <Input
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setSelectedQuickAmount(null);
                }}
                placeholder="Enter custom amount"
                className="bg-bank-background border-white/10 text-white placeholder:text-white/40"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">$</span>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-bank-green hover:bg-bank-green/90 text-bank-background group"
              onClick={handleDeposit}
              disabled={!amount}
            >
              Confirm Deposit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Withdraw Dialog */}
      <Dialog open={isWithdrawOpen} onOpenChange={setIsWithdrawOpen}>
        <DialogContent className="bg-bank-card border-bank-purple/20 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <Minus className="h-5 w-5 text-bank-purple" />
              Withdraw Money
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Choose an amount to withdraw from your account
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-2">
              {QUICK_AMOUNTS.map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant="outline"
                  className={`h-12 text-lg transition-all duration-300 ${
                    selectedQuickAmount === quickAmount 
                      ? 'bg-bank-purple text-bank-background border-bank-purple'
                      : 'hover:border-bank-purple hover:text-bank-purple'
                  }`}
                  onClick={() => handleQuickAmountSelect(quickAmount)}
                >
                  ${quickAmount}
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <Input
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setSelectedQuickAmount(null);
                }}
                placeholder="Enter custom amount"
                className="bg-bank-background border-white/10 text-white placeholder:text-white/40"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">$</span>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-bank-purple hover:bg-bank-purple/90 text-bank-background group"
              onClick={handleWithdraw}
              disabled={!amount}
            >
              Confirm Withdrawal
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Transfer Dialog */}
      <Dialog open={isTransferOpen} onOpenChange={setIsTransferOpen}>
        <DialogContent className="bg-bank-card border-white/10 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-white" />
              Transfer Money
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Enter the recipient's ID and the amount to transfer
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6">
            <div className="relative">
              <Input
                type="text"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                placeholder="Enter recipient ID"
                className="bg-bank-background border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {QUICK_AMOUNTS.map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant="outline"
                  className={`h-12 text-lg transition-all duration-300 ${
                    selectedQuickAmount === quickAmount 
                      ? 'bg-white text-bank-background border-white'
                      : 'hover:border-white hover:text-white'
                  }`}
                  onClick={() => handleQuickAmountSelect(quickAmount)}
                >
                  ${quickAmount}
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <Input
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setSelectedQuickAmount(null);
                }}
                placeholder="Enter custom amount"
                className="bg-bank-background border-white/10 text-white placeholder:text-white/40"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">$</span>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-white hover:bg-white/90 text-bank-background group"
              onClick={handleTransfer}
              disabled={!amount || !recipientId}
            >
              Confirm Transfer
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
