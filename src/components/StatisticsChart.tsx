import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface StatisticsChartProps {
  data: Array<{
    date: string;
    amount: number;
  }>;
}

export const StatisticsChart = ({ data }: StatisticsChartProps) => {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--bank-green)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--bank-green)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value.toLocaleString()}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bank-card)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#FFFFFF",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="var(--bank-green)"
            fillOpacity={1}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};