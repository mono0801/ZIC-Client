import styled from "styled-components"; // styled-components import 추가
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../styles/font.css";
import MainHeader from "../../Components/MainHeader";
import axios from "axios";
import { mypage } from "../../assets/mypage";

const User = () => {
    const [data, setData] = useState({
        userThisMonthPractices: { userThisMonthPracticeList: [] },
        frequentPracticeRooms: { frequentPracticeRoomDetailList: [] }
    });
    
    const navigate = useNavigate();
    mypage
    useEffect(() => {
        fetchNewsList(); 
    }, []);

    const fetchNewsList = async () => {
        try {

        //   const token = localStorage.getItem("accessToken");
        //   const response = await axios.get(
        //     `/api/user/mypage`, {
        //         headers: {
        //             Authorization: `Bearer ${token}`, // 🔥 헤더에 토큰 추가
        //         },
        //     }
            
        //   );
        //   setData(response.data);
        setData(mypage.result);
        } catch (error) {
          console.error("데이터를 불러오는 중 에러 발생:", error);
        }
      };

    //logout api 연동해야함
    const handleLogout = () =>{
        localStorage.removeItem("accessToken");
        navigate("/");
    }
    


    return (
        <Container>
            <MainHeader></MainHeader>

            <TopContent>
                <UserInfoBox>
                    <UserName>{data.userName}</UserName>
                    <KakaoImageComponent/>
                </UserInfoBox>
                <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
            </TopContent>

            <CenterContent>
                <PracticeBox>
                    <span>이번 달 연습 횟수</span>
                    {data.userThisMonthPractices.userThisMonthPracticeList.map((practice, index) => (
                        <div key={index}>
                            <p>{`${practice.practiceRoomName} ${practice.practiceRoomNameDetail}`}</p>
                            <p>{practice.practiceCount}회</p>
                        </div>
                    ))}
                    <DividerLine />
                    <div><p>총 연습 횟수</p><p>{data.userThisMonthPractices.totalPracticeCount}회</p></div>
                </PracticeBox>
            </CenterContent>

            <BottomContent>
                <span>자주 가는 연습실</span>
                <PracticeRankBox>
                    {data.frequentPracticeRooms.frequentPracticeRoomDetailList.map((room, index) => (
                        index === 0 ? (
                        <div key={index}>
                            <img src="/assets/img/Union.svg" alt="1위 아이콘" />
                            <p>{room.roomName}</p>
                        </div>
                        ) : (
                        <div key={index}>
                            <p>{index + 1}</p>
                            <p>{room.roomName}</p>
                        </div>
                        )
                    ))}
                </PracticeRankBox>
            </BottomContent>
        </Container>
    )
};

export default User;

const Container = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(233, 231, 231);
`
const TopContent = styled.div`
    width : 100%;
    height : 15%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    background-color: #ffffff;
    align-items: center;
`

const UserInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    background-color: rgba(217, 240, 255,0.5);
    width : 90%;
    height : 70px;
    align-items: center;
    margin-top: 3%;
    gap: 60%;
    border-radius: 10px;
`

const UserName = styled.a`
    font-weight: bold;
    text-decoration: none; 
    margin-left: 10%;
    font-size: 1.3rem;
    color : #030303;
    font-family : 'Pretendard-Regular';
`;

const LogoutBtn = styled.button`    
    margin: 2% 0% 2% 70%;
    width: 20%;
    height: 10%;
    font-family : "Pretendard-Regular";
    font-size : 1.1rem;
    color: #545454;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const CenterContent = styled.div`
    margin: 3% 0%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
`

const PracticeBox = styled.div`
    width: 90%;
    margin: 5% 5%;
    display : flex;
    flex-direction: column;

    span {
        font-size : 1.1rem;
        font-family : "Pretendard-SemiBold";
        line-height: 16px;
        color : #030303;
        margin-bottom: 4%;
    }

    div {
        width: 92%;
        margin: 1.1% 3%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        p{
            font-size: 0.8rem;
            font-family : "Pretendard-Regular";
            color : #545454;
        }
    }
`

const DividerLine = styled.div`
    width: 100% !important;
    height: 2px;
    background-color: #DCDCDC;
    margin: 2% 0% !important;
    margin-bottom: 4% !important;
`

const BottomContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;

    span {
        margin: 6% 5%;
        font-size : 1.1rem;
        font-family : "Pretendard-SemiBold";
        line-height: 16px;
        color : #030303;
        margin-bottom: 4%;
    }
`

const PracticeRankBox = styled.div`
    margin: 0% 5%;

    div{
        background-color: rgba(217, 240, 255, 0.5); 
        display: flex;
        align-items: center;
        flex-direction: row;
        height: 2.5rem;
        padding: 8px;
        margin-bottom : 2%;
        border-radius: 10px;
        justify-content: flex-start;
    }    

    div:nth-child(1){
        background-color: #D9F0FF;
    }

    div img {
        margin-left: 5%;
        width: 24px;
        height: 24px;
    }

    div p:first-of-type {
        font-family: "Pretendard-Regular";
        font-size: 1.2rem;
        line-height: 16px;
        color: #030303;
        margin-left: 6.3%;
        margin-right: 2.3%;
    }

    div p:nth-of-type(2) {
        font-family: "Pretendard-Regular";
        font-size: 1.1rem;
        line-height: 16px;
        color: #545454;
        margin-left: 6%;
    }
`

// const RankedItem = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 12px 16px;
//     border-radius: 10px;
    

//     img,span {
//         width: 6%;
//         font-size: 16px;
//         font-weight: bold;
//         color: #666;
//     }

//     p {
//         font-family: "Pretendard-Regular";
//         font-size: 1rem;
//         color: #030303;
//     }

//     &:nth-child(2),
//     &:nth-child(3) {
//         background-color: #F5F9FF;
//     }
// `;

const KakaoImageComponent = () => <img src="/assets/img/kakaoImage.svg" alt="Kakao Image" width={"8%"}/>;
