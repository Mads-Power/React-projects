import { FC } from "react";

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const GlobalInfo: FC<Props> = ({ newConfirmed, newDeaths, newRecovered }) => {
  return (
    <div>
      <h1>Global covid-19 data</h1>
      <h3>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h3>
      <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
      <h3>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h3>
    </div>
  );
};

export default GlobalInfo;