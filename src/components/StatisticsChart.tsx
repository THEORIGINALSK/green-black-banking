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
              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
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
              backgroundColor: "#141414",
              border: "none",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#22C55E"
            fillOpacity={1}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};