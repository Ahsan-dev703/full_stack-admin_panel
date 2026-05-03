import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Custom Tooltip for premium SaaS feel
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600, fontSize: "0.8rem" }}>
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ margin: 0, color: entry.color, fontSize: "0.8rem" }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const RevenueLineChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke="var(--border-color)"
        vertical={false}
      />
      <XAxis
        dataKey="name"
        stroke="var(--text-muted)"
        fontSize={12}
        tickLine={false}
        axisLine={false}
      />
      <YAxis
        stroke="var(--text-muted)"
        fontSize={12}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `$${value}`}
      />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="var(--primary)"
        strokeWidth={3}
        dot={{ r: 4, fill: "var(--primary)" }}
        activeDot={{ r: 6, strokeWidth: 0 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export const OrdersBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke="var(--border-color)"
        vertical={false}
      />
      <XAxis
        dataKey="name"
        stroke="var(--text-muted)"
        fontSize={12}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        stroke="var(--text-muted)"
        fontSize={12}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "var(--bg-main)" }}
      />
      <Bar
        dataKey="orders"
        fill="var(--primary)"
        radius={[4, 4, 0, 0]}
        barSize={30}
      />
    </BarChart>
  </ResponsiveContainer>
);

export const CategoryPieChart = ({ data }) => {
  const COLORS = [
    "var(--primary)",
    "var(--success)",
    "var(--warning)",
    "var(--danger)",
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};
