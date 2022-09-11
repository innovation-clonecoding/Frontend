import styled from "styled-components";

const Main = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 768px;
  padding-bottom: 5rem;
`;

const ProfileBox = styled.div`
  display: flex;
  height: 13.75rem;
`;

const ProfileImage = styled.div`
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ProfileInfo = styled.div`
  flex: 1 1 0%;
  padding-left: 1.5rem;
  border-left: 1px solid #f1f3f5;
`;

const UploadButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #12b886;
  color: #ffffff;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
`;

const DeleteButton = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #12b886;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  margin-top: 10px;
`;

const UpdateButton = styled.button`
  outline: none;
  padding: 0px;
  border: none;
  display: inline;
  font-size: 1rem;
  line-height: 1.5;
  color: #12b886;
  text-decoration: underline;
  background-color: none;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: block;
  margin-bottom: 1.25rem;
`;

const H2 = styled.h2`
  font-size: 2.25rem;
  margin: 0px;
  line-height: 1.5;
  color: #212529;
`;

const Ptag = styled.p`
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: #868e96;
`;

const Container = styled.div`
  margin-top: 4rem;
`;

const ContentBox = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f3f5;
`;

const Wrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  width: 9.5rem;
  flex-shrink: 0;
`;

const H3 = styled.h3`
  line-height: 1.5;
  color: #212529;
  margin: 0px;
  font-size: 1.125rem;
  font-weight: 700;
`;

const ContentsWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Contents = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: #495057;
  line-height: 1.5;
`;

const EditWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 1rem;
`;

const Description = styled.div`
  margin-top: 0.875rem;
  color: #868e96;
  font-size: 0.875rem;
`;

export {
  Main,
  ProfileBox,
  ProfileImage,
  ProfileInfo,
  Image,
  UploadButton,
  DeleteButton,
  H2,
  Ptag,
  UpdateButton,
  Container,
  ContentBox,
  Wrapper,
  TitleWrapper,
  H3,
  ContentsWrapper,
  Contents,
  EditWrapper,
  Description,
};
