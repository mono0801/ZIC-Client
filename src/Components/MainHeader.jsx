import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Icalendar from "./icons/Icalendar";
import IUser from "./icons/Iuser";
import IAddRooom from "./icons/IaddRoom";
import IRevenue from "./icons/Irevenue";
import { FaSignOutAlt } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Header = styled.div`
    height: 7%;
    width: 100%;
    max-width: 500px;
    padding: 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff; //정호

    img {
        margin-bottom: 10px;
    }

    svg {
        color: #a9a9a9;
        cursor: pointer;

        &:hover {
            color: #278cff !important;
        }
    }
`;

const IconWrapper = styled.div`
    width: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5%;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const MainHeader = () => {
    const navigate = useNavigate();

    // TODO : JWT를 통해 오너 페이지로 갈지 유저 페이지로 갈지 구현
    const handlePlus = () => {
        navigate("/owner/practiceRoom");
    };

    const handleOwner = () => {
        navigate("/owner/revenue");
    };

    const handleCalender = () => {
        navigate("/user/reservation");
    };

    const handleUser = () => {
        navigate("/user");
    };

    // TODO : 로그아웃 테스트
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    return (
        <Container>
            <Header>
                {/* TODO : owner는 메인 클릭시 /owner로 이동하게 구현 */}
                {/* TODO : user는 메인 클릭시 /으로 가게 구현 */}
                <a href="/">
                    <img src="/assets/img/zic_mainlogo.png" alt="Logo" />
                </a>
                <IconWrapper>
                    {/* TODO : 로그아웃을 위해 임시로 만든 아이콘 */}
                    <FaSignOutAlt
                        onClick={handleLogout}
                        style={{ width: "1.8rem", height: "1.8rem" }}
                    />
                    <IAddRooom
                        onClick={handlePlus}
                        width={"1.8rem"}
                        height={"1.8rem"}
                    />
                    <IRevenue
                        onClick={handleOwner}
                        width={"1.8rem"}
                        height={"1.8rem"}
                    />
                    <Icalendar
                        onClick={handleCalender}
                        width={"2.2rem"}
                        height={"2.2rem"}
                    />
                    <IUser
                        onClick={handleUser}
                        width={"2rem"}
                        height={"2rem"}
                    />
                </IconWrapper>
            </Header>
            <Content>
                <Outlet />
            </Content>
        </Container>
    );
};

export default MainHeader;
