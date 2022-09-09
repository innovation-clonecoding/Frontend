import React from 'react';
import Write from '../components/write/Write';
import WriteShow from '../components/write/WriteShow';
const WritePage = () => {
  return (
    <div>
      게시글 작성 페이지
      <Write/>
      <WriteShow/>
    </div>
  );
};

export default WritePage;