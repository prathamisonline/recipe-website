import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "./Search";

import React from "react";

const Navigation = () => {
  return (
    <>
      <Search />
      <List>
        <SLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
      </List>
    </>
  );
};
const List = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  /* align-items: center; */
  justify-content: center;
`;

const SLink = styled(NavLink)`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 2rem;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  text-decoration: none;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    font-size: 1.5rem;
    color: white;
  }
  svg {
    font-size: 3rem;
    color: white;
  }
`;

export default Navigation;
