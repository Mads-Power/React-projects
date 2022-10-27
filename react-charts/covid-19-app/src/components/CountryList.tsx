import styled from "@emotion/styled";
import { FC } from "react";
import { Country } from "../types";

interface Props {
  countries: Country[];
}

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

  @media (min-width: 420px) {
    flex: 0 0 33.33%;
  }
`;

const ListContent = styled.div`
  background-color: #5a84aa;
  margin: 5px;
  padding: 10px 0;
`;

const CountryList: FC<Props> = ({ countries }) => {
  return (
    <ListWrapper>
      {countries.map((country) => (
        <ListItem key={country.ID}>
          <ListContent>
            <h4>{country.Country}</h4>
            <div>New Confirmed : {country.NewConfirmed}</div>
            <div>New Deaths : {country.NewDeaths}</div>
            <div>New Recovered : {country.NewRecovered}</div>
          </ListContent>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
export default CountryList;
