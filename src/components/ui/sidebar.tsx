import * as React from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Settings, BarChart2, LogOut, Building2 } from "lucide-react"

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-bank-background border-r border-white/10 p-4 flex flex-col">
      {/* Logo Section */}
      <div className="text-center relative mb-8">
        <h1 className="text-2xl font-bold relative z-10">
          <span className="text-bank-green inline-block animate-pulse hover:animate-none relative after:content-[''] after:absolute after:-inset-2 after:bg-bank-green/20 after:rounded-lg after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity">
            WIIC CITY
          </span>
          <br />
          <span className="text-bank-purple inline-block animate-pulse hover:animate-none relative after:content-[''] after:absolute after:-inset-2 after:bg-bank-purple/20 after:rounded-lg after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition-opacity">
            BANKING
          </span>
        </h1>
        <div className="absolute -inset-4 bg-gradient-to-r from-bank-green/0 via-bank-green/10 to-bank-purple/0 blur-lg opacity-50 animate-pulse"></div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 space-y-8">
        {/* Personal Section */}
        <div className="space-y-4">
          <h2 className="text-blue-400 text-sm font-medium px-2">Personal</h2>
          <div className="space-y-1">
            <NavLink to="/" icon={Building2}>Overview</NavLink>
            <NavLink to="/transactions" icon={BarChart2}>Transactions</NavLink>
            <NavLink to="/settings" icon={Settings}>Settings</NavLink>
          </div>
        </div>

        {/* Society Section */}
        <div className="space-y-4">
          <h2 className="text-blue-400 text-sm font-medium px-2">Society</h2>
          <div className="space-y-1">
            <NavLink to="/society" icon={Building2}>Overview</NavLink>
            <NavLink to="/society/transactions" icon={BarChart2}>Transactions</NavLink>
          </div>
        </div>
      </nav>

      {/* Logout Section */}
      <div className="pt-4 border-t border-white/10">
        <button className="w-full flex items-center px-2 py-2 text-red-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5 group">
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
      className="flex items-center px-2 py-2 text-gray-300 hover:text-bank-green transition-colors rounded-lg hover:bg-white/5 group"
    >
      <Icon className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
      <span className="transition-colors">{children}</span>
    </Link>
  )
}