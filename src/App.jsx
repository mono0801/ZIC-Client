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
                <Route path="/category" element={<JoinCategory />} />
                <Route path="/:role/info" element={<JoinInfo />} />
            </Route>
            <Route path="/:role/success" element={<JoinSuccess />} />
        </Routes>
    );
};

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/practiceRoom" element={<UserPracticeRoom />} />
            <Route path="/PracticeRoom/payment" element={<UserPayment />} />
            <Route path="/reservation" element={<UserReservation />} />
            <Route path="/mypage" element={<User />} />
        </Routes>
    );
};

const OwnerRoutes = () => {
    return (
        <Routes>
            <Route element={<MainHeader />}>
                <Route path="/" element={<Owner />} />
                <Route path="/revenue" element={<OwnerRevenue />} />
            </Route>
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
