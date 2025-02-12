import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 모바일인지 PC인지 검사
        const userAgent = navigator.userAgent;
        const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    return <Container>Loading - Mobile : {isMobile + ""}</Container>;
};

export default Loading;
