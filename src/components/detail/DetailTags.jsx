import React from 'react';
import styled from 'styled-components';

const DetailTags = ({tag}) => {
  return (
    <StyledDiv>
      {tag}
    </StyledDiv>
  );
};

export default DetailTags;
const StyledDiv = styled.div`
  margin: 0 0.875rem 0.875rem 0;
  padding: 0 1rem;
  height: 2rem;
  background-color: #F8F9FA;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  color: #14B886;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  &:hover{
    color: #69CAA6;
  }
`