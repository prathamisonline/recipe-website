import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  width: 100%;
  margin: 2rem 14rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    width: 60%;
    border-radius: 2rem;
    font-size: 1.5rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
