import CalendarComponent from "../../Components/Calendar";
import styled from "styled-components";
import ReservationCard from "../../Components/ReservationCard";
import { userReservation } from "../../assets/userReservation";
const Container = styled.div`
    padding: 5%;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
`;

const ReservationWrapper = styled.div`
    margin-top: 2%;
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

const Owner = () => {
    // API로 대여자 예약 내역 조회 구현
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
        </Container>
    );
};

export default Owner;
