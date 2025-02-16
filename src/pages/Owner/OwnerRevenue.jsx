import { revenueResult } from "../../assets/owner";
import OwnerReservationStat from "../../Components/OwnerReservationStat";
import styled from "styled-components";
import Chart from "../../Components/Chart";
import DateSelector from "../../Components/DateSelector";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

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
    const [data, setData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(
        moment().format("YYYY-MM-DD")
    );

    useEffect(() => {
        console.log(selectedDate);
        axiosRevenue(selectedDate);
    }, [selectedDate]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const axiosRevenue = (date) => {
        const option = {
            url: `${
                import.meta.env.VITE_EC2_URL
            }/api/owner/revenue?date=${date}`,
            method: "GET",
            headers: {
                Authorization: import.meta.env.VITE_OWNER_JWT,
                "Content-Type": "application/json",
            },
        };

        axios(option)
            .then((res) => {
                setData(res.data.result);
            })
            .catch((err) => console.error(err));
    };

    return (
        <StatContainer>
            <DateSelector
                onlyMonth={true}
                onChange={setSelectedDate}
                showDate={false}
            />
            {data && (
                <>
                    <OwnerReservationStat
                        text={"총 이용 횟수"}
                        list={data.practiceRoomEarning[0].practiceRoomDetail}
                        count={true}
                    />
                    <OwnerReservationStat
                        text={"총 수익"}
                        list={data.practiceRoomEarning[0].practiceRoomDetail}
                        count={false}
                    />
                    <Chart list={data.monthlyEarning} />
                </>
            )}
        </StatContainer>
    );
};

export default OwnerRevenue;
