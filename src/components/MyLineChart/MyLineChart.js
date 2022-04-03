import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChartData from "../../hooks/useChartData";

const MyLineChart = () => {
    const [data, setData] = useChartData();
    return (
        <LineChart width={650} height={400} data={data}>
            <Line dataKey={"sell"} />
            <XAxis dataKey={"month"} />
            <Tooltip />
            <YAxis />
        </LineChart>
    );
};

export default MyLineChart;
