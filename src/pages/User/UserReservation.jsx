import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../../Components/Calendar";
import styled from "styled-components";
import ReservationCard from "../../Components/ReservationCard";
import { userReservation } from "../../assets/userReservation";
import { useState } from "react";
import moment from "moment";

const Container = styled.div`
    padding: 5%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
`;

const ReservationWrapper = styled.div`
    width: 100%;
    height: 50%;
    max-height: 50%;
    overflow-y: auto;
`;

const ReservationLabel = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 120%;
    margin-bottom: 3%;
`;

const UserReservation = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    // TODO : 달력 컴포넌트 통해 예약 내역 API 구현
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/");
    };

    // 날짜 선택 시 처리 함수
    const handleDateSelect = (date) => {
        const formattedDate = moment(date).format("YYYY-MM-DD"); // 날짜 포맷
        setSelectedDate(formattedDate); // 상태에 저장
        console.log("선택된 날짜:", formattedDate);
    };

    return (
        <Container>
            <CalendarComponent onDateSelect={handleDateSelect} />
            <ReservationWrapper>
                <ReservationLabel>이번 달 예약 내역</ReservationLabel>
                {userReservation.result.resultList.map((el) => (
                    <ReservationCard
                        key={el.reservationResult.id}
                        img={
                            el.reservationResult.practiceRoomDetail
                                .practiceRoomDetailImage
                        }
                        roomName={
                            el.reservationResult.practiceRoom.PracticeRoomName
                        }
                        detailName={
                            el.reservationResult.practiceRoomDetail
                                .practiceRoomDetailName
                        }
                        date={el.reservationResult.date}
                        startTime={el.reservationResult.startTime}
                        endTime={el.reservationResult.endTime}
                    />
                ))}
            </ReservationWrapper>
            <Button text="예약하기" onClick={handleNext} />
        </Container>
    );
};

export default UserReservation;
