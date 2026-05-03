import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const chartTheme = {
  text: "var(--text-muted)",
  grid: "var(--border-color)",
  tooltipBg: "var(--bg-card)",
};

export const SalesAreaChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
          <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
        stroke={chartTheme.grid}
      />
      <XAxis
        dataKey="name"
        stroke={chartTheme.text}
        axisLine={false}
        tickLine={false}
        dy={10}
      />
      <YAxis
        stroke={chartTheme.text}
        axisLine={false}
        tickLine={false}
        tickFormatter={(v) => `$${v}`}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: chartTheme.tooltipBg,
          borderRadius: "8px",
          border: `1px solid ${chartTheme.grid}`,
        }}
      />
      <Area
        type="monotone"
        dataKey="sales"
        stroke="var(--primary)"
        fillOpacity={1}
        fill="url(#colorSales)"
        strokeWidth={3}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export const TrafficPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={90}
        paddingAngle={8}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend iconType="circle" />
    </PieChart>
  </ResponsiveContainer>
);
