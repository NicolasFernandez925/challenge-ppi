import Banner from "../../assets/images/banner.png";
import FromCurrencyValue from "../../components/currencies/Conversion/FromCurrencyValue";
import SelectCurrencies from "../../components/currencies/SelectCurrencies";

import "./style.css";

const Home = () => {
  return (
    <div className="exchange">
      <img className="exchange__banner" src={Banner} alt="banner" />
      <div className="exchange__container">
        <SelectCurrencies />
        <FromCurrencyValue />
      </div>
    </div>
  );
};

export default Home;
