import styled from "styled-components";
import { practiceRooms } from "../assets/PracticeRoom";
import PracticeRoomCard from "../Components/PracticeRoomCard";
import { regions, instruments } from "../assets/category";
import Dropdown from "../Components/DropDown";
import { useEffect, useState } from "react";
import DateSelector from "../Components/DateSelector";
import { useQuery } from "@tanstack/react-query";
import { getPracticeRoomList } from "../api/etc";

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 100% 1fr;
    min-height: 0;
`;

const Wrapper = styled.div`
    padding: 5%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 18% 18% 1fr;
`;

const ParamContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    gap: 3%;
    display: grid;
    grid-template-rows: 28% 1fr;
`;

const DropDownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 10%;
`;

const DropDownWrapper = styled.div`
    display: flex;
    height: 100%;

    &:first-child {
        justify-content: start;
        width: 50%;
        gap: 5%;
    }

    &:last-child {
        width: 30%;
    }
`;

const Banner = styled.img`
    width: 100%;
    height: auto; /* 이미지 비율 유지하면서 높이 자동 조정 */
    object-fit: contain;
`;

const ListContainer = styled.div`
    margin-top: 5%;
    flex: 1;

    overflow-y: auto; /* 세로 스크롤 활성화 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */

    &::-webkit-scrollbar {
        /* Chrome, Safari에서 스크롤바 숨김 */
        display: none;
    }
`;

const Footer = styled.div`
    width: 100%;
    padding: 3% 5%;
    color: #7d7d7d;
    background: #f2f2f2;

    display: grid;
    grid-template-rows: 50% 1fr 1fr;
    grid-gap: 2%;

    p:first-child {
        font-size: 1.5rem;
        font-family: "Alongserifbsc-regular";
        margin-bottom: 5%;
    }

    p:last-child,
    p:nth-child(2) {
        font-size: 50%;
        font-family: "Pretendard-Regualr";
        white-space: nowrap;
    }
`;

const Main = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const locationOptions = regions;
    const instrumentOptions = instruments;
    const priceOptions = ["저가순", "고가순"];

    const [location, setLocation] = useState(null);
    const [instrument, setInstrument] = useState(null);
    const [price, setPrice] = useState(null);

    const { data, isLoading } = useQuery({
        queryKey: ["practiceRoom"], // queryKey는 쿼리 고유 키
        queryFn: () => getPracticeRoomList(1, 100), // 실제 데이터 요청 함수
    });

    useEffect(() => {
        if (location == null && instrument == null && price == null) {
            return;
        }
        console.log({
            location,
            instrument,
            price,
        });
    }, [location, instrument, price]);

    useEffect(() => {
        console.log(selectedDate);
    }, [selectedDate]);

    return (
        <Container>
            <Wrapper>
                <DateSelector
                    onlyMonth={false}
                    showDate={true}
                    onChange={setSelectedDate}
                />
                <ParamContainer>
                    <DropDownContainer>
                        <DropDownWrapper>
                            <Dropdown
                                label={"지역"}
                                options={locationOptions}
                                onChange={setLocation}
                            />
                            <Dropdown
                                label={"악기"}
                                options={instrumentOptions}
                                onChange={setInstrument}
                            />
                        </DropDownWrapper>
                        <DropDownWrapper>
                            <Dropdown
                                label={"가격순"}
                                options={priceOptions}
                                onChange={setPrice}
                            />
                        </DropDownWrapper>
                    </DropDownContainer>
                    <Banner src={"/assets/img/banner.png"} alt="banner" />
                </ParamContainer>
                <ListContainer>
                    {!isLoading &&
                        data.map((room) => (
                            <PracticeRoomCard
                                key={room.practiceRoomId}
                                practiceRoom={room}
                                selectedDate={selectedDate}
                            />
                        ))}
                </ListContainer>
            </Wrapper>
            <Footer>
                <p className="ZIC">ZIC</p>
                <p className="footer-info">
                    회사소개 | 개인정보 처리방침 | 서비스 이용약관 | 사업자
                    정보확인
                </p>
                <p>
                    광고제휴문의 | 위치정보 이용약관 | 전자공정거래 이용자
                    유의사항
                </p>
            </Footer>
        </Container>
    );
};

export default Main;
