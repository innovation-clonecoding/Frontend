import styled from "styled-components";

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 500px;
  height: 300px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const SubContainer = styled.div`
  max-width: 520px;
  max-height: 800px;
  margin: 0 auto;
  padding-bottom: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  height: 100%;
  color: #000;
  font-size: 14px;
  background: #fff;
`;

const BodyHead = styled.div`
  display: flex;
  margin: 0 70px;
  padding: 50px 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LogoName = styled.span`
  margin-left: 20px;
  font-size: 30px;
  color: #757575;
`;

const BodyContent = styled.div`
  display: flex;
  margin: 0 70px;
  padding: 50px 0 20px;
`;

const TextContent = styled.span`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
  color: #757575;
`;

export {
  Main,
  Container,
  SubContainer,
  BodyHead,
  LogoName,
  BodyContent,
  TextContent,
};
