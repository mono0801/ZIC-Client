import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ownerPracticeRoom } from "../../assets/OwnerPracticeRoom";
import Button from "../../Components/Button";
import { TimePicker } from "react-ios-time-picker";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    z-index: 1;
    position: relative;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 80%;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 7%;
`;

const BackBtn = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: #7d7d7d;
    border: 1px solid #7d7d7d;
    border-radius: 50%;
    top: 15%;
    left: 5%;
    cursor: pointer;

    svg {
        width: 70%;
        height: 70%;
    }

    &:hover {
        border: none;
        background-color: #278cff;
        color: #ffffff;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 7%;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;

    p {
        font-family: "Pretendard-SemiBold";
        font-size: 150%;
    }

    div {
        width: auto;
        border: 1px solid #dcdcdc;
        padding: 2% 3%;
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-ExtraLight";
        color: #7d7d7d;
        cursor: pointer;
    }
`;

const Address = styled.div`
    color: #545454;

    a {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 2%;
        text-decoration: none;
        font-family: "Pretendard-ExtraLight";
        letter-spacing: 2%;
        margin-right: 2%;
        color: #545454;
    }
`;

const ReservationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    width: 100%;
    height: 50%;
    padding: 5%;
    box-sizing: border-box;
`;

const TimeContainer = styled.div`
    width: 100%;
    height: 15%;
    background-color: #d9f0ff80;
    border-radius: 1rem;
    display: flex;
    gap: 1%;
    justify-content: center;
    align-items: center;

    input,
    p {
        font-family: "Pretendard-Bold";
        font-size: 150%;
    }

    input {
        width: 5rem;
        border: 2px solid transparent;
        border-radius: 1rem;
        text-align: center;
    }

    input:first-child,
    input:last-child {
        cursor: pointer;
        padding: 1%;

        &:hover {
            border-color: #278cff;
        }
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 5%;
    border-bottom: 1px solid #dcdcdc;
    gap: 5%;

    div {
        font-family: "Pretendard-Light";
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #545454;
    }
`;

const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child {
        font-family: "Pretendard-Light";
        color: #545454;
    }

    p:last-child {
        font-size: 150%;
        font-family: "Pretendard-Regular";
    }
`;

const UserPayment = () => {
    const navigate = useNavigate();
    const fee = 10000;
    const [startTime, setStartTime] = useState("01:00");
    const [endTime, setEndTime] = useState("12:00");
    const [total, setTotal] = useState(0);
    const [query] = useSearchParams();
    const date = query.get("date");

    useEffect(() => {
        const tax_free = subtractTimes(startTime, endTime).hours * fee;
        const tax = tax_free / 10;
        setTotal(tax_free + tax);
    }, [startTime, endTime]);

    const hanldeNext = () => {
        if (toTime(startTime).getTime() > toTime(endTime).getTime()) {
            return alert("시작 시간이 종료 시간보다 늦어선 안됩니다.");
        }
        const body = {
            startTime: startTime,
            endTime: endTime,
        };
        console.log(body);
    };

    const toTime = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    function subtractTimes(time1, time2) {
        const difference = toTime(time2) - toTime(time1); // 밀리초 단위로 차이 계산

        const hours = Math.floor(difference / (1000 * 60 * 60)); // 시간 차이
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        ); // 분 차이

        return { hours, minutes };
    }

    return (
        <Container>
            <Wrapper>
                <Header>
                    <BackBtn>
                        <IoIosArrowBack onClick={() => navigate(-1)} />
                    </BackBtn>
                </Header>
                <TitleContainer>
                    <Title>
                        <p>{ownerPracticeRoom.name}</p>
                    </Title>

                    <Address>
                        <a
                            href={`https://map.naver.com/p/search/${
                                ownerPracticeRoom.region +
                                " " +
                                ownerPracticeRoom.address
                            }`}
                        >
                            <FiMapPin />
                            {ownerPracticeRoom.region +
                                " " +
                                ownerPracticeRoom.address}
                            <MdOutlineArrowForwardIos />
                        </a>
                    </Address>
                </TitleContainer>

                <ReservationContainer>
                    <TimeContainer>
                        <TimePicker
                            onChange={setStartTime}
                            value={startTime}
                            className="react-ios-time-picker"
                        />
                        <p>~</p>
                        <TimePicker
                            onChange={setEndTime}
                            value={endTime}
                            className="react-ios-time-picker"
                        />
                    </TimeContainer>
                    <InfoContainer>
                        <div>
                            <p>이용 날짜</p>
                            <p>{date.split("-").join(". ")}</p>
                        </div>
                        <div>
                            <p>총 이용 시간</p>
                            <p>
                                {subtractTimes(startTime, endTime).hours}
                                시간
                            </p>
                        </div>
                        <div>
                            <p>시간 당 금액</p>
                            <p>{fee.toLocaleString()}원</p>
                        </div>
                        <div>
                            <p>수수료</p>
                            <p>10%</p>
                        </div>
                    </InfoContainer>
                    <Total>
                        <p>결제 금액</p>
                        <p>{total.toLocaleString()}원</p>
                    </Total>
                </ReservationContainer>
            </Wrapper>
            <Button text="결제하기" onClick={hanldeNext} />
        </Container>
    );
};

export default UserPayment;
