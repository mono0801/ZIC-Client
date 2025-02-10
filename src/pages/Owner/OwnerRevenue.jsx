import { revenueResult } from "../../assets/owner";
import OwnerReservationStat from "../../Components/OwnerReservationStat";
import styled from "styled-components";
import Chart from "../../Components/Chart";

const StatContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5%;
`;

const Horizon = styled.div`
    border: 1px solid #f2f2f2;
    margin: 5% 0;
`;

const OwnerRevenue = () => {
    // TODO : 연도, 월 선택하는 컴포넌트 구현
    return (
        <StatContainer>
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
            <Chart list={revenueResult.result.monthlyEarning} />
        </StatContainer>
    );
};

export default OwnerRevenue;
