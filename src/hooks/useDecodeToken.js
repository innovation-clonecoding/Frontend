import jwt_decode from "jwt-decode";

const useDecodeToken = (token) => {
  if (token) {
    const decode_token = jwt_decode(token);
    const email = decode_token.sub;
    const nickName = decode_token.nickname;
    const userInitInfo = [email, nickName];
    return userInitInfo;
  } else {
    return "nickName";
  }
};

export default useDecodeToken;
