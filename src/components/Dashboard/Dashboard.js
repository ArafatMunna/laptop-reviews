import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="container">
            <div className="chart-container my-5">
                <div>
                    <h2 className="text-center mb-3 text-primary">
                        Month Wise Sell
                    </h2>
                    <MyLineChart />
                </div>
                <div>
                    <h2 className="text-center mb-3 text-primary">
                        Investment VS Revenue
                    </h2>
                    <MyAreaChart />
                </div>
                <div>
                    <h2 className="text-center mb-3 text-primary">
                        Investment VS Revenue
                    </h2>
                    <MyBarChart />
                </div>
                <div>
                    <h2 className="text-center mb-3 text-primary">
                        Investment VS Revenue
                    </h2>
                    <MyPieChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
