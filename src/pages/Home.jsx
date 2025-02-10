import styled from "styled-components";
import { BsChatFill } from "react-icons/bs";

const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const BannerWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "pretendard-Bold";
    font-size: 20px;

    img {
        width: 15%;
        height: 15%;
    }
`;

const Banner = styled.div`
    overflow: visible;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${(props) => props.bgphoto});
    background-size: cover;
    background-repeat: no-repeat;
`;

const KakaoWrapper = styled.div`
    height: 25%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    a {
        text-decoration: none;
        border-bottom: 1px solid #707070;
        color: #707070;
        font-family: Pretendard-Regular;
        padding: 0 7px 2px 7px;
    }
`;

const KakaoBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-radius: 4px;
    padding: 15px 0 15px 0;
    height: auto;
    background-color: #fee500;
    cursor: pointer;

    svg,
    div {
        width: 25px;
        height: 25px;
    }

    p {
        font-family: "pretendard-Medium";
        color: #030303;
        font-size: 16px;
        font-weight: 400px;
    }

    &:hover {
        background-color: #fdef73;
    }
`;

const Home = () => {
    // TODO : 로그인 API 적용
    const handleKakaoLogin = () => {
        window.location.href =
            "http://localhost:8080/oauth2/authorization/kakao";
    };

    return (
        <HomeContainer>
            <BannerWrapper>
                <Banner bgphoto={"/assets/img/piano5line.png"}>
                    <p>당신이 연주할 곳은 여기</p>
                    {/* TODO : ZIC 로고 포지션 수정하기 */}
                    <img src="/assets/img/zic_banner.png" />
                </Banner>
            </BannerWrapper>
            <KakaoWrapper>
                <KakaoBtn onClick={handleKakaoLogin}>
                    <BsChatFill />
                    <p>카카오로 시작하기</p>
                    <div />
                </KakaoBtn>
                <a href="/join/category">다른 이메일로 시작하기</a>
            </KakaoWrapper>
        </HomeContainer>
    );
};

export default Home;
