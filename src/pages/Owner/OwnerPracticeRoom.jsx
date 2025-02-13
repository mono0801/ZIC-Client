import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { userDetailRoom } from "../../assets/userDetailRoom";
import { ownerPracticeRoom } from "../../assets/OwnerPracticeRoom";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { useDropzone } from "react-dropzone";
import PracticeRoomDetailCard from "../../Components/OwnerPracticeRoomDetailCard";
import Button from "../../Components/Button";

const MainPracticeRoomContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Banner = styled.div`
    width: 100%;
    height: 30%;
    justify-content: space-around;
    background-image: url(${(props) => props.bgphoto});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

const BackBtn = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: #7d7d7d;
    border-radius: 50%;
    position: absolute;
    top: 5%;
    left: 5%;
    cursor: pointer;

    svg {
        width: 70%;
        height: 70%;
    }

    &:hover {
        background-color: #278cff;
        color: #ffffff;
    }
`;

const PracticeRoomContainer = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 75%;
    bottom: 0;
    border-radius: 5% 5% 0 0;
    /* background-color: white; */
    overflow-y: auto;

    overflow-y: scroll; /* 세로 스크롤 활성화 */
    -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
    }
`;

const TitleContainer = styled.div`
    padding: 5%;
    width: 100%;
    height: 20%;
    background-color: white;
    border-bottom: 7px solid #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 5%;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;

    p {
        font-family: "Pretendard-SemiBold";
        font-size: 150%;
    }

    div {
        width: auto;
        border: 1px solid #dcdcdc;
        padding: 2% 3%;
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Pretendard-ExtraLight";
        color: #7d7d7d;
        cursor: pointer;
    }
`;

// ✅ FaHeart에 스타일 적용
const StyledFaHeart = styled(FaHeart)`
    color: #ff4e4e;
    margin-right: 6%;
    width: 1rem;
    height: 1rem;
`;

// ✅ CiHeart는 기본 색상 유지
const StyledCiHeart = styled(CiHeart)`
    color: #7d7d7d;
    margin-right: 6%;
    width: 1rem;
    height: 1rem;
`;

const Address = styled.div`
    color: #545454;

    a {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 2%;
        text-decoration: none;
        font-family: "Pretendard-ExtraLight";
        letter-spacing: 2%;
        margin-right: 2%;
        color: #545454;
    }
`;

const CardContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    top: 40%;

    overflow-y: auto;

    overflow-y: scroll; /* 세로 스크롤 활성화 */
    -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
    }
`;

const BtnContainer = styled.div`
    position: absolute;
    bottom: 2%;
    width: 100%;
    height: 5vh;
    padding: 0 3%;
`;

const OwnerPracticeRoom = () => {
    const navigate = useNavigate();
    const [toggleActive, setToggleActive] = useState(false);
    const [img, setImg] = useState(null);
    const [previewImg, setPreviewImg] = useState(ownerPracticeRoom.img);

    useEffect(() => {
        if (img == null) {
            return;
        } else {
            uploadImg(img).then((url) => {
                alert(
                    `연습실 대표 사진이 변경되었습니다.
                \n이미지 Url: ${url}
                `
                );
            });
        }
    }, [img]);

    // firebase에 이미지 저장하는 함수
    const uploadImg = (file) => {
        return new Promise((resolve, reject) => {
            try {
                const storage = getStorage(app);
                const fileName = `zic/test/main/${
                    file.name
                }_${new Date().getTime()}`;
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                            100;
                        console.log(progress);
                    },
                    (error) => {
                        alert("Image Upload Failed");
                        reject(error);
                    },
                    async () => {
                        try {
                            const url = await getDownloadURL(
                                uploadTask.snapshot.ref
                            );
                            resolve(url);
                        } catch (error) {
                            reject(error);
                        }
                    }
                );
            } catch (error) {
                alert("Image Upload Failed");
                reject(error);
            }
        });
    };

    // input에 이미지를 넣을 경우 미리보기 url을 변경하는 함수
    const handleImgChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        if (e.target.name === "imgUrl") {
            setPreviewImg(e.target.value);
        }
    };

    // 이미지 Drop 시 실행
    const onDrop = (acceptedFiles) => {
        const result = confirm("연습실 대표 사진을 변경하시겠습니까?");

        if (result) {
            const reader = new FileReader();
            const file = acceptedFiles;
            if (file) {
                // 이미지 파일을 읽어 setImg로 저장
                reader.readAsDataURL(file[0]); // img 파일을 base64로 인코딩
                setImg(file[0]);
            }

            reader.onload = (e) => {
                // onDrop되면 preview 되게 처리, 기존 이미지 url 정보를 공백처리
                setPreviewImg(reader.result);
                document.getElementsByName("imgUrl")[0].value = "";
            };
        } else {
            return;
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop }); // html 컴포넌트와 연결

    return (
        <MainPracticeRoomContainer>
            <Banner {...getRootProps()} bgphoto={previewImg}>
                <input multiple={false} name="imgUrl" {...getInputProps()} />
            </Banner>
            <BackBtn>
                <IoIosArrowBack onClick={() => navigate(-1)} />
            </BackBtn>

            <PracticeRoomContainer>
                <TitleContainer>
                    <Title>
                        <p>{ownerPracticeRoom.name}</p>
                        <div onClick={() => setToggleActive(!toggleActive)}>
                            {toggleActive ? (
                                <StyledFaHeart />
                            ) : (
                                <StyledCiHeart />
                            )}
                            {/* TODO : 좋아요 기능 구현 */}
                            <span>
                                {ownerPracticeRoom.like > 100
                                    ? "99+"
                                    : ownerPracticeRoom.like}
                            </span>
                        </div>
                    </Title>
                    <Address>
                        <a
                            href={`https://map.naver.com/p/search/${
                                ownerPracticeRoom.region +
                                " " +
                                ownerPracticeRoom.address
                            }`}
                        >
                            <FiMapPin />
                            {ownerPracticeRoom.region +
                                " " +
                                ownerPracticeRoom.address}
                            <MdOutlineArrowForwardIos />
                        </a>
                    </Address>
                </TitleContainer>
            </PracticeRoomContainer>
            <CardContainer>
                {userDetailRoom.map((el) => (
                    <PracticeRoomDetailCard
                        key={el.practiceRoomDetailId}
                        img={el.image}
                        name={el.name}
                        fee={el.fee}
                        PracticeRoomId={el.practiceRoomDetailId}
                        status={el.status}
                        DetailId={el.practiceRoomDetailId}
                    />
                ))}
            </CardContainer>
            <BtnContainer>
                <Button
                    text={"방 추가하기"}
                    height={"100%"}
                    onClick={() =>
                        navigate(
                            `/owner/practiceRoom/${userDetailRoom[0].practiceRoomDetailId}/practiceRoomDetail`
                        )
                    }
                />
            </BtnContainer>
        </MainPracticeRoomContainer>
    );
};

export default OwnerPracticeRoom;
