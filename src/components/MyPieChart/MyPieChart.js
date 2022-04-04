import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import useChartData from "../../hooks/useChartData";

const MyPieChart = () => {
    const [data, setData] = useChartData();
    return (
        <ResponsiveContainer width="90%" height={250}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="investment"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                />
                <Pie
                    data={data}
                    dataKey="revenue"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default MyPieChart;
