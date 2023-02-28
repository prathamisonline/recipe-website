import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const getCuisine = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=aaf7ceb317f34cbdb5828cbc1a73d678&cuisine=${name}`
    );
    const data = await res.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Grid>
      {cuisine.map((item) => (
        <Card key={item.id}>
          <Link to={"/search/" + item.id}>
            <img src={item.image} alt="ds"></img>
            <h4>{item.title}</h4>
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
export default Cuisine;
