import axios from "axios";

export const getPracticeRoomLike = async (id) => {
    try {
        const response = await axios.get(
            `${
                import.meta.env.VITE_API_URL
            }/api/practice-rooms/${id}/likes/count`,
            {
                headers: {
                    Authorization: import.meta.env.VITE_JWT,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.data.result.likeList);
        return response.data.result.likeList; // 성공적인 응답 처리
    } catch (err) {
        console.error(err); // 에러 처리
        throw err;
    }
};

export const postPracticeRoomLike = async (id) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/practice-rooms/${id}/like`,
            {},
            {
                headers: {
                    Authorization: import.meta.env.VITE_JWT,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.isSuccess; // 성공적인 응답 처리
    } catch (err) {
        console.error(err); // 에러 처리
        throw err;
    }
};
