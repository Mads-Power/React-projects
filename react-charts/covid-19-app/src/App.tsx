import { useEffect, useState } from "react";

// Date: "2022-10-27T03:57:28.241Z"
// ​​
// NewConfirmed: 558051
// ​​
// NewDeaths: 2017
// ​​
// NewRecovered: 0
// ​​
// TotalConfirmed: 627131701
// ​​
// TotalDeaths: 6576077
// ​​
// TotalRecovered: 0

type Country = {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: unknown;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

type GlobalData = {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

type ResponseData = {
  Cuntries: Country[];
  Date: string;
  Global: GlobalData;
  ID: string;
  Message: string;
};

const App: React.FunctionComponent = () => {
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
      <h1>Global covid 19</h1>
    </div>
  );
};

export default App;
