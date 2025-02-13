import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 쌓기 */
    height: 100vh; /* 전체 화면 높이 차지 */
`;

const Header = styled.div`
    height: 7%;
    width: 100%;
    max-width: 500px;
    /* 경계선 지우기 */
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    img {
        margin-bottom: 10px;
    }
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const JoinHeader = () => {
    return (
        <Container>
            <Header>
                <a href="/">
                    <img src="/assets/img/zic_mainlogo.svg" alt="Logo" />
                </a>
            </Header>
            {/* TODO : 진행 바 설정 */}
            <Content>
                <Outlet />
            </Content>
        </Container>
    );
};

export default JoinHeader;
