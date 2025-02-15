import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";
import { useState } from "react";

const CalendarComponent = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    
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

    const handleDateChange = (date) => {
        setSelectedDate(date); // 내부적으로 선택된 날짜 업데이트
        onDateSelect(date); // 부모 컴포넌트에도 선택된 날짜 전달
    };

    return (
        <Calendar
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
            onChange={handleDateChange}
            tileClassName={tileClassName}
            value={selectedDate}
        />
    );
};

export default CalendarComponent;
