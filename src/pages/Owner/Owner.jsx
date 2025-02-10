import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../../Components/Calendar";

const Owner = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/owner/practiceRoom/1");
    };

    return (
        <div>
            <CalendarComponent />
            <Button text={"룸 추가하기"} onClick={handleNext} />
        </div>
    );
};

export default Owner;
