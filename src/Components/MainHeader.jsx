import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 쌓기 */
    height: 100vh; /* 전체 화면 높이 차지 */
`;

const Header = styled.div`
    height: 7%;
    width: 100%;
    max-width: 500px;
    padding: 5%;
    box-sizing: border-box;
    /* 경계선 지우기 */
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-bottom: 10px;
    }

    svg {
        width: 30%;
        height: 30%;
        color: #a9a9a9;
        cursor: pointer;
    }

    svg:last-child {
        margin-left: 10%;
    }
`;

const IconWrapper = styled.div`
    width: 25%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const MainHeader = () => {
    const navigate = useNavigate();

    // TODO : JWT를 통해 오너 페이지로 갈지 유저 페이지로 갈지 구현
    const handleCalender = () => {
        navigate("/owner");
    };

    const handleUser = () => {
        navigate("/owner/revenue");
    };

    return (
        <Container>
            <Header>
                <a href="/main">
                    <img src="/assets/img/zic_mainlogo.png" alt="Logo" />
                </a>
                <IconWrapper>
                    <CiCalendar onClick={handleCalender} />
                    <CiUser onClick={handleUser} />
                </IconWrapper>
            </Header>
            <Content>
                <Outlet />
            </Content>
        </Container>
    );
};

export default MainHeader;
