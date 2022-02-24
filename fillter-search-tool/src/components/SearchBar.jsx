import React, {useState} from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = ({placeholder, data}) => {
  const [fillterData, setFillterData] = useState([]);
  const handleOnchange = (e) => {
    const keyword = e.target.value;

    const fillter = data.filter((value) => {
      return value.title.toLowerCase().includes(keyword.toLowerCase());
    });
    if (!keyword) {
      setFillterData([]);
    } else {
      setFillterData(fillter);
    }
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleOnchange}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResult">
        {fillterData.length !== 0 &&
          fillterData.map((value, key) => {
            return (
              <div>
                <a className="item" target="_blank" href={value.link}>
                  {value.title}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
