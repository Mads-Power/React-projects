import { FC, useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/GlobalInfo";
import { Country, ResponseData } from "./types";
import { Global, css } from "@emotion/react";
import BarChart from "./components/BarChart";

const App: FC = () => {
  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [activeCountries, setActiveCountries] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data = await result.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const onCountryClick = (country: Country) => {
    const countryIndex = activeCountries.findIndex(
      (activeCountry) => activeCountry.ID === country.ID
    );

    if (countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);

      setActiveCountries(newActiveCountries);
    } else {
      setActiveCountries([...activeCountries, country]);
    }
  };

  return (
    <div className="App">
      <Global
        styles={css`
          body {
            background-color: #d8e3e8;
            color: #021115;
          }
        `}
      />

      {data ? (
        <>
          <GlobalInfo
            newConfirmed={data?.Global.NewConfirmed}
            newDeaths={data?.Global.NewDeaths}
            newRecovered={data?.Global.NewRecovered}
          />
          <hr />
          {/* <BarChart /> */}
          <CountryList
            countries={data.Countries}
            onItemClick={onCountryClick}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default App;
