import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";
import axios from "axios";

const ReactCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); //하단에 예약 내역을 표시할 때 사용
    const [dayList, setDayList] = useState([]);

    /* ToDO : 하드코딩된 dayList 제거하고 api에서 받아온 데이터로 dayList 업데이트
    api 요청보내서 예약된 날짜 리스트 받아오고
    받아온 날짜 데이터 setDayList로 상태 업데이트하고
    addDotToTile에서 해당날짜만 파란점 표시되도록 하고
    클릭한 날짜에 해당하는 예약내역 하단에 뜨도록*/

    useEffect(() => {
        const fetchReservedDates = async () => {
            try {
                const response = await axios.get(
                    `https://43.200.3.214:8080/api/reservation/owner?page=${page}`, {
                        headers: {
                            Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`
                        }
            });

                // 서버에서 받은 데이터 (날짜 리스트로 변환)
                const reservedDates = response.data.map(item => item.date); 
                setDayList(reservedDates);

                console.log("예약된 날짜 리스트: ", reservedDates);
            } catch (error) {
                console.error("예약된 날짜 불러오기 실패: ", error);
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
                `http://43.200.3.214:8080/api/reservation/owner?date=${activeDate}&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`
                    }
                }
            );
    
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
            tileContent={addDotToTile}
        />
    );
};

export default ReactCalendar;
export { CalendarComponent };