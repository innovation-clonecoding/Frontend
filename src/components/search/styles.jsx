import styled from "styled-components";

const Box = styled.div`
  margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const SearchBox = styled.div`
  margin: 0 10rem 1.5rem 10rem;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  border: 1px solid #adb5bd;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  cursor: text;
  padding: 0px 1.5rem;
`;

const SearchInput = styled.input`
  flex: 1 1 0%;
  font-size: 1.5rem;
  line-height: 1.5;
  height: auto;
  display: block;
  color: #495057;
  transition: all 0.125s ease-in 0s;
  padding-left: 15px;
  background-color: transparent;
  border: none;
  outline: 0px;
  min-width: 0px;
`;

export { Box, SearchBox, SearchInput };
