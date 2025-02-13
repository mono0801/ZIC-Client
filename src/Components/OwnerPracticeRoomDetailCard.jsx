import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 40%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 7px solid #f2f2f2;
    gap: 2%;
`;

const Banner = styled.div`
    width: 100%;
    height: 90%;
    margin-bottom: 2%;
    justify-content: space-around;
    background-image: url(${(props) => props.bgphoto});
    filter: ${(props) =>
        props.isAvailable == "AVAILABLE" ? "none" : "grayscale(100%)"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1rem;
    cursor: pointer;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FeeContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4%;
`;

const Bold = styled.p`
    font-family: "Pretendard-Regular";
    font-size: 130%;
`;

const Light = styled.div`
    font-family: "Pretendard-Light";
    font-size: 80%;
    color: #545454;
`;

const PracticeRoomDetailCard = ({
    img,
    name,
    fee,
    PracticeRoomId,
    status,
    DetailId,
}) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Banner
                bgphoto={img}
                isAvailable={status}
                onClick={() =>
                    navigate(
                        `/owner/practiceRoom/${PracticeRoomId}/practiceRoomDetail/${DetailId}`
                    )
                }
            />
            <InfoContainer>
                <Bold>{name}</Bold>
                <FeeContainer>
                    <Light>1시간</Light>
                    <Bold>{fee.toLocaleString()}원</Bold>
                </FeeContainer>
            </InfoContainer>
        </Container>
    );
};

export default PracticeRoomDetailCard;
