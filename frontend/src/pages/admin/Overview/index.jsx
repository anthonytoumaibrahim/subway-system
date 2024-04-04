// React stuff
import { useMemo, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Styles
import "./styles.css";

// Components
import Statistic from "./components/Statistic";

// Icons
import branches_icon from "../../../assets/icons/admin-icons/branches.svg";
import coins_icon from "../../../assets/icons/admin-icons/coins.svg";
import users_icon from "../../../assets/icons/admin-icons/users.svg";
import subway_icon from "../../../assets/icons/admin-icons/subway.svg";

// Request
import { sendRequest } from "../../../core/tools/remote/request";
import { requestMethods } from "../../../core/enums/requestMethods";

// Charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const [statistics, setStatistics] = useState({
    users_count: 0,
    branches_count: 0,
    rides_count: 0,
    revenue_count: 0,
  });
  const [chartData, setChartData] = useState({
    labels: [],
    revenue: {},
    users: {},
  });

  // Get statistics from API on load
  const getStatistics = () => {
    sendRequest(requestMethods.GET, "/admin/get-statistics")
      .then((response) => {
        const data = response.data;
        const { users, branches, rides, revenue } = data.counts;
        setStatistics({
          users_count: users ?? 0,
          branches_count: branches ?? 0,
          rides_count: rides ?? 0,
          revenue_count: revenue ?? 0,
        });
        setChartData({
          labels: data.chart_data.labels,
          revenue: data.chart_data.revenue,
          users: data.chart_data.users,
        });
      })
      .catch((err) => toast.error("Failed to load statistics."));
  };
  useEffect(() => getStatistics(), []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Revenue",
      },
    },
  };
  const labels = chartData.labels;
  const data = {
    labels,
    datasets: [
      {
        label: "Daily Revenue",
        data: labels.map((date) => chartData.revenue?.[date] ?? 0),
        borderColor: "#66b896",
        backgroundColor: "#a1eece",
      },
      {
        label: "User Sign Ups",
        data: labels.map((date) => chartData.users?.[date] ?? 0),
        borderColor: "#ff6384",
        backgroundColor: "#f1a4b4",
      },
    ],
  };

  return (
    <>
      <div className="overview-container">
        <div className="charts">
          <Line options={options} data={data} />
        </div>

        <div className="statistics">
          <Statistic title="Branches" icon={branches_icon}>
            {statistics.branches_count}
          </Statistic>
          <Statistic title="Users" icon={users_icon}>
            {statistics.users_count}
          </Statistic>
          <Statistic title="Rides" icon={subway_icon}>
            {statistics.rides_count}
          </Statistic>
          <Statistic title="Total Revenue" icon={coins_icon}>
            {statistics.revenue_count}
          </Statistic>
        </div>
      </div>
    </>
  );
};

export default Overview;
