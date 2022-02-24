import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
const CountrySelector = ({value, handleOnChange, countries}) => {
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{name: "country", id: "country-selector"}}
      >
        {countries.length > 0 &&
          countries.map((country) => {
            return (
              <option
                defaultChecked
                key={country.ISO2}
                value={country.ISO2.toLowerCase()}
              >
                {country.Country}
              </option>
            );
          })}
      </NativeSelect>
      <FormHelperText>Lựa Chọn Quốc Gia</FormHelperText>
    </FormControl>
  );
};

export default CountrySelector;
