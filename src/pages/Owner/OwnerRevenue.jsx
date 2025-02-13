import { revenueResult } from "../../assets/owner";
import OwnerReservationStat from "../../Components/OwnerReservationStat";
import styled from "styled-components";
import Chart from "../../Components/Chart";
import CalendarComponent from "../../Components/Calendar";

const StatContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5%;
    box-sizing: border-box;
`;

const Horizon = styled.div`
    border: 1px solid #f2f2f2;
    margin: 5% 0;
`;

const CalendarWrapper = styled.div`
    height: 10%; /* CalendarComponent가 차지할 고정 높이 */
`;

const ChartWrapper = styled.div`
    height: 30%; /* Chart가 차지할 고정 높이 */
    margin-top: 5%; /* 차트와 다른 콘텐츠 사이에 여백 */
    box-sizing: border-box;
`;

const OwnerRevenue = () => {
    return (
        <StatContainer>
            <CalendarWrapper>
                <CalendarComponent showDate={false} />
            </CalendarWrapper>
            <OwnerReservationStat
                text={"총 이용 횟수"}
                list={
                    revenueResult.result.practiceRoomEarning[0]
                        .practiceRoomDetail
                }
                count={true}
            />
            <Horizon />
            <OwnerReservationStat
                text={"총 수익"}
                list={
                    revenueResult.result.practiceRoomEarning[0]
                        .practiceRoomDetail
                }
                count={false}
            />
            <ChartWrapper>
                <Chart list={revenueResult.result.monthlyEarning} />
            </ChartWrapper>
        </StatContainer>
    );
};

export default OwnerRevenue;
