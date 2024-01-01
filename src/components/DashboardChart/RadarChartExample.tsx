import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    category: "Donor Engagement",
    Admin: 80,
    User: 90,
    fullMark: 100,
  },
  {
    category: "Blood Collection",
    Admin: 70,
    User: 85,
    fullMark: 100,
  },
  {
    category: "Inventory Management",
    Admin: 95,
    User: 75,
    fullMark: 100,
  },
  {
    category: "Campaign Effectiveness",
    Admin: 85,
    User: 80,
    fullMark: 100,
  },
  {
    category: "Donation Centers",
    Admin: 90,
    User: 88,
    fullMark: 100,
  },
  {
    category: "Community Outreach",
    Admin: 78,
    User: 92,
    fullMark: 100,
  },
];

const RadarChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Total Donate"
          dataKey="Admin"
          stroke="#5483CA"
          fill="#5483CA"
          fillOpacity={0.6}
        />
        <Radar
          name="In Stock"
          dataKey="User"
          stroke="#CA5462"
          fill="#CA5462"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartExample;
