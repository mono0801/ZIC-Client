import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    justify-content: space-between;
    box-sizing: border-box;
`;

const Wrapper = styled.div`
    margin-top: 50%;
    width: 100%;

    display: flex;
    flex-direction: column;

    p:first-child {
        font-family: "Pretendard-Regular";
        font-size: 120%;
        color: #030303;
        margin-bottom: 5%;
    }

    p:last-child {
        font-family: "Pretendard-Bold";
        font-size: 250%;
        color: #030303;
    }
`;

const BtnWrapper = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    button {
        height: 25%;
        margin-bottom: 5%;
    }

    a {
        text-decoration: none;
        border-bottom: 1px solid #707070;
        color: #707070;
        font-family: Pretendard-Regular;
        padding: 0 7px 2px 7px;
    }
`;

const JoinSuccess = () => {
    const param = useParams();
    const navigate = useNavigate();

    const handleNext = () => {
        if (param.role == "user") {
            navigate("/");
        } else if (param.role == "owner") {
            navigate("/owner/practiceRoom");
        }
    };

    return (
        <Container>
            <Wrapper>
                <p>회원가입에</p>
                <p>성공했어요!</p>
            </Wrapper>

            <BtnWrapper>
                <Button
                    text={param.role == "owner" ? "룸 등록하기" : "예약하기"}
                    onClick={handleNext}
                />
                {param.role == "owner" && <a href="/owner">건너뛰기</a>}
            </BtnWrapper>
        </Container>
    );
};

export default JoinSuccess;
