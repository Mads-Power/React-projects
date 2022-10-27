import { FC, useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/GlobalInfo";
import { ResponseData } from "./types";
import { Global, css } from "@emotion/react";

const App: FC = () => {
  const [data, setData] = useState<ResponseData | undefined>(undefined);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data = await result.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Global
        styles={css`
          body {
            background-color: #8e979b;
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
          <CountryList countries={data.Countries} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default App;
