import { FC } from "react";
import { Country } from "../types";

interface Props {
  countries: Country[];
}

const CountryList: FC<Props> = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li>{country.Country}</li>
      ))}
    </ul>
  );
};
export default CountryList;
