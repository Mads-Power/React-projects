import { FC, useEffect, useState } from "react";
import GlobalInfo from "./components/GlobalInfo";
import { ResponseData } from "./types";

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
      {data ? (
        <GlobalInfo
          newConfirmed={data?.Global.NewConfirmed}
          newDeaths={data?.Global.NewDeaths}
          newRecovered={data?.Global.NewRecovered}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default App;
