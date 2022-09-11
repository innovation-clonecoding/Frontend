import styled from "styled-components";

const Box = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const Container = styled.div`
  margin-top: 5.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: block;
  margin-bottom: 1.25rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 1rem;
`;

const UserNicknName = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #212529;
`;

const Introduction = styled.div`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #495057;
  letter-spacing: -0.004em;
`;

const DivisonContainer = styled.div`
  background: #e9ecef;
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  color: #868e96;
  display: flex;
`;

const CategoryContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const CategoryList = styled.div`
  display: flex;
  position: relative;
`;

const CategoryItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  font-weight: 600;
  color: #20c997;
`;

const CategoryLine = styled.div`
  width: 8rem;
  height: 2px;
  background: #20c997;
  position: absolute;
  bottom: -2px;
  transition: left 0.25s ease-in-out 0s;
`;

const TagContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: -1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
`;

const ChooseTag = styled.div`
  flex-shrink: 0;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5;
  background: #12b886;
  color: white;
  text-decoration: none;
`;

const NotChooseTag = styled.div`
  flex-shrink: 0;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5;
  background: #f8f9fa;
  color: #212529;
  text-decoration: none;
  margin-left: 10px;
`;

const ContentsBox = styled.div`
  padding-bottom: 4rem;
  line-height: 1.5;
`;

const ContentsImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const H2 = styled.div`
  font-size: 1.5rem;
  margin: 0px;
  color: #212529;
  word-break: keep-all;
`;

const Ptag = styled.p`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #495057;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const TagButton = styled.a`
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding: 0.2rem 0.75rem 00.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  display: inline-flex;
  -webkit-box-align: center;
  text-decoration: none;
  font-weight: 500;
  color: #12b886;
`;

const SubInfo = styled.div`
  font-size: 0.75rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.3rem;
  color: #868e96;
`;

const Span = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

const Icon = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.25rem;
  margin-left: 0.3rem;
`;

export {
  Box,
  Container,
  UserInfoContainer,
  Image,
  Description,
  UserNicknName,
  Introduction,
  DivisonContainer,
  CategoryContainer,
  CategoryList,
  CategoryItem,
  CategoryLine,
  TagContainer,
  ChooseTag,
  NotChooseTag,
  ContentsBox,
  ContentsImage,
  H2,
  Ptag,
  TagButton,
  SubInfo,
  Span,
  Icon,
};
