import IconAlert from "../../../assets/icons/alert.png";

import "./style.css";

const Alert = () => {
  return (
    <div className="alert">
      <img className="alert__icon" src={IconAlert} alt="icon-alert" />
      <p className="alert__paragraph">
        We use the market rate. This is for informational purposes only.
      </p>
    </div>
  );
};

export default Alert;
