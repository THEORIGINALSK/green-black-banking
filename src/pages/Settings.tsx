import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BellIcon, ShieldIcon, UserIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-bank-background text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid gap-6">
        <Card className="p-6 bg-bank-card">
          <div className="flex items-center gap-4 mb-4">
            <UserIcon className="text-bank-purple" />
            <h2 className="text-xl font-semibold">Account Preferences</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Display Name</label>
              <input
                type="text"
                className="w-full bg-bank-background border border-white/10 rounded-lg p-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Language</label>
              <select className="w-full bg-bank-background border border-white/10 rounded-lg p-2">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-bank-card">
          <div className="flex items-center gap-4 mb-4">
            <ShieldIcon className="text-bank-purple" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            <Button className="w-full bg-bank-card hover:bg-bank-card/90 border border-white/10">
              Change PIN
            </Button>
            <Button className="w-full bg-bank-card hover:bg-bank-card/90 border border-white/10">
              Two-Factor Authentication
            </Button>
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
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Login Alerts</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;