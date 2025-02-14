import { revenueResult } from "../../assets/owner";
import OwnerReservationStat from "../../Components/OwnerReservationStat";
import styled from "styled-components";
import Chart from "../../Components/Chart";
import DateSelector from "../../Components/DateSelector";
import { useEffect, useState } from "react";
import moment from "moment";

const StatContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 25% 25% 35%;

    & > div {
        padding: 5%;

        &:nth-child(2) {
            border-bottom: 5px solid #f2f2f2;
        }
    }
`;

const OwnerRevenue = () => {
    const [selectedDate, setSelectedDate] = useState(
        moment().format("YYYY-MM-DD")
    );

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);

    return (
        <StatContainer>
            <DateSelector
                onlyMonth={true}
                onChange={setSelectedDate}
                showDate={false}
            />
            <OwnerReservationStat
                text={"총 이용 횟수"}
                list={
                    revenueResult.result.practiceRoomEarning[0]
                        .practiceRoomDetail
                }
                count={true}
            />
            <OwnerReservationStat
                text={"총 수익"}
                list={
                    revenueResult.result.practiceRoomEarning[0]
                        .practiceRoomDetail
                }
                count={false}
            />
            <Chart list={revenueResult.result.monthlyEarning} />
        </StatContainer>
    );
};

export default OwnerRevenue;
