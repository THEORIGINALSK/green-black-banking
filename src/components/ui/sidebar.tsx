import * as React from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Settings, BarChart2, LogOut, Building2 } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export function Sidebar() {
  const { hasSociety } = useAuth();

  return (
    <div className="h-screen w-64 bg-bank-background border-r border-white/10 flex flex-col">
      {/* Top Navigation Tabs */}
      <div className="flex flex-col p-4 border-b border-white/10">
        <div className="text-center relative mb-8">
          <h1 className="text-3xl font-bold relative z-10">
            <span className="text-bank-purple inline-block animate-pulse hover:animate-none relative after:content-[''] after:absolute after:-inset-2 after:bg-bank-purple/20 after:rounded-lg after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity">
              WIIC CITY
            </span>
            <br />
            <span className="text-bank-purple inline-block animate-pulse hover:animate-none relative after:content-[''] after:absolute after:-inset-2 after:bg-bank-purple/20 after:rounded-lg after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity">
              BANKING
            </span>
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-bank-purple/0 via-bank-purple/10 to-bank-purple/0 blur-lg opacity-50 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button className="w-full py-3 px-4 rounded-lg bg-bank-card text-bank-green border border-bank-green/20 hover:bg-bank-green/10 transition-all text-lg">
            Personal
          </button>
          {hasSociety && (
            <button className="w-full py-3 px-4 rounded-lg bg-bank-card text-bank-purple border border-bank-purple/20 hover:bg-bank-purple/10 transition-all text-lg">
              Society
            </button>
          )}
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-6">
          {/* Personal Section */}
          <div className="space-y-2">
            <NavLink to="/" icon={Building2}>Overview</NavLink>
            <NavLink to="/transactions" icon={BarChart2}>Transactions</NavLink>
            <NavLink to="/settings" icon={Settings}>Settings</NavLink>
          </div>

          {/* Society Section - Only show if user has society access */}
          {hasSociety && (
            <div className="space-y-2">
              <NavLink to="/society" icon={Building2}>Overview</NavLink>
              <NavLink to="/society/transactions" icon={BarChart2}>Transactions</NavLink>
            </div>
          )}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center px-4 py-3 text-red-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5 group text-lg">
          <LogOut className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-1" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

interface NavLinkProps {
  to: string
  icon: React.ElementType
  children: React.ReactNode
}

const NavLink = ({ to, icon: Icon, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-3 text-gray-300 hover:text-bank-green transition-colors rounded-lg hover:bg-white/5 group text-lg"
    >
      <Icon className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" />
      <span className="transition-colors">{children}</span>
    </Link>
  )
}