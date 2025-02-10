import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useMatch } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import AddPracticeRoom from "../../Components/AddPracticeRoom";
import { ownerPracticeRoom } from "../../assets/OwnerPracticeRoom";

const OwnerPracticeRoomContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Banner = styled.div`
    width: 100%;
    height: 30%;
    justify-content: space-around;
    background-image: url(${(props) => props.bgphoto});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

const BackBtn = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: #7d7d7d;
    border-radius: 50%;
    position: absolute;
    top: 15%;
    left: 5%;
    cursor: pointer;

    svg {
        width: 70%;
        height: 70%;
    }

    &:hover {
        background-color: #278cff;
        color: #ffffff;
    }
`;

const PracticeRoomContainer = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 75%;
    bottom: 0;
    border-radius: 5% 5% 0 0;
`;

const TitleContainer = styled.div`
    padding: 5%;
    width: 100%;
    height: 20%;
    background-color: white;
    border-bottom: 3px solid #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;

    p {
        font-family: "Pretendard-SemiBold";
        font-size: 150%;
    }

    div {
        width: auto;
        border: 1px solid #dcdcdc;
        padding: 2% 3%;
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-ExtraLight";
        color: #7d7d7d;
        cursor: pointer;
    }
`;

// ✅ FaHeart에 스타일 적용
const StyledFaHeart = styled(FaHeart)`
    color: #ff4e4e;
    margin-right: 6%;
    width: 1rem;
    height: 1rem;
`;

// ✅ CiHeart는 기본 색상 유지
const StyledCiHeart = styled(CiHeart)`
    color: #7d7d7d;
    margin-right: 6%;
    width: 1rem;
    height: 1rem;
`;

const Address = styled.div`
    color: #545454;

    a {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 2%;

        text-decoration: none;
        font-family: "Pretendard-ExtraLight";
        letter-spacing: 2%;
        margin-right: 2%;

        &:visited {
            color: #545454;
        }
    }
`;

const OwnerPracticeRoom = () => {
    const navigate = useNavigate();
    const [toggleActive, setToggleActive] = useState(false);
    const matchOwner = useMatch("/owner/practiceRoom/:practiceRoomId");

    if (matchOwner) {
        console.log(matchOwner);
    }

    return (
        <OwnerPracticeRoomContainer>
            <Banner bgphoto={ownerPracticeRoom.img}>
                <BackBtn>
                    <IoIosArrowBack onClick={() => navigate(-1)} />
                </BackBtn>
            </Banner>

            <PracticeRoomContainer>
                <TitleContainer>
                    <Title>
                        <p>{ownerPracticeRoom.name}</p>
                        <div onClick={() => setToggleActive(!toggleActive)}>
                            {toggleActive ? (
                                <StyledFaHeart />
                            ) : (
                                <StyledCiHeart />
                            )}
                            {/* TODO : 좋아요 기능 구현 */}
                            <span>
                                {ownerPracticeRoom.like > 100
                                    ? "99+"
                                    : ownerPracticeRoom.like}
                            </span>
                        </div>
                    </Title>
                    <Address>
                        <a
                            href={`https://map.naver.com/p/search/${
                                ownerPracticeRoom.region +
                                " " +
                                ownerPracticeRoom.address
                            }`}
                        >
                            <FiMapPin />
                            {ownerPracticeRoom.region +
                                " " +
                                ownerPracticeRoom.address}
                            <MdOutlineArrowForwardIos />
                        </a>
                    </Address>
                </TitleContainer>

                {/* TODO : 유저 연습실 내부방 목록 페이지 구현 */}
                {matchOwner ? <AddPracticeRoom /> : "none"}
            </PracticeRoomContainer>
        </OwnerPracticeRoomContainer>
    );
};

export default OwnerPracticeRoom;
