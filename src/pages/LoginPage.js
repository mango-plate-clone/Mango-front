import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//assets
import logo from "../assets/logo/logo.png";
//component
import KakaoBtn from "../components/Button/KakaoBtn";

const LoginPage = () => {
  const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const REDIRECT_URI = encodeURI(`${CLIENT_MAIN_URL}/KakaoLogin`);

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const _handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Div>
      <Logo src={logo} />
      <KakaoBtn onClick={_handleKakaoLogin} />
    </Div>
  );
};

export default LoginPage;

const Div = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdfff8;
`;

const Logo = styled.img`
  width: 111px;
  height: auto;

  transform: translate(0, -80px);
`;
