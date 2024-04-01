// Styles
import "./styles.css";

const Statistic = ({ title = "", icon, children }) => {
  return (
    <div className="statistic">
      <img src={icon} alt="" />
      <div className="info">
        <h4>{title}</h4>
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default Statistic;
