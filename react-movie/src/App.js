import axios from "axios";
import {useState} from "react";
import styled from "styled-components";
import Moviecomponent from "./Components/Moviecomponent";
import Movieinfo from "./Components/Movieinfo";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  width: 50%;
  background-color: white;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  width: 100%;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 40px;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`;

function App() {
  const API_KEY = "a9118a3a";
  const [search, setSearch] = useState();
  const [timeOutId, setTimeOutId] = useState();
  const [listMovie, setListMovie] = useState([]);
  const [selected, setSelected] = useState();
  const fetchData = async (query) => {
    let res = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );

    setListMovie(res.data?.Search);
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    const timeout = setTimeout(() => fetchData(search), 500);
    setTimeOutId(timeout);
  };
  return (
    <Container className="App">
      <Header>
        <AppName>
          <MovieImage src="http://www.crdvietnam.org/wp-content/uploads/2019/01/film.png" />
          React Movie
        </AppName>
        <SearchBox>
          <SearchInput
            value={search}
            onChange={handleOnChange}
            placeholder="Enter name movie....."
          />
        </SearchBox>
      </Header>
      {selected && <Movieinfo selected={selected} setSelected={setSelected} />}
      <MovieListContainer>
        {listMovie?.length
          ? listMovie.map((movie, index) => (
              <Moviecomponent
                key={index}
                movie={movie}
                setSelected={setSelected}
              />
            ))
          : "MOVIE NOT FOUND"}
      </MovieListContainer>
    </Container>
  );
}

export default App;
