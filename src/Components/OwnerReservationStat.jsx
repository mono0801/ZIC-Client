import styled from "styled-components";

const StatContainer = styled.div`
    width: 100%;
    font-family: "Pretendard-bord";
`;

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px dashed #dcdcdc;
    padding-bottom: 2%;
    margin-bottom: 3%;

    p {
        font-size: 120%;
        font-family: "Pretendard-Bold";
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #545454;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2%;

        p {
            font-family: "Pretendard-Light";
        }
    }
`;

const OwnerReservationStat = ({ text, list, count }) => {
    let total;
    if (count) {
        total = list.reduce((acc, detail) => acc + detail.reservationCount, 0);
    } else {
        total = list.reduce((acc, detail) => acc + detail.totalRevenue, 0);
    }

    return count ? (
        <StatContainer>
            <TitleWrapper>
                <p>{text}</p>
                <p>{total}회</p>
            </TitleWrapper>
            <ContentWrapper>
                {list.map((el) => (
                    <div key={el.practiceRoomDetailId}>
                        <p>{el.practiceRoomDetailName}</p>
                        <p>{el.reservationCount}회</p>
                    </div>
                ))}
            </ContentWrapper>
        </StatContainer>
    ) : (
        <StatContainer>
            <TitleWrapper>
                <p>{text}</p>
                <p>{total.toLocaleString()}원</p>
            </TitleWrapper>
            <ContentWrapper>
                {list.map((el) => (
                    <div key={el.practiceRoomDetailId}>
                        <p>{el.practiceRoomDetailName}</p>
                        <p>{el.totalRevenue.toLocaleString()}원</p>
                    </div>
                ))}
            </ContentWrapper>
        </StatContainer>
    );
};

export default OwnerReservationStat;
