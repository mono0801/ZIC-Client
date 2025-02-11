import Button from "../../Components/Button";
import { useNavigate, useParams } from "react-router-dom";

const UserPracticeRoom = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    return (
        <Button
            text={"결제"}
            onClick={() => navigate(`/user/PracticeRoom/${id}/payment`)}
        />
    );
};

export default UserPracticeRoom;
