import axios from "axios";

export const axiosRevenue = async (date) => {
    const option = {
        url: `${import.meta.env.VITE_API_URL}/api/owner/revenue?date=${date}`,
        method: "GET",
        headers: {
            Authorization: import.meta.env.VITE_JWT,
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios(option);
        return res.data.result; // 데이터를 반환
    } catch (err) {
        console.error(err);
        return err.result; // 에러가 나면 빈 객체 반환
    }
};

export const axiosOwnerPracticeRoomDetail = async () => {
    const option = {
        url: `${import.meta.env.VITE_API_URL}/api/practice-room-details/owner`,
        method: "GET",
        headers: {
            Authorization: import.meta.env.VITE_JWT,
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios(option);
        return res.data.result; // 데이터를 반환
    } catch (err) {
        console.error(err);
        return err.result; // 에러가 나면 빈 객체 반환
    }
};

export const getOwnerPracticeRoomDetail = async (practiceRoomDetailId) => {
    const option = {
        url: `${
            import.meta.env.VITE_API_URL
        }/api/practice-room-details/${practiceRoomDetailId}`,
        method: "GET",
        headers: {
            Authorization: import.meta.env.VITE_JWT,
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios(option);
        return res.data.result; // 데이터를 반환
    } catch (err) {
        console.error(err);
        return err.result; // 에러가 나면 빈 객체 반환
    }
};

// TODO : 로컬로 테스트 해보기
export const patchOwnerPracticeRoomDetail = async (id, body, method) => {
    const option = {
        url: `${import.meta.env.VITE_API_URL}/api/practice-room-details/${id}`,
        method: method,
        headers: {
            Authorization: import.meta.env.VITE_JWT,
            "Content-Type": "application/json",
        },
        data: body,
    };

    try {
        const res = await axios(option);
        return res.data.result; // 데이터를 반환
    } catch (err) {
        console.error(err);
        return err.result; // 에러가 나면 빈 객체 반환
    }
};

export const patchPracticeRoomDetailStatus = async (id) => {
    try {
        const response = await axios.patch(
            `${
                import.meta.env.VITE_API_URL
            }/api/practice-room-details/status/${id}`,
            {},
            {
                headers: {
                    Authorization: import.meta.env.VITE_JWT,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; // 성공적인 응답 처리
    } catch (err) {
        console.error(err); // 에러 처리
        throw err;
    }
};

export const postOwnerPracticeRoomDetail = async (id, body) => {
    try {
        const response = await axios.post(
            `${
                import.meta.env.VITE_API_URL
            }/api/practice-room-details?practiceRoomId=${id}`,
            body,
            {
                headers: {
                    Authorization: import.meta.env.VITE_JWT,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; // 성공적인 응답 처리
    } catch (err) {
        console.error(err); // 에러 처리
        throw err;
    }
};

export const patchOwnerPracticeRoom = async (id, body) => {
    try {
        const response = await axios.patch(
            `${import.meta.env.VITE_API_URL}/api/practice-rooms/${id}`,
            body,
            {
                headers: {
                    Authorization: import.meta.env.VITE_JWT,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data; // 성공적인 응답 처리
    } catch (err) {
        console.error(err); // 에러 처리
        throw err;
    }
};
