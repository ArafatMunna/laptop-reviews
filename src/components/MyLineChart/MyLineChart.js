import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import useChartData from "../../hooks/useChartData";
import "./MyLineChart.css";

const MyLineChart = () => {
    const [data, setData] = useChartData();
    return (
        <ResponsiveContainer width="90%"
        height={250}>
            <LineChart
                className="line-chart"
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;
