import styled from "styled-components";

const ParentBox = styled.div`
  margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const ChildBox = styled.div`
  margin-top: 3.5rem;
  width: 768px;
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

const SearchItem = styled.div`
  padding-top: 0px;
  padding-bottom: 2rem;
`;

const UserInfoContainer = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const UserInfoImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  display: block;
  margin-right: 1rem;
  background: #f8f9fa;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
`;

const UserName = styled.div`
  font-size: 0.875rem;
  color: #212529;
  font-weight: bold;
`;

const H2 = styled.h2`
  margin: 0px;
  color: #212529;
  word-break: keep-all;
`;
const Ptag = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  color: #495057;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const CountPost = styled.p`
  font-size: 1rem;
  margin: 2rem 0 2rem 0rem;
`;

export {
  ParentBox,
  ChildBox,
  SearchBox,
  SearchInput,
  SearchItem,
  UserInfoContainer,
  UserInfoImg,
  UserName,
  H2,
  Ptag,
  CountPost,
};
