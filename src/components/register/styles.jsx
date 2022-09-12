import styled from "styled-components";

const ParentBox = styled.div`
  height: 1000px;
  overflow-y: auto;
`;

const Box = styled.div`
  width: 100%;
  max-width: 768px;
  padding-left: 1rem;
  padding-left: 1rem;
  margin-top: 4rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bolder;
  margin: 0px;
`;

const Description = styled.div`
  font-size: 1rem;
  color: #212529;
  margin-top: 10px;
`;

const Contents = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const LabelStyle = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  transition: all 0.125s;
  color: ${(props) => props.fontColor};
`;
function Label({ fontColor, ...rest }) {
  return <LabelStyle fontColor={fontColor} {...rest}></LabelStyle>;
}

const InputWrapper = styled.div`
  width: 20rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #adb5bd;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1.125rem;
  font-weight: 400;
  color: #495057;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  transition: all 0.125s ease-in 0s;
  margin-top: 15px;
  size: 20;
`;

const ButtonStyle = styled.button`
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1.5rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.fontColor};
  transition: all 0.125s ease-in 0s;
  margin: 0px 10px 0px 10px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
function Button({ fontColor, backColor, hoverColor, ...rest }) {
  return (
    <ButtonStyle
      fontColor={fontColor}
      backColor={backColor}
      hoverColor={hoverColor}
      {...rest}
    ></ButtonStyle>
  );
}

export {
  ParentBox,
  Box,
  H1,
  Description,
  Contents,
  Label,
  InputWrapper,
  Input,
  Button,
};
