import React from "react";
import {
    Area,
    AreaChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import useChartData from "../../hooks/useChartData";

const MyAreaChart = () => {
    const [data, setData] = useChartData();
    return (
        <AreaChart width={650} height={400} data={data}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
            />
            <Area
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
            />
            <XAxis dataKey={"month"} />
            <Tooltip />
            <YAxis />
        </AreaChart>
    );
};

export default MyAreaChart;
