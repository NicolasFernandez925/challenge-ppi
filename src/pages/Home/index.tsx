import { useEffect, useState } from "react";
import Banner from "../../assets/images/banner.png";
import Alert from "../../components/common/Alert";
import Conversion from "../../components/currencies/Conversion";
import FormSelectCurrencies from "../../components/currencies/FormSelectCurrencies";
import { ICurrencies } from "../../interface/currency/currency";
import { Currency } from "../../services/Currency";

import "./style.css";

const Home = () => {
  const [currencies, setCurrencies] = useState<ICurrencies | {}>({});

  const getCurrencies = async () => {
    try {
      const response = await Currency.getCurrencies();
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const responseToJSON = await response.json();
      setCurrencies(responseToJSON);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="exchange">
      <img className="exchange__banner" src={Banner} alt="banner" />
      <div className="exchange__container">
        <div className="echange__currencies">
          <FormSelectCurrencies currencies={currencies} />
          <div>
            <Conversion />
            <Alert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
