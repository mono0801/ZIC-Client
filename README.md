# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# URL

-   / [메인 페이지]
-   /practiceRoom/:id [연습실 내부방 목록 페이지]
-   /login [카카오 로그인 페이지]

## 회원가입

-   /login/loading [카카오 로그인 콜백 페이지]
-   /join/category [이용자 || 대여자 고르는 페이지]
-   /join/:role/info [유저 정보 입력 페이지]
-   /join/:role/success [유저 회원가입 성공 페이지]

## 이용자

-   /user/practiceRoom/:id/payment [이용자 내부방 예약 페이지]
-   /user/payment/loading [이용자 내부방 예약 콜백 페이지]
-   /user/reservation [이용자 예약 내역 페이지]
-   /user [이용자 마이 페이지]

## 대여자

-   /owner [대여자 메인페이지]!
-   /owner/practiceRoom [대여자 내부방 목록 페이지]
-   /owner/practiceRoom/:practiceRoomId/practiceRoomDetail/:practiceRoomDetailId [대여자 내부방 정보 변경 페이지]
-   /owner/practiceRoom/practiceRoomDetail [대여자 내부방 추가 페이지]!
-   /owner/revenue [대여자 수익 페이지]!
