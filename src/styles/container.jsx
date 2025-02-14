import styled from "styled-components";

export const JoinContainer = styled.div`
    width: 100%;
    flex: 1;
    display: grid;
    grid-template-rows: ${(props) => (props.isRole ? "30%" : "50%")} 1fr 6%;
    padding: 5%;
    box-sizing: border-box;
`;
