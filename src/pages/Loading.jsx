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
        const userAgent = navigator.userAgent;
        const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
        setIsMobile(mobile);
        console.log(`Mobile : ${mobile}`);
    }, []);

    return <Container>Loading</Container>;
};

export default Loading;
