// React stuff
import { useMemo } from "react";

// Styles
import "../styles/admin.css";
import "./styles.css";

// Components
import Statistic from "../components/Statistic";

// Icons
import branches_icon from "../../../assets/icons/admin-icons/branches.svg";
import coins_icon from "../../../assets/icons/admin-icons/coins.svg";
import users_icon from "../../../assets/icons/admin-icons/users.svg";
import subway_icon from "../../../assets/icons/admin-icons/subway.svg";

// Charts
import { Chart } from "react-charts";

const Overview = () => {
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
            15
          </Statistic>
          <Statistic title="Users" icon={users_icon}>
            267
          </Statistic>
          <Statistic title="Rides" icon={subway_icon}>
            2098
          </Statistic>
          <Statistic title="Total Revenue" icon={coins_icon}>
            9,000
          </Statistic>
        </div>
      </div>
    </>
  );
};

export default Overview;
