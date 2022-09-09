import styled from "styled-components";

/* Modal Layer */
const ModalBox = styled.div`
  position: absolute;
  width: 606px;
  height: 530px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;
  background-color: white;

  display: flex;
  left: 50%;
  top: 100px;
  transform: translate(-50%, 70px);
  display: flex;
  flex-direction: row;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px; ;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(249, 249, 249, 0.85);
  z-index: 0;
`;

/* Container */
const LeftContainer = styled.div`
  background-color: #f8f9fa;
  width: 216px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 25px;
`;
const WihteBox = styled.div`
  flex: 1 1 0%;
  background-color: #ffffff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 1.5;
`;

const ExitBox = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  color: #868e96;
  font-size: 1.5rem;
  margin-bottom: 2.25rem;
`;

const ExitContainer = styled.div`
  background-color: yellow;
  display: flex;
  -webkit-box-pack: end;
`;

const ParentContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

const ChildContainerStyle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};

  display: flex;
  justify-content: space-around;
`;
function ChildContainer({ width, height, margin, ...rest }) {
  return (
    <ChildContainerStyle
      width={width}
      height={height}
      margin={margin}
      {...rest}
    ></ChildContainerStyle>
  );
}

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
`;

/* Text */
const SpanStyle = styled.span`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  margin: 20px 0px 0px 0px;
`;
function Span({ fontColor, fontSize, ...rest }) {
  return (
    <SpanStyle fontColor={fontColor} fontSize={fontSize} {...rest}></SpanStyle>
  );
}

const WelcomText = styled.span`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  color: #495057;
  text-align: center;
  font-weight: 500;
`;

const LinkText = styled.li`
  display: inline-block;
  font-weight: bold;
  color: #12b886;
  padding-left: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 250px;
  height: 45px;
  border-style: solid;
  border-color: #dbdbdb;
  border-width: 0.1px;

  padding-left: 10px;
  :focus {
    outline: 0.1px solid #12b886;
  }
`;

/* Button */
const Button = styled.button`
  width: 95px;
  height: 50px;

  color: white;
  font-size: 15px;

  background-color: #5ab98f;
  border-style: solid;
  border-color: transparent;
`;

/* img */
const ExitImg = styled.img`
  width: 30px;
  height: 30px;
  filter: opacity(0.5) drop-shadow(0 0 0 #ddd);
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  border-style: solid;
  /* border-color: #dbdbdb; */
  border-color: transparent;

  overflow: hidden;
`;

export {
  Background,
  ModalBox,
  LeftContainer,
  WihteBox,
  ExitBox,
  Container,
  ParentContainer,
  Footer,
  Span,
  ChildContainer,
  Input,
  Button,
  Image,
  ExitImg,
  WelcomText,
  ExitContainer,
  LinkText,
};
