import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BellIcon, ShieldIcon, UserIcon } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Settings = () => {
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState("John Doe");
  const [language, setLanguage] = useState("english");
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  const handleDisplayNameChange = (newName: string) => {
    setDisplayName(newName);
    toast({
      title: "Display name updated",
      description: "Your display name has been successfully updated.",
    });
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    toast({
      title: "Language updated",
      description: `Language has been changed to ${newLanguage}.`,
    });
  };

  const handlePINChange = () => {
    toast({
      title: "PIN Change",
      description: "PIN change functionality will be implemented soon.",
    });
  };

  const handleNotificationToggle = (type: 'transaction' | 'login', enabled: boolean) => {
    if (type === 'transaction') {
      setTransactionAlerts(enabled);
    } else {
      setLoginAlerts(enabled);
    }
    toast({
      title: "Notification settings updated",
      description: `${type === 'transaction' ? 'Transaction' : 'Login'} alerts have been ${enabled ? 'enabled' : 'disabled'}.`,
    });
  };

  return (
    <div className="min-h-screen bg-bank-background text-white p-6">
      <PageHeader title="Settings" />

      <div className="grid gap-6">
        <Card className="p-6 bg-bank-card">
          <div className="flex items-center gap-4 mb-4">
            <UserIcon className="text-bank-purple" />
            <h2 className="text-xl font-semibold">Account Preferences</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Display Name</label>
              <Input
                type="text"
                value={displayName}
                onChange={(e) => handleDisplayNameChange(e.target.value)}
                className="bg-bank-background border-white/10"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Language</label>
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="bg-bank-background border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-bank-card">
          <div className="flex items-center gap-4 mb-4">
            <ShieldIcon className="text-bank-purple" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-bank-card hover:bg-bank-card/90 border border-white/10"
                  onClick={handlePINChange}
                >
                  Change PIN
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-bank-card border-white/10">
                <DialogHeader>
                  <DialogTitle>Change PIN</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 p-4">
                  <Input type="password" placeholder="Current PIN" className="bg-bank-background border-white/10" />
                  <Input type="password" placeholder="New PIN" className="bg-bank-background border-white/10" />
                  <Input type="password" placeholder="Confirm New PIN" className="bg-bank-background border-white/10" />
                  <Button className="w-full" onClick={handlePINChange}>Update PIN</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        <Card className="p-6 bg-bank-card">
          <div className="flex items-center gap-4 mb-4">
            <BellIcon className="text-bank-purple" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Transaction Alerts</span>
              <Switch
                checked={transactionAlerts}
                onCheckedChange={(checked) => handleNotificationToggle('transaction', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Login Alerts</span>
              <Switch
                checked={loginAlerts}
                onCheckedChange={(checked) => handleNotificationToggle('login', checked)}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;