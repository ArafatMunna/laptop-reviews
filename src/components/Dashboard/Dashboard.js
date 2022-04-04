import React from "react";
import MyBarChart from "../MyAreaChart/MyAreaChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="container">
            <div className="chart-container my-5">
                <div>
                    <h2 className="text-center mb-5 text-primary">
                        Month Wise Sell
                    </h2>
                    <MyLineChart />
                </div>
                <div>
                <h2 className="text-center mb-5 text-primary">
                        Investment VS Revenue
                    </h2>
                    <MyBarChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
