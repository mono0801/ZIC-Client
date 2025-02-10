import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../../Components/Calendar";
import styled from "styled-components";
import ReservationCard from "../../Components/ReservationCard";
import { userReservation } from "../../assets/userReservation";
import { useMatch } from "react-router-dom";

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

const Owner = () => {
    const navigate = useNavigate();
    const mathchUser = useMatch("/user/reservation");
    const matchOwner = useMatch("/owner");

    // TODO : user owner에 따라서 룸 추가하기, 예약하기 기능 변경
    const handleNext = () => {
        if (matchOwner) {
            navigate("/owner/practiceRoom/1");
        }

        if (mathchUser) {
            navigate("/main");
        }
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
            {/* TODO : user owner에 따라서 룸 추가하기, 예약하기 변경 */}
            <Button
                text={matchOwner ? "룸 추가하기" : "예약하기"}
                onClick={handleNext}
            />
        </Container>
    );
};

export default Owner;
