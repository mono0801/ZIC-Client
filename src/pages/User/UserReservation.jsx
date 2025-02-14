import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../../Components/Calendar";
import styled from "styled-components";
import ReservationCard from "../../Components/ReservationCard";
import { userReservation } from "../../assets/userReservation";
import { useEffect, useState } from "react";
import moment from "moment";
import { checkMobile } from "../../utils/checkMobile";

const Container = styled.div`
    padding: 5%;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: ${(props) => (props.ismobile ? "45%" : "35%")} 1fr 6%;
    box-sizing: border-box;
    gap: 3%;
`;

const CalendarWrapper = styled.div``;

const ReservationWrapper = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: auto; /* 세로 스크롤 활성화 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */

    &::-webkit-scrollbar {
        /* Chrome, Safari에서 스크롤바 숨김 */
        display: none;
    }
`;

const ReservationLabel = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 1rem;
    margin-bottom: 3%;
`;

const UserReservation = () => {
    const [selectedDate, setSelectedDate] = useState(
        moment().format("YYYY-MM-DD")
    );
    // TODO : 달력 컴포넌트 통해 예약 내역 API 구현
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/");
    };

    // 날짜 선택 시 처리 함수
    const handleDateSelect = (date) => {
        const formattedDate = moment(date).format("YYYY-MM-DD"); // 날짜 포맷
        setSelectedDate(formattedDate); // 상태에 저장
    };

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);

    return (
        <Container ismobile={checkMobile()}>
            <CalendarWrapper>
                <CalendarComponent onDateSelect={handleDateSelect} />
            </CalendarWrapper>
            <ReservationWrapper>
                <ReservationLabel>예약 내역</ReservationLabel>
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
            <Button text="예약하기" onClick={handleNext} height={"100%"} />
        </Container>
    );
};

export default UserReservation;
