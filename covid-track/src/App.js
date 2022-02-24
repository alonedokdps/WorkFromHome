import {useEffect, useState} from "react";
import CountrySelector from "./Components/CountrySelector/CountrySelector";
import Highlight from "./Components/Highlight/Highlight";
import Summary from "./Components/Summary/Summary";
import {GetCountries, getReportByCountry} from "./apis/index";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    GetCountries().then((res) => setCountries(res.data));
  }, []);
  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const {Slug} = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);
  return (
    <>
      <CountrySelector
        value={selectedCountryId}
        countries={countries}
        handleOnChange={handleOnChange}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </>
  );
}

export default App;
