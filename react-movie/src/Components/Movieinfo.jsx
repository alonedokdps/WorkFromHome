import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid lightgray;
`;
const CLose = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  color: white;
  height: 40px;
  background-color: red;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 352px;
  max-width: 264px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;

  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieInfo = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 300;
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const Movieinfo = (props) => {
  const [info, setInfo] = useState([]);
  const {selected} = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selected}&apikey=a9118a3a`)
      .then((res) => {
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Released = moment(item.Released).format("MMMM d, YYYY");
            return item;
          });
        }
        setInfo(data);
      });
  }, [selected]);
  return (
    <Container>
      <CoverImage src={info?.Poster} />
      <InfoColumn>
        <MovieName>
          {info?.Type}: {info?.Title}
        </MovieName>
        <MovieInfo>
          IMDB rating: <span>{info?.imdbRating}</span>
        </MovieInfo>
        <MovieInfo>
          Language: <span>{info?.Language}</span>
        </MovieInfo>
        <MovieInfo>
          Year: <span>{info?.Year}</span>
        </MovieInfo>
        <MovieInfo>
          Realesed: <span>{info?.Released}</span>
        </MovieInfo>
        <MovieInfo>
          Runtime: <span>{info?.Runtime}</span>
        </MovieInfo>
        <MovieInfo>
          Genre: <span>{info?.Genre}</span>
        </MovieInfo>
        <MovieInfo>
          Director: <span>{info?.Director}</span>
        </MovieInfo>
        <MovieInfo>
          Actors: <span>{info?.Actors}</span>
        </MovieInfo>
        <MovieInfo>
          Plot: <span>{info?.Plot}</span>
        </MovieInfo>
      </InfoColumn>
      <CLose onClick={() => props.setSelected()}>X</CLose>
    </Container>
  );
};

export default Movieinfo;
