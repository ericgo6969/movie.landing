import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { boxResUS, boxResVN } from "../mock/data";
import {
    horizontalScroll,
    textAnimation,
    fixedScroll,
} from "../hooks/animations";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Home: NextPage = () => {
    const firstRender = useRef(false);

    useEffect(() => {
        // if (firstRender.current) {
        gsap.registerPlugin(ScrollTrigger);
        textAnimation("#block0");
        textAnimation("#block1");
        fixedScroll("#block1-fix-scroll");
        textAnimation("#block2");
        fixedScroll("#block2-fix-scroll");
        textAnimation("#block3");
        fixedScroll("#block3-fix-scroll");
        textAnimation("#block4");
        horizontalScroll("#horizontal1");
        textAnimation("#block5");
        horizontalScroll("#horizontal2");
        textAnimation("#block6");
        // }

        // return () => {
        //     firstRender.current = true;
        // };
    }, []);

    return (
        <>
            <Head>
                <title className="uppercase">
                    50 năm chiến thắng Điện Biên Phủ trên không 1972
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="overflow-hidden">
                <div id="block0">
                    <div className="h-screen w-screen bg-main bg-cover">
                        <h1 className="scale text-6xl lead-[4.5rem] text-[70px] max-w-[100vw] w-[915px] m-auto text-white font-bold pt-[80px] uppercase">
                            Cuộc đối đầu trên bầu trời Hà Nội năm 1972
                        </h1>
                    </div>
                </div>

                <div className="px-[15px]">
                    <div id="block1">
                        <section className="max-w-[660px] m-auto text-left pt-[30px]">
                            <p className="font-bold mb-10 translate">
                                Trưa 18/12/1972, khi những tốp B-52 đầu tiên cất
                                cánh từ căn cứ không quân Andersen trên đảo Guam
                                (Thái Bình Dương) nhằm hướng tây bay tới, chiến
                                dịch phòng không toàn miền Bắc Việt Nam lập tức
                                khởi động.
                            </p>
                            <div className="translate">
                                <p className="mb-6">
                                    15h cùng ngày, tại Đông Anh (Hà Nội), Tiểu
                                    đoàn tên lửa 57 được lệnh ăn cơm sớm ba
                                    tiếng. Tiểu đoàn trưởng Nguyễn Văn Phiệt
                                    kiểm tra lại quân số, vẫn còn thiếu vài cán
                                    bộ đang cấp tốc cắt phép trở về. Tên lửa
                                    SAM-2 đã nằm trên trận địa Đại Đồng chờ khai
                                    hỏa. Toàn Quân chủng Phòng không Không quân
                                    chuyển trạng thái sẵn sàng chiến đấu.
                                </p>
                                <p className="mb-6">
                                    1972 là năm mấu chốt cho chấm dứt chiến
                                    tranh Việt Nam với đàm phán bốn bên gồm Mỹ,
                                    Việt Nam Dân chủ Cộng hòa, Chính phủ Cách
                                    mạng lâm thời Cộng hòa miền Nam Việt Nam và
                                    Việt Nam Cộng hòa tại Paris. Bốn năm với hơn
                                    hai trăm phiên họp, hội nghị vẫn chưa đi đến
                                    kết quả cuối cùng.
                                </p>
                                <p className="mb-6">
                                    Ngày 14/12, đàm phán tạm ngừng, Tổng thống
                                    Mỹ Richard Nixon phê duyệt kế hoạch ném bom
                                    mùa Giáng sinh mang mật danh Linebacker II.
                                    Mục tiêu dùng B-52 đánh Hà Nội, Hải Phòng
                                    nhằm mặc cả với miền Bắc những điều khoản có
                                    lợi và chính quyền Sài Gòn thấy "không bị bỏ
                                    rơi".
                                </p>
                                <p className="mb-6">
                                    B-52 là một trong ba trụ cột răn đe hạt nhân
                                    của Mỹ (cùng với tên lửa đạn đạo xuyên lục
                                    địa và tàu ngầm mang tên lửa đạn đạo), được
                                    truyền thông nước này xem là "pháo đài bất
                                    khả xâm phạm". Hồi tháng 4/1972, B-52 từng
                                    đánh phá Nghệ An, Thanh Hóa, Hải Phòng nhằm
                                    "kiểm tra năng lực phòng không" của miền Bắc
                                    Việt Nam.
                                </p>
                                <p className="mb-6">
                                    Không gặp nhiều trở ngại khiến Lầu Năm Góc
                                    tự tin khích lệ phi công B-52: "Bay vào Hà
                                    Nội chỉ như một cuộc dạo chơi trong đêm
                                    phương Đông. Ở độ cao 10.000 m, đối phương
                                    không thể với tới. Các bạn chỉ cần ấn nút
                                    rồi trở về căn cứ an toàn, sạch sẽ".
                                </p>
                            </div>
                        </section>

                        <section className="pt-[30px] text-left max-w-[660px] m-auto">
                            <div className="scale mb-[35px] text-[45px] leading-[3rem] text-center uppercase">
                                DÀN TRẬN
                            </div>
                            <div className="translate">
                                <div className="mb-6">
                                    Mỹ bố trí B-52 tại hai căn cứ Andersen trên
                                    đảo Guam (Thái Bình Dương) và Utapao (Thái
                                    Lan). Máy bay tiếp dầu xuất phát từ Okinawa
                                    (Nhật Bản) và Philippines. Lực lượng tiêm
                                    kích chiến thuật được huy động từ căn cứ
                                    không quân ở Đà Nẵng, Biên Hòa, Tân Sơn Nhất
                                    (miền Nam Việt Nam) và 5 sân bay quân sự ở
                                    Thái Lan.
                                </div>
                                <div className="mb-6">
                                    Các phi đội B-52 tập kích Hà Nội theo hai
                                    hướng. Chính yếu tây bắc, đội hình xuất phát
                                    từ căn cứ Utapao - cách Hà Nội hơn 1.000 km,
                                    bay qua thượng Lào, lấy điểm kiểm tra cuối
                                    cùng ở Phú Thọ hoặc nam Việt Trì, Nà Sản rồi
                                    vào không phận Hà Nội. Đội hình đi về hết
                                    4,5-5,5 tiếng. Từ căn cứ này, mỗi chiếc
                                    B-52D mang 22,3 tấn bom (99 quả bom, 225
                                    kg/quả).
                                </div>
                                <div className="mb-6">
                                    Hướng thứ yếu tây nam, B-52 xuất phát từ đảo
                                    Guam, cách Hà Nội khoảng 4.600 km, tiếp dầu
                                    dọc đường rồi bay vào Quy Nhơn, đến Hạ Lào
                                    vòng lên phía bắc và đột nhập vùng trời Sơn
                                    La. Theo hướng này, đội hình đi về mất 14-16
                                    tiếng. Mỗi chiếc B-52G mang gần 9,2 tấn bom
                                    (27 quả, mỗi quả 340 kg). B-52D mang 60 quả,
                                    tổng 13,5 tấn bom.
                                </div>
                                <div className="mb-6">
                                    Đường rút của phi đội theo hướng tây nam,
                                    thoát sang Lào rồi quay về đường bay cũ hoặc
                                    ra Biển Đông. Với Hải Phòng, B-52 đột nhập
                                    từ hướng đông bắc theo cửa Nam Triệu và đông
                                    nam theo sông Văn Úc.
                                </div>
                            </div>
                        </section>

                        <div className="px-[15px] w-screen translate">
                            <img
                                src="/images/section1/background.png"
                                alt=""
                                className="w-full h-auto max-h-full"
                            />
                            <p className="text-desc mx-auto mt-[10px] mb-6">
                                Nguồn: LSU Report, SAC Symposium, 12/2017
                            </p>
                        </div>

                        <div className="translate pt-[30px] text-left max-w-[660px] m-auto">
                            <div className="mb-6">
                                Về phía miền Bắc, Tiểu đoàn trưởng tên lửa 57
                                Nguyễn Văn Phiệt khi ấy, sau này là Phó tư lệnh
                                chính trị Phòng không Không quân, khẳng định:
                                "Cuộc chiến không bất ngờ". Khi miền Bắc chống
                                chiến tranh phá hoại lần đầu 1965-1968, Chủ tịch
                                Hồ Chí Minh dự báo "sớm muộn đế quốc Mỹ cũng đưa
                                B-52 ra đánh Hà Nội".
                            </div>
                            <div className="mb-6">
                                Từ nhiều năm trước, miền Bắc đã nghiên cứu cách
                                đánh B-52 và hoàn thiện trước cuộc tập kích chỉ
                                một tháng. Theo trung tướng Phiệt, khó nhất làm
                                sao bắt được nhiễu B-52. Khi bay ném bom, B-52
                                mang tới 17 máy phát nhiễu, kèm theo đội hình
                                máy bay tác chiến điện tử, cường kích thả xuống
                                hàng triệu sợi mồi bẫy bằng kim loại, tạo thành
                                bức màn chắn mọi sóng radar, che kín tầm mắt của
                                tên lửa và tiêm kích đối phương.
                            </div>
                            <div className="mb-6">
                                Bộ đội tên lửa đã dựng quy trình bắt tín hiệu
                                B-52, đưa trắc thủ, kíp chiến đấu vào Quân khu
                                IV - nơi pháo đài bay thường hoạt động để tập
                                vạch nhiễu tìm B-52, khảo nghiệm cách đánh. Bộ
                                đội radar mang khí tài lên núi, phát sóng cảnh
                                giới từ xa. Phi đội MiG-21 huấn luyện bay chặn
                                kích cả ngày lẫn đêm, tập cất hạ cánh trên đường
                                bay ngắn; cao xạ tập đánh máy bay chiến thuật;
                                dân quân tự vệ túc trực bên súng...
                            </div>
                            <div className="mb-6">
                                Dự đoán B-52 tập kích Hà Nội chủ yếu hai hướng
                                tây bắc và tây nam, các trung đoàn tên lửa lập
                                trận địa chặn đánh từ cửa ngõ theo hai hướng này
                                và phía nam thành phố.
                            </div>
                            <div className="mb-6">
                                Sau ba lần bổ sung, phương án chống tập kích
                                đường không được Bộ Tổng tham mưu phê duyệt ngày
                                24/11/1972. Mục tiêu "tập trung cao nhất lực
                                lượng bảo vệ Hà Nội, Hải Phòng. Đối tượng tác
                                chiến chủ yếu là máy bay B-52 và quyết tâm bắn
                                rơi B-52 tại chỗ". Tên lửa là chủ lực đánh B-52
                                thay vì không quân như dự kiến ban đầu.
                            </div>
                            <div className="mb-6">
                                Cuộc sơ tán lớn nhất trong lịch sử kháng chiến
                                Thủ đô hoàn thành trưa 18/12/1972. Thành phố chỉ
                                còn lại cơ quan chỉ huy, lực lượng chiến đấu, tự
                                vệ với lưới lửa phòng không tầng cao, tầng thấp
                                giăng sẵn khiến đối phương có thể "bước trên đầu
                                ngọn súng".
                            </div>
                        </div>
                    </div>

                    <section
                        id="block1-fix-scroll"
                        className="h-max w-full relative bg-section2-img1"
                    >
                        <div className="pin-wrap absolute w-screen top-0 left-0 -z-10">
                            <div className="relative w-full h-screen">
                                <img
                                    src="/images/section2/background1.png"
                                    alt=""
                                    className="image md:w-auto md:h-screen w-full h-auto max-h-full max-w-full absolute top-0 left-[15px] -z-[2]"
                                />
                                <img
                                    src="/images/section2/background2.png"
                                    alt=""
                                    className="image md:w-auto md:h-screen w-full h-auto max-h-full max-w-full absolute top-0 left-[15px] -z-[1] opacity-0"
                                />
                            </div>
                        </div>
                        <div className="w-full scroll flex flex-col items-end h-max">
                            <div className="image-box w-[342px] mt-[100%] h-max pl-[39px] pb-[15px] pt-4 pr-[19px] shadow-section2 rounded-[5px] bg-white text-left">
                                <p className="font-bold mb-6">
                                    Trung đoàn tên lửa:
                                </p>
                                <div className="mb-6">
                                    <strong>E261</strong> (4 tiểu đoàn tên lửa):
                                    Đón đánh B-52 hướng tây - tây bắc.
                                </div>
                                <div className="mb-6">
                                    <strong>E257</strong> (4 tiểu đoàn tên lửa):
                                    Đánh B-52 hướng tây - tây nam.
                                </div>
                                <div className="mb-6">
                                    <strong>E274:</strong> Vừa từ chiến trường
                                    ra, chủ yếu dự bị cho Hà Nội, trấn giữ Thanh
                                    Oai, Thường Tín.
                                </div>
                            </div>
                            <div className="image-box w-[342px] h-max pl-[39px] pb-[15px] pt-4 pr-[19px] my-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                <p className="font-bold mb-6">Pháo cao xạ:</p>
                                <div className="mb-6">
                                    5 trung đoàn phụ trách các hướng đông bắc,
                                    tây bắc, nam Hà Nội; Gia Lâm, Như Quỳnh và
                                    Hoài Đức, Hà Đông.
                                </div>
                            </div>
                        </div>
                    </section>

                    <div id="block2">
                        <section className="pt-[30px] text-left">
                            <div className="max-w-[660px] m-auto">
                                <div className="mb-[35px] text-[45px] leading-[3rem] text-center uppercase scale">
                                    NHỮNG ÁT CHỦ BÀI
                                </div>
                                <div className="translate">
                                    <div className="mb-6">
                                        Lầu Năm Góc huy động gần một nửa số B-52
                                        (193/400 chiếc), cất cánh 663 lần; hơn
                                        1/3 số máy bay chiến thuật (khoảng
                                        1.200), cất cánh gần 4.000 lần, 6 trên
                                        tổng số 24 tàu sân bay, 66 tàu chiến của
                                        Hạm đội 7 ở vịnh Bắc Bộ. Đây là cuộc tập
                                        kích đường không lớn nhất trong lịch sử
                                        chiến tranh.
                                    </div>
                                    <div className="mb-6">
                                        B-52 ném bom theo đội hình, mỗi tốp 3
                                        chiếc, mỗi đợt ít nhất 6 chiếc và nhiều
                                        nhất 75 chiếc, theo tài liệu chỉ huy tác
                                        chiến phía Việt Nam năm 1972. Hộ tống
                                        dàn B-52 là hàng chục chiến đấu cơ làm
                                        nhiệm vụ săn lùng MiG-21, thả dải nhiễu
                                        và chế áp trận địa tên lửa... Các trận
                                        tập kích dùng B-52 ném bom ban đêm, máy
                                        bay chiến thuật đánh bồi dai dẳng ban
                                        ngày, máy phát nhiễu điện tử hiện đại hỗ
                                        trợ.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-section3 w-screen bg-repeat-x px-[15px]">
                                <div className="w-full mb-6 scale">
                                    <img
                                        className="h-[91px] w-auto max-w-full m-auto"
                                        src="/images/USflag.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="mb-6 text-3xl text-center -translate">
                                    Máy bay ném bom chiến lược{" "}
                                    <strong>B-52</strong>
                                </p>
                                <img
                                    className="w-full h-auto max-h-full translate"
                                    src="/images/section3/image1.png"
                                    alt=""
                                />
                                <div className="-translate max-w-[731px] pt-[35px] mx-auto">
                                    <img
                                        className="w-full h-auto max-h-full"
                                        src="/images/section3/image2.png"
                                        alt=""
                                    />
                                </div>

                                <img
                                    className="w-full h-auto max-h-full mt-5 translate"
                                    src="/images/section3/image3.png"
                                    alt=""
                                />
                                <div className="mt-[60px]">
                                    <p className="mb-6 text-[30px] text-center -translate">
                                        Đội hình bay
                                    </p>
                                    <img
                                        className="w-full h-auto max-h-full translateX"
                                        src="/images/section3/image4.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="mt-[60px] translate">
                            <p className="text-center text-[30px] mb-10">
                                Chỉ huy
                            </p>
                            <div className="flex flex-wrap justify-center items-center">
                                <div className="px-4 lg:mb-0 mb-4 flex flex-col justify-center items-center">
                                    <img
                                        src="/images/section4/avt1.png"
                                        alt=""
                                        className="h-[200px] w-auto max-w-full"
                                    />
                                    <span className="mt-[5px]">
                                        Đại tướng
                                        <br />
                                        <strong>John W. Vogt</strong>
                                        <br />
                                        Chỉ huy Tập đoàn không quân số 7
                                    </span>
                                </div>
                                <div className="px-4 lg:mb-0 mb-4 flex flex-col justify-center items-center">
                                    <img
                                        src="/images/section4/avt2.png"
                                        alt=""
                                        className="h-[200px] w-auto max-w-full"
                                    />
                                    <span className="mt-[5px]">
                                        Đại tướng
                                        <br />
                                        <strong>John C. Meyer</strong>
                                        <br />
                                        Bộ tư lệnh Không quân chiến lược Mỹ
                                        (SAC)
                                    </span>
                                </div>
                                <div className="px-4 lg:mb-0 mb-4 flex flex-col justify-center items-center">
                                    <img
                                        src="/images/section4/avt3.png"
                                        alt=""
                                        className="h-[200px] w-auto max-w-full"
                                    />
                                    <span className="mt-[5px]">
                                        Phó đô đốc
                                        <br />
                                        <strong>Damon W. Cooper</strong>
                                        <br />
                                        Chỉ huy Nhóm tác chiến số 77
                                    </span>
                                </div>
                            </div>
                            <p className="mb-6 mt-[10px] mx-auto text-desc">
                                Nguồn: To Hanoi and Back: The U.S. Air Force and
                                North Vietnam, 1966–1973
                            </p>
                        </section>

                        <section className="text-left mt-[100px] bg-section3 bg-repeat-x">
                            <div className="max-w-[660px] m-auto">
                                <div className="w-full mb-6 scale">
                                    <img
                                        className="h-[91px] w-auto max-w-full m-auto"
                                        src="/images/VNflag.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="translate">
                                    <div className="mb-6">
                                        Chiến dịch phòng vệ do Bộ tư lệnh Quân
                                        chủng Phòng không Không quân tổ chức,
                                        chỉ huy 6 trung đoàn tên lửa, 4 trung
                                        đoàn tiêm kích, 16 trung đoàn và 22 tiểu
                                        đoàn pháo phòng không, 4 trung đoàn
                                        radar, 346 đơn vị pháo, súng máy phòng
                                        không của bộ đội địa phương và dân quân
                                        tự vệ.
                                    </div>
                                    <div className="mb-6">
                                        Tên lửa là lực lượng có điều kiện tiêu
                                        diệt B-52, song các đơn vị đang phân tán
                                        nhiều nhiệm vụ. Bảo vệ Hà Nội lúc này có
                                        9 tiểu đoàn. Ông Nguyễn Văn Phiệt kể, bộ
                                        khí tài của Tiểu đoàn 57 đã qua 14.000
                                        giờ mở máy, dính trận lụt một năm trước
                                        tưởng được nghỉ ngơi, nhưng phải làm
                                        nhiệm vụ.
                                    </div>
                                </div>
                            </div>
                            <img
                                className="xl:h-screen xl:w-auto h-auto w-screen max-h-full max-w-full translateX"
                                src="/images/section5/image1.png"
                                alt=""
                            />
                            <div className="pt-[50px] -translateX">
                                <img
                                    className="h-auto w-full max-h-full"
                                    src="/images/section5/image2.png"
                                    alt=""
                                />
                            </div>

                            <div className="pt-5 scale">
                                <img
                                    className="h-auto w-full max-h-full"
                                    src="/images/section5/image3.png"
                                    alt=""
                                />
                            </div>
                        </section>

                        <section className="mt-[60px] translate">
                            <p className="text-center text-[30px] mb-10">
                                Chỉ huy
                            </p>
                            <div className="flex flex-wrap justify-center items-center">
                                <div className="px-4 lg:mb-0 mb-4 flex flex-col justify-center items-center">
                                    <img
                                        src="/images/section6/avt1.png"
                                        alt=""
                                        className="h-[200px] w-auto max-w-full"
                                    />
                                    <span className="mt-[5px]">
                                        Thượng tướng
                                        <br />
                                        <strong>Văn Tiến Dũng</strong>
                                        <br />
                                        Tổng tham mưu trưởng QĐND Việt Nam
                                    </span>
                                </div>
                                <div className="px-4 lg:mb-0 mb-4 flex flex-col justify-center items-center">
                                    <img
                                        src="/images/section6/avt2.png"
                                        alt=""
                                        className="h-[200px] w-auto max-w-full"
                                    />
                                    <span className="mt-[5px]">
                                        Thiếu tướng
                                        <br />
                                        <strong>Phùng Thế Tài</strong>
                                        <br />
                                        Phó tổng tham mưu trưởng QĐND Việt Nam
                                    </span>
                                </div>
                                <div className="px-4 lg:mb-0 mb-4 flex flex-col justify-center items-center">
                                    <img
                                        src="/images/section6/avt3.png"
                                        alt=""
                                        className="h-[200px] w-auto max-w-full"
                                    />
                                    <span className="mt-[5px]">
                                        Đại tá
                                        <br />
                                        <strong>Lê Văn Tri</strong>
                                        <br />
                                        Tư lệnh Phòng không Không quân
                                    </span>
                                </div>
                            </div>
                            <p className="mb-6 mt-[10px] mx-auto text-desc">
                                Nguồn: Tài liệu hội thảo khoa học do Viện Lịch
                                sử quân sự tổ chức
                            </p>
                        </section>

                        <section className="pt-[60px] text-left max-w-[660px] m-auto">
                            <div className="mb-[35px] text-[45px] leading-[3rem] text-center uppercase scale">
                                ĐỐI MẶT
                            </div>
                            <div className="translate">
                                <div className="mb-6">
                                    Từ sáng đến chiều 18/12, máy bay Mỹ đột ngột
                                    giảm tần suất hoạt động. Toàn bộ màn hình
                                    radar cảnh giới "trong vắt". Những dấu hiệu
                                    không bình thường báo hiệu một trận đánh
                                    lớn.
                                </div>
                                <div className="mb-6">
                                    Xế chiều, Bộ Tổng tham mưu chỉ thị cho kíp
                                    trực ban tác chiến phải ở lại hầm T1. "Đồng
                                    chí Lê Đức Thọ từ Paris về. Máy bay vừa hạ
                                    cánh. Hội nghị bế tắc. Ta phải cảnh giác cao
                                    độ. Nó đánh đấy", mệnh lệnh được đưa ra.
                                </div>
                                <div className="mb-6">
                                    16h - gần bốn tiếng trước khi B-52 ném bom
                                    Hà Nội, tin tình báo báo về "nhiều tốp B-52
                                    đã cất cánh từ sân bay trên đảo Guam". Toàn
                                    Quân chủng Phòng không Không quân sẵn sàng
                                    chiến đấu. "Cùng thời điểm, Nixon gửi công
                                    hàm như một tối hậu thư, hạn trong 72 giờ ta
                                    phải trở lại bàn đàm phán theo những điều
                                    kiện của Mỹ", Đại tướng Võ Nguyên Giáp kể
                                    lại trong hồi ký.
                                </div>
                                <div className="mb-6">
                                    Gần 19h, trạm radar của Trung đoàn 291 phía
                                    tây Nghệ An là điểm đầu tiên bắt được tín
                                    hiệu B-52, phát cảnh báo về trung tâm tác
                                    chiến "B-52 đang hướng Hà Nội bay tới".
                                </div>
                                <div className="mb-6">
                                    Thiếu tướng Nguyễn Văn Ninh, Trợ lý tên lửa
                                    Cục Tác chiến khi ấy, kể lại ông vã mồ hôi
                                    lạnh, "nhiều năm đánh Pháp, đánh Mỹ cộng lại
                                    chưa bao giờ hai vai nặng trĩu như lúc này".
                                    Báo cáo Bộ Tổng tham mưu, ông xin kéo còi
                                    báo động sớm hơn quy định 35 phút. Tín hiệu
                                    báo động phòng không toàn miền Bắc rú vang,
                                    nhân dân gấp rút sơ tán xuống hầm.
                                </div>
                                <div className="mb-6">
                                    Dưới chân hoàng thành Thăng Long, điện thoại
                                    liên lạc giữa hầm D67 từ Tổng hành dinh và
                                    Hầm chỉ huy tác chiến T1 liên tục réo. Trong
                                    hầm T1, ai nấy mồ hôi đẫm áo dù là đêm đông.
                                </div>
                                <div className="mb-6">
                                    Về phía Mỹ, để tập kích Hà Nội, B-52 xuất
                                    phát từ Utapao theo hướng tây bắc và Guam
                                    theo hướng tây nam. Máy bay chiến thuật từ 6
                                    tàu sân bay trên vịnh Bắc Bộ và đất Thái
                                    Lan. Trọng điểm bắn phá là Hà Nội, Hải
                                    Phòng. Một số ngày, vùng ngoại vi như Thái
                                    Nguyên, Bắc Giang, Lạng Sơn cũng bị đội bom.
                                </div>
                            </div>
                        </section>
                    </div>

                    <section
                        id="block2-fix-scroll"
                        className="h-max w-full relative"
                    >
                        <div className="w-full h-max flex justify-end relative">
                            <div className="pin-wrap absolute top-0 left-0 -z-10">
                                <div className="mb-[15px] m-auto flex relative justify-center items-center gap-[1px] pt-2 w-[calc(100vw_-_30px)]">
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 py-1 font-bold bg-[#333] text-white">
                                        <p className="text-[22px]">18/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">22/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">23/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">24/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">26/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">27/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] md:rounded-r-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">28/12</p>
                                    </div>
                                    <div className="max-w-[135px] md:w-[25%] w-[135px] rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0] time-label md:!opacity-100 md:static absolute left-1/2 -translate-x-1/2 top-2 opacity-0 bg-second py-1 font-bold">
                                        <p className="text-[22px]">29/12</p>
                                    </div>
                                </div>
                                <div className="xl:h-[calc(100vh_-_95px)] xl:w-[90vw] w-full h-screen relative md:mt-0 mt-11">
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 -z-[2]"
                                        src="/images/section7/map1812.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2212.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2312.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2412.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2612.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2712.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2812.png"
                                        alt=""
                                    />
                                    <img
                                        className="image xl:w-auto max-h-full xl:h-full max-w-full w-full h-auto absolute top-0 left-0 opacity-0 -z-[1]"
                                        src="/images/section7/map2912.png"
                                        alt=""
                                    />
                                </div>

                                <p className="text-center text-desc">
                                    Nguồn: Linebacker II: A View from the Rock
                                </p>
                            </div>
                            <div className="w-full scroll flex flex-col items-end h-max">
                                <div className="image-box w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] mt-[100%] shadow-section2 rounded-[5px] bg-white text-left">
                                    <div className="mb-6">
                                        Mỹ huy động B-52, máy bay chiến thuật,
                                        chia ba đợt ném bom 135 điểm tại Hà Nội.
                                        Mục tiêu đầu tiên là sân bay Hòa Lạc,
                                        Nội Bài, Gia Lâm, Kép (Bắc Giang), Yên
                                        Bái nhằm chặn đường MiG-21 cất cánh,
                                        tiếp đến là Đài Tiếng nói Việt Nam,
                                        đường sắt Yên Viên, kho hàng ở Đông
                                        Anh... Đêm 18 rạng sáng 19/12, 3 chiếc
                                        B-52 bị tên lửa miền Bắc bắn hạ.
                                    </div>
                                </div>
                                <div className="image-box w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                    <div className="mb-6">
                                        B-52 đánh phá Hải Phòng ban đêm. Cường
                                        độ xuất kích giảm so với ngày đầu. Song
                                        Mỹ mất thêm 3 B-52, 2 chiếc trong đó bị
                                        bộ đội tên lửa Hải Phòng bắn hạ, chiếc
                                        còn lại rơi dưới đạn pháo 100 mm của
                                        Trung đoàn cao xạ bảo vệ Thái Nguyên.
                                    </div>
                                </div>
                                <div className="image-box w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                    <div className="mb-6">
                                        Ban ngày, máy bay chiến thuật đánh phá
                                        ngoại thành Hà Nội, ban đêm B-52 ném bom
                                        Đồng Mỏ (Lạng Sơn), Bắc Giang. F-4,
                                        F-111 tiếp tục không kích sân bay Nội
                                        Bài, Yên Bái, Kiến An (Hải Phòng).
                                    </div>
                                </div>
                                <div className="image-box w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                    <div className="mb-6">
                                        Đêm Giáng sinh, B-52 chủ yếu từ căn cứ
                                        Utapao theo hướng tây bắc ném bom Thái
                                        Nguyên và Kép. 24h, Mỹ tuyên bố tạm
                                        ngưng ném bom.
                                    </div>
                                </div>
                                <div className="image-box mb-[389px]">
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Không kích tiếp diễn, Mỹ quyết tâm
                                            hủy diệt Hà Nội khi cho B-52 xuất
                                            kích tới 105 lần, máy bay chiến
                                            thuật 110 lần. Máy bay ném bom tập
                                            kích từ ba hướng tây bắc, đông nam
                                            và đông bắc. Các tốp "B-52 giả" tăng
                                            nghi binh, đánh lừa tên lửa SAM-2,
                                            MiG-21.
                                        </div>
                                    </div>
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Mỗi đợt ném bom chia nhiều khu vực
                                            để phân tán hỏa lực của tên lửa. Mục
                                            tiêu đánh phá tăng lên 120 điểm, tập
                                            trung khu đông dân cư như Khâm
                                            Thiên, Tương Mai, Bệnh viện Bạch
                                            Mai...
                                        </div>
                                    </div>
                                </div>
                                <div className="image-box w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                    <div className="mb-6">
                                        Từ sáng sớm, các loại máy bay chiến
                                        thuật áp chế dữ dội trận địa tên lửa ở
                                        Thanh Oai, Gia Lâm (Hà Nội) và Hải
                                        Phòng. Số lần B-52 xuất kích giảm còn 60
                                        và ném bom một đợt vào giữa đêm. Lần đầu
                                        tiên, B-52 bị bắn hạ bởi tiêm kích
                                        MiG-21 do Phạm Tuân lái.
                                    </div>
                                </div>
                                <div className="image-box w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                    <div className="mb-6">
                                        Mất 31 B-52 sau 10 đêm, Mỹ chuyển hướng
                                        đánh phá ngoại vi Hà Nội, Đồng Mỏ (Lạng
                                        Sơn). B-52 huy động trong ba đêm cuối
                                        chiến dịch giảm trung bình 60 lần xuất
                                        kích mỗi đêm.
                                    </div>
                                </div>
                                <div className="image-box mb-[389px]">
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Không tập trung ở tọa độ lửa Hà Nội,
                                            B-52 chủ yếu ném bom các tỉnh vòng
                                            ngoài như Thái Nguyên, Lạng Sơn,
                                            Vĩnh Phú, ngoại vi Hải Phòng, Quảng
                                            Ninh.
                                        </div>
                                    </div>
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Đêm cuối cùng tập kích, Mỹ mất thêm
                                            một B-52 và một F-4. Chiếc F-4 cuối
                                            cùng rơi trên bầu trời miền Bắc do
                                            phi công Bùi Doãn Độ bắn hạ.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        id="block3"
                        className="p-10 max-w-[660px] m-auto text-left"
                    >
                        <div className="mb-[35px] text-[45px] leading-[3rem] text-center uppercase scale">
                            ĐÁP TRẢ
                        </div>
                        <div className="mb-6 translate">
                            Bộ tư lệnh Quân chủng Phòng không Không quân lập
                            trận địa chặn đánh theo hai hướng tây bắc, tây nam
                            và phía nam Hà Nội. Các trận địa tên lửa, pháo cao
                            xạ cũng được bố trí khắp miền Bắc, trọng tâm là Hà
                            Nội, Hải Phòng.
                        </div>
                    </section>

                    <section
                        id="block3-fix-scroll"
                        className="fix-scroll h-max w-full relative"
                    >
                        <div className="w-full h-full flex justify-end relative">
                            <div className="pin-wrap absolute top-0 left-0 -z-10">
                                <div className="mb-[15px] m-auto overflow-auto flex justify-center items-center gap-[1px] pt-2 w-[calc(100vw_-_30px)]">
                                    <div className="time-label w-[250px] !opacity-100 py-1 font-bold bg-[#333] text-white rounded-l-[20px]">
                                        <p className="text-[22px]">18/12</p>
                                    </div>
                                    <div className="time-label w-[250px] !opacity-100 bg-second py-1 font-bold">
                                        <p className="text-[22px]">20/12</p>
                                    </div>
                                    <div className="time-label w-[250px] !opacity-100 bg-second py-1 font-bold rounded-r-[20px]">
                                        <p className="text-[22px]">26/12</p>
                                    </div>
                                </div>
                                <div className="h-[calc(100vh_-_95px)] lg:w-[90vw] w-full relative">
                                    <img
                                        className="image lg:w-auto max-h-full max-w-full h-auto w-full lg:h-[calc(100vh_-_95px)] absolute top-0 left-0 -z-[2]"
                                        src="/images/section8/map1812.png"
                                        alt=""
                                    />
                                    <img
                                        className="image lg:w-auto max-h-full max-w-full h-auto w-full lg:h-[calc(100vh_-_95px)] opacity-0 absolute top-0 left-0 -z-[1]"
                                        src="/images/section8/map2012.png"
                                        alt=""
                                    />
                                    <img
                                        className="image lg:w-auto max-h-full max-w-full h-auto w-full lg:h-[calc(100vh_-_95px)] opacity-0 absolute top-0 left-0 -z-[1]"
                                        src="/images/section8/map2612.png"
                                        alt=""
                                    />
                                </div>

                                <p className="text-center text-desc">
                                    Nguồn: Tư liệu Bảo tàng chiến thắng B-52,
                                    Hầm chỉ huy tác chiến T1
                                </p>
                            </div>

                            <div className="w-full scroll flex flex-col items-end h-max">
                                <div className="image-box mb-[389px]">
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] mt-[100%] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            19h44, Tiểu đoàn 78 khai hỏa, nhằm
                                            tốp bay vào từ hướng tây bắc. Radar,
                                            tên lửa khử nhiễu phát sóng bắt
                                            "pháo đài bay". 29 phút sau, Tiểu
                                            đoàn 59 bảo vệ mặt bắc bắt đúng dải
                                            nhiễu, phóng liên tiếp hai quả SAM-2
                                            trúng mục tiêu.
                                        </div>
                                    </div>
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Chiếc B-52 đầu tiên rơi xuống cánh
                                            đồng Chuôm (Đông Anh), cách trận địa
                                            tên lửa 10 km. Sự kiện giải tỏa tâm
                                            lý, củng cố niềm tin cho quân dân
                                            miền Bắc - "siêu pháo đài bay" cũng
                                            bị hạ như bất kỳ loại máy bay nào
                                            khác.
                                        </div>
                                    </div>
                                </div>
                                <div className="image-box mb-[389px]">
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            4h46, B-52 ném bom Hà Nội đợt thứ
                                            hai trong ngày. 6 bệ phóng tên lửa
                                            Tiểu đoàn 57 chỉ còn 3 quả đạn. Tiểu
                                            đoàn trưởng Nguyễn Văn Phiệt quyết
                                            định đánh mổ cò, dùng quả một, dù
                                            theo giáo trình phải 2-3 quả.
                                        </div>
                                    </div>
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            5h09, B-52 vào tầm ngắm. Ông Phiệt
                                            lệnh xạ kích. Quả đầu không rời bệ,
                                            quả thứ hai phóng đi. Kíp trắc thủ
                                            bám chặt tín hiệu B-52, điều khiển
                                            tên lửa bay trúng đích. Đạn nổ. Mất
                                            nhiễu. Mất mục tiêu. "Siêu pháo đài
                                            bay" bùng lên như đuốc. 10 phút sau,
                                            quả đạn cuối cùng hạ tiếp một B-52.
                                        </div>
                                        <div className="mb-6">
                                            Bộ đội tên lửa Hà Nội phóng tổng
                                            cộng 35 đạn, bắn rơi 7 B-52, bắt 12
                                            phi công. Đây cũng là đêm đầu tiên
                                            không quân xuất kích đánh máy bay
                                            chiến thuật, phá đội hình gây nhiễu
                                            để tên lửa tìm diệt B-52.
                                        </div>
                                    </div>
                                </div>
                                <div className="image-box mb-[389px]">
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Tận dụng một ngày Mỹ ngừng ném bom
                                            "nghỉ Giáng sinh", quân dân miền Bắc
                                            "vá" lại lưới lửa, chuẩn bị đợt
                                            phòng thủ mới. Tên lửa bảo vệ Hà Nội
                                            tăng từ 9 lên 13 tiểu đoàn. Mỗi trận
                                            địa tên lửa có một tiểu đoàn hoặc
                                            đại đội pháo cao xạ bảo vệ hỏa lực
                                            đánh B-52.
                                        </div>
                                    </div>
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] mb-[389px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Đêm xuống, nhiễu kim loại trên màn
                                            hình radar phủ trắng trời hàng chục
                                            cây số - báo hiệu một trận đánh lớn
                                            khi Mỹ huy động số lần B-52 lẫn máy
                                            bay chiến thuật đánh phá cao nhất
                                            toàn chiến dịch.
                                        </div>
                                        <div className="mb-6">
                                            22h30, trên hướng tây bắc, bệ phóng
                                            tên lửa dọc tả hữu ngạn sông Hồng
                                            khai hỏa. Chín phút sau, Tiểu đoàn
                                            78 bắn hạ chiếc đầu tiên. Hướng đông
                                            nam, tên lửa bắn hàng chục phát, hạ
                                            một B-52 rơi xuống hàng ăn trên phố
                                            Tương Mai.
                                        </div>
                                    </div>
                                    <div className="w-[380px] pb-6 pt-[19px] px-[30px] shadow-section2 rounded-[5px] bg-white text-left">
                                        <div className="mb-6">
                                            Phía đông bắc, Tiểu đoàn 93 diệt một
                                            chiếc và Tiểu đoàn 79 (Yên Nghĩa)
                                            bắn cháy một chiếc, lao xuống đất
                                            Sơn La. Pháo cao xạ yểm hộ, đánh dạt
                                            F-111 để tên lửa tìm diệt mục tiêu.
                                            Hơn một tiếng đối đầu, toàn miền Bắc
                                            hạ 8 B-52, riêng Hà Nội 4 chiếc, cao
                                            nhất toàn chiến dịch.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div id="block4">
                        <section className="mt-[30px] text-left max-w-[660px] m-auto">
                            <div className="text-[45px] leading-[3rem] mb-[35px] text-center uppercase scale">
                                NGHỆ THUẬT TÁC CHIẾN
                            </div>
                            <div className="translate">
                                <div className="mb-6">
                                    "Tôi thấy lạ với cách đánh của người Việt
                                    Nam. Có lẽ chúng tôi chưa hiểu hết, nên
                                    chúng tôi phải ngồi đây", tù binh phi công
                                    Mỹ trả lời Phạm Tuân trong cuộc tiếp xúc tại
                                    nhà tù Hỏa Lò, đầu năm 1973. Theo trung
                                    tướng Phạm Tuân, nếu so kè kỹ thuật với phi
                                    công Mỹ có thể còn nhiều vấn đề, nhưng điều
                                    vượt lên của bộ đội Việt Nam là cách đánh
                                    sáng tạo cùng bản lĩnh đánh thắng.
                                </div>
                                <div className="mb-6">
                                    Chiến dịch đáp trả cuộc tập kích đường không
                                    cuối năm 1972 là trận đấu trí, đọ sức của cả
                                    hai phía. Những máy bay ném bom đáng gờm
                                    nhất thế giới đã gặp phải mạng lưới phòng
                                    không miền Bắc được tổ chức nhiều tầng,
                                    nhiều lớp, tỏa khắp thành thị đến nông thôn,
                                    dùng từ vũ khí thô sơ đến hiện đại. Như lời
                                    một phi công Mỹ từng tham gia chiến dịch:
                                    "Tên lửa phóng lên nhiều đến nỗi bạn cảm
                                    giác có thể đi trên mũi những quả đạn đó.
                                    Pháo phòng không sáng đến mức có thể đọc báo
                                    trong buồng lái".
                                </div>
                                <div className="mb-6">
                                    Những sáng tạo trong cách đánh B-52, theo
                                    trung tướng Nguyễn Văn Phiệt, là nhiều năm
                                    tích lũy kinh nghiệm trong gian khổ và máu
                                    xương của bộ đội phòng không, với sự giúp
                                    sức của chuyên gia Liên Xô.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section id="horizontal1" className="overflow-hidden w-screen">
                    <div className="flex w-max wrap">
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section9/image1.jpeg"
                            alt=""
                        />
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section9/image2.jpeg"
                            alt=""
                        />
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section9/image3.jpeg"
                            alt=""
                        />
                    </div>
                </section>
                <div className="px-[15px]">
                    <div id="block5">
                        <section className="mt-[30px] text-left max-w-[660px] m-auto">
                            <div className="scale text-[45px] leading-[3rem] mb-[35px] text-center">
                                PHỐ KHÂM THIÊN - ĐÊM B-52
                            </div>
                            <div className="translate mb-6">
                                Thực hiện Linebacker II, ngoài khu quân sự ở Hà
                                Nội, Mỹ còn cho B-52 rải thảm xuống các bệnh
                                viện, khu dân cư. Phố Khâm Thiên ngày 26/12 chìm
                                trong biển lửa và sau một đêm trở nên hoang tàn
                                với hàng loạt hố bom.
                            </div>
                        </section>
                    </div>
                </div>

                <section id="horizontal2" className="w-screen overflow-hidden">
                    <div className="flex h-full wrap w-max">
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section10/image1.jpeg"
                            alt=""
                        />
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section10/image2.jpeg"
                            alt=""
                        />
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section10/image3.jpeg"
                            alt=""
                        />
                        <img
                            className="w-auto h-screen max-w-full"
                            src="/images/section10/image4.jpeg"
                            alt=""
                        />
                    </div>
                </section>
                <div className="px-[15px]">
                    <div id="block6">
                        <section className="mt-[30px] text-left max-w-[660px] m-auto">
                            <div className="text-[45px] leading-[3rem] mb-[35px] text-center uppercase scale">
                                THIỆT HẠI
                            </div>
                            <div className="translate">
                                <div className="mb-6">
                                    "Liền trong 12 ngày đêm, Mỹ tiến hành cuộc
                                    ném bom rải thảm mà sự tàn phá đã lớn hơn cả
                                    sự tàn phá trong cuộc ném bom suốt từ đầu
                                    chiến tranh Việt Nam tới giờ. Cuộc ném bom
                                    với mức độ tàn phá có tính hủy diệt", Weldon
                                    A.Brown, giáo sư sử học Mỹ, nhận định.
                                </div>
                                <div className="mb-6">
                                    Các tỉnh miền Bắc đã phải hứng chịu 36.000
                                    tấn bom B52, vượt tổng lượng bom ném xuống
                                    toàn miền thời kỳ 1969-1971. Riêng Hà Nội
                                    chịu 10.000 tấn. "Bình quân mỗi km2 Hà Nội
                                    hứng 33,33 tấn bom, trong khi Thế chiến II
                                    Đức 5,4 tấn và Nhật 0,43 tấn", thống kê của
                                    Bảo tàng chiến thắng B52. Hà Nội là đích đến
                                    của 66,5% lần máy bay B-52 cất cánh (441
                                    trên tổng số 663 lần).
                                </div>
                                <div className="mb-6">
                                    Chiến dịch phòng không bảo vệ Hà Nội - Hải
                                    Phòng năm 1972 được ví như "Điện Biên Phủ
                                    trên không". "Chiến dịch đầu tiên trên thế
                                    giới bắn rơi nhiều máy bay B-52, giáng cho
                                    không quân Mỹ đòn thất bại nặng nề nhất
                                    trong lịch sử, đánh bại âm mưu giành thế
                                    mạnh trên bàn đàm phán, góp phần buộc Mỹ ký
                                    Hiệp định Paris về chấm dứt chiến tranh, lập
                                    lại hòa bình ở Việt Nam", thượng tướng Lê
                                    Huy Vịnh, Thứ trưởng Quốc phòng, nhấn mạnh
                                    tại hội thảo khoa học ngày 9/12/2022.
                                </div>
                                <div className="mb-6">
                                    Với trung tướng Nguyễn Văn Phiệt, 84 tuổi,
                                    12 ngày đêm cuối năm 1972 "là cuộc chiến đấu
                                    không cân sức, khốc liệt nhất trong đời quân
                                    ngũ".
                                </div>
                            </div>
                        </section>

                        <section className="mt-20 mb-[15px] w-[945px] max-w-full mx-auto scale">
                            <div className="w-full border-[1px] border-second rounded-lg relative pt-[45px]">
                                <img
                                    className="h-[91px] w-auto max-w-full m-auto absolute -top-[55px] left-40"
                                    src="/images/USflag.svg"
                                    alt=""
                                />
                                <div className="w-full justify-end py-2 hidden md:flex">
                                    <img
                                        className="w-[100px] h-auto max-h-full mr-40"
                                        src="/images/section11/icon.png"
                                        alt=""
                                    />
                                </div>
                                <div className="flex justify-center flex-wrap mb-5">
                                    {boxResUS && (
                                        <>
                                            {boxResUS.map(
                                                (
                                                    item: any,
                                                    index: React.Key
                                                ) => (
                                                    <div
                                                        className="px-[25px] flex flex-col justify-center"
                                                        key={index}
                                                    >
                                                        <img
                                                            className="h-full w-auto max-w-full max-h-[79px]"
                                                            src={item.image}
                                                            alt=""
                                                        />
                                                        <p className="mt-[15px] text-[45px] font-bold h-min leading-[0.9]">
                                                            {item.label}
                                                        </p>
                                                        <p className="mt-[10px]">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="scale w-[945px] max-w-full m-auto">
                            <div className="mt-[50px] mb-[15px] w-full border-[1px] border-second rounded-lg relative">
                                <img
                                    className="h-[91px] w-auto max-w-full m-auto absolute -top-10 right-[120px]"
                                    src="/images/VNflag.svg"
                                    alt=""
                                />

                                <div className="flex justify-center items-center flex-wrap pt-[75px] pb-5 px-[25px] gap-[25px]">
                                    {boxResVN && (
                                        <>
                                            {boxResVN.map(
                                                (
                                                    item: any,
                                                    index: React.Key
                                                ) => (
                                                    <div
                                                        className="flex flex-col justify-center"
                                                        key={index}
                                                    >
                                                        <img
                                                            className="h-full w-auto max-w-full max-h-[79px]"
                                                            src={item.image}
                                                            alt=""
                                                        />
                                                        <p className="mt-[15px] text-[45px] font-bold h-min leading-[0.9]">
                                                            {item.label}
                                                        </p>
                                                        <p className="mt-[10px] w-max">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                            <p className="mb-[50px]">
                                Nguồn: Bảo tàng chiến thắng B52, Ban Tuyên giáo
                                Trung ương, Sách Đối mặt với B52, Chi cục Văn
                                thư - Lưu trữ Hà Nội
                            </p>
                        </section>

                        <section className="mt-5 w-[945px] max-w-full lg:px-0 text-left translate m-auto">
                            <div className="lg:flex items-center py-5 border-t-[1px] border-second w-full">
                                <img
                                    src="/images/section13/avt1.png"
                                    alt=""
                                    className="h-[200px] w-auto max-w-full rounded-[50%] m-auto"
                                />
                                <div className="lg:pl-5 pt-5">
                                    <div className="mb-[10px]">
                                        "Mỹ đã thua trong ván bài cuối cùng,
                                        đúng như lời tiên đoán của Bác Hồ 'Phải
                                        dự kiến trước mọi tình huống càng sớm
                                        càng tốt. Nhớ là trước khi thua ở Triều
                                        Tiên, đế quốc Mỹ đã hủy diệt Bình
                                        Nhưỡng. Ở Việt Nam, Mỹ sẽ nhất định
                                        thua. Nhưng nó chỉ chịu thua sau khi
                                        thua trên bầu trời Hà Nội".
                                    </div>

                                    <div className="mb-[10px] text-xl">
                                        Đại tướng Võ Nguyên Giáp
                                    </div>
                                    <div className="mb-[10px] text-desc">
                                        Hồi ức Tổng hành dinh trong mùa xuân
                                        toàn thắng
                                    </div>
                                </div>
                            </div>
                            <div className="last-box lg:flex grid items-center py-5 border-t-[1px] border-second w-full">
                                <div className="content lg:pr-5 pt-5">
                                    <div className="mb-[10px]">
                                        "Chiến dịch Linebacker II là một trong
                                        những cuộc bắn phá dữ dội nhất trong
                                        lịch sử. Một chiến dịch gây sốc và kinh
                                        hãi với sức mạnh không quân áp đảo nhằm
                                        khuất phục một đối thủ đầy quyết tâm
                                        bằng lượng bom khổng lồ. Không quân Mỹ
                                        đã phải chịu những tổn thất mà đến tận
                                        ngày nay dường như không thể đong đếm
                                        hết được".
                                    </div>

                                    <div className="mb-[10px] text-xl">
                                        Brad Lendon
                                    </div>
                                    <div className="mb-[10px] text-desc">
                                        Nhà báo Mỹ
                                    </div>
                                </div>
                                <img
                                    src="/images/section13/avt2.png"
                                    alt=""
                                    className="image h-[200px] w-auto max-w-full m-auto rounded-[50%]"
                                />
                            </div>
                            <div className="lg:flex items-center py-5 border-t-[1px] border-second w-full">
                                <img
                                    src="/images/section13/avt3.png"
                                    alt=""
                                    className="h-[200px] w-auto max-w-full rounded-[50%] m-auto"
                                />
                                <div className="lg:pl-5 pt-5">
                                    <div className="mb-[10px]">
                                        "Đối với người Việt Nam, Linebacker II
                                        chỉ đơn giản là một trong những chiến
                                        thắng trong chuỗi những trận đánh của 30
                                        năm giành độc lập. Bằng chứng cho thắng
                                        lợi của Việt Nam trong Linebacker II
                                        chính là đất nước Việt Nam thống nhất và
                                        độc lập hoàn toàn".
                                    </div>

                                    <div className="mb-[10px] text-xl">
                                        Marshall Michel
                                    </div>
                                    <div className="mb-[10px] text-desc">
                                        Phi công từng tham chiến ở Việt Nam
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-end flex-col">
                                <div className="text-right">
                                    Đồ họa: <strong>Tiến Thành</strong>
                                </div>
                                <div className="text-right">
                                    Nội dung:{" "}
                                    <strong>
                                        Hoàng Phương - Vũ Anh - Sơn Hà - Nguyễn
                                        Tiến
                                    </strong>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
