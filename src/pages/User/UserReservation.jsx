import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../../Components/Calendar";
import styled from "styled-components";
import ReservationCard from "../../Components/ReservationCard";
import { userReservation } from "../../assets/userReservation";

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
    // TODO : 달력 컴포넌트 통해 예약 내역 API 구현
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/main");
    };

    return (
        <Container>
            <CalendarComponent />
            <ReservationWrapper>
                <ReservationLabel>이번 달 예약 내역</ReservationLabel>
                {userReservation.result.resultList.map((el) => (
                    <ReservationCard
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
