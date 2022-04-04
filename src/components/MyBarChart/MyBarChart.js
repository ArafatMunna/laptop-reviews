import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import useChartData from "../../hooks/useChartData";

const MyBarChart = () => {
    const [data, setData] = useChartData();
    return (
        <ResponsiveContainer width="90%" height={250}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;
