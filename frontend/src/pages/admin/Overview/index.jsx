// React stuff
import { useMemo, useEffect, useState } from "react";

// Styles
import "./styles.css";

// Components
import Statistic from "./components/Statistic";

// Icons
import branches_icon from "../../../assets/icons/admin-icons/branches.svg";
import coins_icon from "../../../assets/icons/admin-icons/coins.svg";
import users_icon from "../../../assets/icons/admin-icons/users.svg";
import subway_icon from "../../../assets/icons/admin-icons/subway.svg";

// Charts
import { Chart } from "react-charts";

// Request
import { sendRequest } from "../../../core/tools/remote/request";
import { requestMethods } from "../../../core/enums/requestMethods";

const Overview = () => {
  const [statistics, setStatistics] = useState({
    users_count: 0,
    branches_count: 0,
    rides_count: 0,
    revenue_count: 0,
  });
  const data = [
    {
      label: "Series 1",
      data: [
        {
          primary: "2022-02-03T00:00:00.000Z",
          likes: 130,
        },
        {
          primary: "2022-03-03T00:00:00.000Z",
          likes: 150,
        },
      ],
    },
    {
      label: "Series 2",
      data: [
        {
          primary: "2022-04-03T00:00:00.000Z",
          likes: 200,
        },
        {
          primary: "2022-05-03T00:00:00.000Z",
          likes: 250,
        },
      ],
    },
  ];

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum: { primary: string }) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum: { likes: number }) => datum.likes,
        elementType: "bar",
      },
    ],
    []
  );

  // Get statistics from API on load
  const getStatistics = () => {
    sendRequest(requestMethods.GET, "/admin/get-statistics")
      .then((response) => {
        const data = response.data;
        const { users_count, branches_count, rides_count, revenue_count } =
          data;
        setStatistics({
          users_count: users_count ?? 0,
          branches_count: branches_count ?? 0,
          rides_count: rides_count ?? 0,
          revenue_count: revenue_count ?? 0,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => getStatistics(), []);

  return (
    <>
      <div className="overview-container">
        <div className="charts">
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
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
