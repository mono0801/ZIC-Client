import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const PracticeRoom = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/user/PracticeRoom/payment");
    };

    return <Button text={"예약하기"} onClick={handleNext} />;
};

export default PracticeRoom;
