import React from "react";
import styled from "styled-components";
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  height: 362px;
  object-fit: cover;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;
const Moviecomponent = (props) => {
  const {Title, Year, imdbID, Type, Poster} = props.movie;
  return (
    <MovieContainer>
      <CoverImage src={Poster} onClick={() => props.setSelected(imdbID)} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type: {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default Moviecomponent;
