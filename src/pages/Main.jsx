import styled from "styled-components";
import { practiceRooms } from "../assets/PracticeRoom";
import PracticeRoomCard from "../Components/PracticeRoomCard";
import { regions, instruments } from "../assets/category";
import Dropdown from "../Components/Dropdown";
import { useEffect, useState } from "react";

const Container = styled.div`
    padding: 5%;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 0;
`;

const ParamContainer = styled.div`
    width: 100%;
    height: 17%;
    box-sizing: border-box;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DropDownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 20%;
`;

const DropDownWrapper = styled.div`
    display: flex;

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
    flex: 1;

    overflow-y: auto; /* 세로 스크롤 활성화 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */

    &::-webkit-scrollbar {
        /* Chrome, Safari에서 스크롤바 숨김 */
        display: none;
    }
`;

const Main = () => {
    const locationOptions = regions;
    const instrumentOptions = instruments;
    const priceOptions = ["저가순", "고가순"];

    const [location, setLocation] = useState(null);
    const [instrument, setInstrument] = useState(null);
    const [price, setPrice] = useState(null);

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

    return (
        <Container>
            {/* <CalendarComponent /> */}
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
                {practiceRooms.map((room) => (
                    <PracticeRoomCard
                        key={room.practiceRoomId}
                        practiceRoom={room}
                    />
                ))}
            </ListContainer>
        </Container>
    );
};

export default Main;
