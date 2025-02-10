import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JoinCategory from "./pages/Join/JoinCategory";
import JoinInfo from "./pages/Join/JoinInfo";
import JoinSuccess from "./pages/Join/JoinSuccess";
import User from "./pages/User/User";
import UserPracticeRoom from "./pages/User/UserPracticeRoom";
import UserPayment from "./pages/User/UserPayment";
import UserReservation from "./pages/User/UserReservation";
import PracticeRoom from "./pages/PracticeRoom";
import Owner from "./pages/Owner/Owner";
import OwnerPracticeRoom from "./pages/Owner/OwnerPracticeRoom";
import OwnerRevenue from "./pages/Owner/OwnerRevenue";
import RootContainer from "./Components/RootContainer";
import JoinHeader from "./Components/JoinHeader";
import MainHeader from "./Components/MainHeader";

const JoinRoutes = () => {
    return (
        <Routes>
            <Route element={<JoinHeader />}>
                {/* 회원 가입 대여자 || 이용자 고르는 페이지 */}
                <Route path="/category" element={<JoinCategory />} />
                {/* 이용자 & 대여자 회원 가입 정보 페이지 */}
                <Route path="/:role/info" element={<JoinInfo />} />
            </Route>
            {/* 회원가입 성공 페이지 */}
            <Route path="/:role/success" element={<JoinSuccess />} />
        </Routes>
    );
};

const UserRoutes = () => {
    return (
        <Routes>
            {/* 연습실 내부 방 페이지 */}
            <Route path="/practiceRoom" element={<UserPracticeRoom />} />
            {/* 결제 페이지 */}
            <Route path="/PracticeRoom/payment" element={<UserPayment />} />
            {/* 예약 내역 페이지 */}
            <Route path="/reservation" element={<UserReservation />} />
            {/* 마이 페이지 */}
            <Route path="/mypage" element={<User />} />
        </Routes>
    );
};

const OwnerRoutes = () => {
    return (
        <Routes>
            <Route element={<MainHeader />}>
                {/* 대여자 메인 페이지 */}
                <Route path="/" element={<Owner />} />
                {/* 대여자 연습실 내부 방 추가 페이지 */}
                <Route path="/revenue" element={<OwnerRevenue />} />
            </Route>
            {/* 대여자 수익 페이지 */}
            <Route
                path="/practiceRoom/:practiceRoomId"
                element={<OwnerPracticeRoom />}
            />
        </Routes>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootContainer />}>
                    {/* 로그인 */}
                    <Route path="/" element={<Home />} />
                    {/* 메인 페이지 */}
                    <Route path="/main" element={<PracticeRoom />} />

                    {/* 회원가입 */}
                    <Route path="/join/*" element={<JoinRoutes />} />

                    {/* 유저 */}
                    <Route path="/user/*" element={<UserRoutes />} />

                    {/* 대여자 */}
                    <Route path="/owner/*" element={<OwnerRoutes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
