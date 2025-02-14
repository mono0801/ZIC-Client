/**
 * 모바일인지 PC인지 검사
 * @returns 모바일일 경우 true 반환
 */
export const checkMobile = () => {
    const userAgent = navigator.userAgent;
    return /iPhone|iPad|iPod|Android/i.test(userAgent);
};
