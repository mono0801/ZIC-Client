import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";
import axios from "axios";

/* ToDO : 하드코딩된 dayList 제거하고 api에서 받아온 데이터로 dayList 업데이트
    api 요청보내서 예약된 날짜 리스트 받아오고
    받아온 날짜 데이터 setDayList로 상태 업데이트하고
    addDotToTile에서 해당날짜만 파란점 표시되도록 하고
    클릭한 날짜에 해당하는 예약내역 하단에 뜨도록*/

const ReactCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); //하단에 예약 내역을 표시할 때 사용
    const [dayList, setDayList] = useState([]);
    const [reservations, setReservations] = useState([]);
    const page = 1; // 페이지 번호 (예시 값)

    useEffect(() => {
        const fetchReservedDates = async () => {
            try {
                const response = await axios.get(
                    `https://43.200.3.214:8080/api/reservation/owner?date=2025-02-07&page=1`, {
                        headers: {
                            Authorization: `eyJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiVVNFUiIsInVzZXJOYW1lIjoiVXNlclRlc3QiLCJpYXQiOjE3Mzk1NTY1ODEsImV4cCI6MTczOTU2MDE4MX0.EbjIFt_PGyOLZUizQ5QT7Bmi9rI9Yw7BvLclA_wgyS0`
                        }
                });

                console.log("API 응답: ", response);
                
                if (!response.data.isSuccess) {
                    console.error("API 오류: ", response.data);
                }

                // 서버에서 받은 데이터 (날짜 리스트로 변환)
                const reservedDates = response.data.map(item => item.date); 
                setDayList(reservedDates);

                console.log("예약된 날짜 리스트: ", reservedDates);
            } catch (error) {
                console.error("예약내역 불러오기 실패", error)
            }
        };

        fetchReservedDates();
    }, []);

    //하단에 예약 내역을 표시할 때 사용
    const handleDateSelect = async (date) => {
        const activeDate = moment(date).format("YYYY-MM-DD");
        setSelectedDate(date);
        console.log("선택된 날짜: ", activeDate);

        try {
            const response = await axios.get(
                `https://43.200.3.214:8080/api/reservation/owner?date=${activeDate}&page=1`,
                {
                    headers: {
                        Authorization: `eyJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiVVNFUiIsInVzZXJOYW1lIjoiVXNlclRlc3QiLCJpYXQiOjE3Mzk1NTY1ODEsImV4cCI6MTczOTU2MDE4MX0.EbjIFt_PGyOLZUizQ5QT7Bmi9rI9Yw7BvLclA_wgyS0`
                    }
                }
            );

            console.log("API 응답: ", response);
            
            if (!response.data.isSuccess) {
                console.error("API 오류: ", response.data);
            }
    
            setReservations(response.data);
        } catch (error) {
            console.error("예약 내역 불러오기 실패: ", error);
        }
    };

    return (
        <div>
            <CalendarComponent 
            showDate={true} 
            onDateSelect={handleDateSelect} 
            value={selectedDate}
            dayList={dayList} // API에서 가져온 날짜 리스트 전달
            />
        </div>
    );
};

const CalendarComponent = ({ showDate, onDateSelect, value, dayList }) => {
    const tileClassName = ({ date, view }) => {
        // view가 "month"일 때만 적용
        if (view === "month") {
            // 날짜가 일요일(0) 또는 토요일(6)일 경우 빨간색
            if (date.getDay() === 0 || date.getDay() === 6) {
                return "red-day"; // "red-day" 클래스를 반환
            }
        }
        return "";
    };

    // dayList에 포함된 날짜에만 파란점 추가
    const addDotToTile = ({ date, view }) => {
        if (view === "month") {
            const formattedDate = moment(date).format("YYYY-MM-DD");

            if (dayList.includes(formattedDate)) {
                return <span className="blue-dot"></span>;
            }
        }
        return null;
    };

    return (
        <Calendar
            onChange={onDateSelect}
            value={value}
            calendarType="gregory"
            view="month"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            formatDay={(locale, date) => moment(date).format("D")}
            formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
            prevLabel={
                <img
                    src="../../assets/img/prev-button.png"
                    alt="prev"
                    className="calendar-prevnav-btn"
                />
            }
            nextLabel={
                <img
                    src="../../assets/img/next-button.png"
                    alt="next"
                    className="calendar-nextnav-btn"
                />
            }
            tileClassName={tileClassName}
            tileContent={addDotToTile}
        />
    );
};

export default ReactCalendar;
export { CalendarComponent };