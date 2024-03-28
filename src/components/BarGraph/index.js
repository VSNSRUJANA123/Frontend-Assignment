import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const BarGraph = (props) => {
  const { populationData } = props;

  return (
    <ResponsiveContainer>
      <LineChart
        width={730}
        height={250}
        data={populationData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ID Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Nation" stroke="#8884d8" />
        <Line type="monotone" dataKey="Population" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
