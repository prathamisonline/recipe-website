import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searched = () => {
  const [searchedRecipies, setSearchedRecipies] = useState([]);
  const params = useParams();

  const getSearched = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=aaf7ceb317f34cbdb5828cbc1a73d678&query=${name}`
    );
    const data = await res.json();
    setSearchedRecipies(data.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipies.map((recipe) => (
        <Card key={recipe.id}>
          <Link to={"/search/" + recipe.id}>
            <img src={recipe.image} alt="images"></img>
            <h4>{recipe.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
