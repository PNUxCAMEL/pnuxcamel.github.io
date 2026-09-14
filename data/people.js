// ============================================================
//  PEOPLE  —  사진은 GitHub 이미지 저장소(camel-lab-images)에 올리고 URL을 넣으세요.
// ============================================================
const IMG = "https://github.com/PNUxCAMEL/camel-lab-images/blob/main/members/";
const RAW = "?raw=true";
const PLACEHOLDER = "https://github.com/PNUxCAMEL/camel-lab-images/blob/main/robots/canine1.png?raw=true";

window.PROFESSOR = {
  name: "Inho Lee",
  role: "Associate Professor, Ph.D.",
  photo: IMG + "InhoLee.jpg" + RAW,
  email: "inholee8@pusan.ac.kr",
  address: "Busandaehak-ro 63beon-gil 2, Geumjeong-gu, Busan, Korea, 46241",
  career: [
    ["2024.09 –",        "Associate Professor, Pusan National University"],
    ["2020.09 – 2024.09", "Assistant Professor, Pusan National University"],
    ["2017.01 – 2020.07", "Research Associate, Institute for Human & Machine Cognition (IHMC)"],
    ["2016.09 – 2016.11", "Post Doctoral Researcher, KAIST"],
    ["2011.03 – 2016.08", "Ph.D., KAIST (Hubo Lab.)"],
    ["2009.03 – 2011.02", "M.S., KAIST (Hubo Lab.)"],
    ["2005.03 – 2009.02", "B.S., KAIST"],
  ],
  honors: [
    ["2024", "젊은공학자상, KSPE (한국정밀공학회)"],
    ["2024", "우수신진연구자상, ICROS (제어로봇시스템학회)"],
    ["2022", "우수신진연구자상, KROS (한국로봇학회)"],
    ["2015", "Winning @ DARPA Robotics Challenge Finals"],
  ],
  grants: [
    ["2023 – 2027", "로봇 안내견 개발, 과학기술정보통신부"],
    ["2021 – 2024", "폴리스랩 2.0, 과학기술정보통신부"],
    ["2021 – 2024", "개인기초연구-우수신진연구, 한국연구재단(NRF)"],
    ["2021",        "개인기초연구-최초혁신실험실, 한국연구재단(NRF)"],
  ],
};

// degree: "Ph.D. course" | "M.S. course" | "B.S. course"
window.STUDENTS = [
  { name: "Jaehoon Ahn",   degree: "Ph.D. course", topics: ["All About Robotics"],                                   email: "dkswogns46@gmail.com",    photo: IMG + "JaehoonAhn.png" + RAW },
  { name: "Jiyoon Kim",    degree: "Ph.D. course", topics: ["Human Robot Interaction", "Reinforcement Learning"],     email: "wldbs2385@pusan.ac.kr",   photo: IMG + "JiyoonKim.png" + RAW },
  { name: "Yonghun Yang",  degree: "Ph.D. course", topics: ["Mechanical Design", "Tendon-driven Mechanism"],          email: "yyh0227@pusan.ac.kr",     photo: IMG + "YonghunYang.png" + RAW },
  { name: "Dongyoung Lee", degree: "Ph.D. course", topics: ["Mechanical Design", "Soft Robotics", "Composite Material"], email: "ask1814@pusan.ac.kr",  photo: IMG + "DongyoungLee.png" + RAW },
  { name: "Hwayoung Song", degree: "Ph.D. course", topics: ["Optimal Control", "Reinforcement Learning"],             email: "dasdas12002@pusan.ac.kr", photo: IMG + "HwayoungSong.jpg" + RAW },
  { name: "Jihee Park",    degree: "M.S. course",  topics: ["Path Planning", "Obstacle Avoidance", "Mapping"],        email: "qkrwlgml5363@pusan.ac.kr",photo: IMG + "JiheePark.jpeg" + RAW },
  { name: "Chansik Hwang", degree: "M.S. course",  topics: ["Imitation Learning", "Bimanual Manipulation"],           email: "hcs6349@naver.com",       photo: IMG + "ChansikHwang.png" + RAW },
  { name: "Gaseong Park",  degree: "M.S. course",  topics: ["Perceptive Locomotion", "Reinforcement Learning"],       email: "seolmary@pusan.ac.kr",    photo: IMG + "GaseongPark.png" + RAW },
  { name: "Huicheon Jang", degree: "M.S. course",  topics: ["Mechanical Design", "Reinforcement Learning"],           email: "jhc0675@naver.com",       photo: IMG + "HeichunJang.png" + RAW },
  { name: "Taegun Hwang",  degree: "M.S. course",  topics: ["Robot Learning and Control", "Robot Design and Mechatronics"], email: "htq1719@naver.com", photo: IMG + "TaegunHwang.png" + RAW },
  { name: "Minseong Kim",  degree: "M.S. course",  topics: ["Locomotion Control", "State Estimation"],                email: "matize1115@pusan.ac.kr",  photo: IMG + "MinseongKim.JPG" + RAW },
  { name: "Chanwoo Jeong", degree: "M.S. course",  topics: ["Imitation Learning", "Manipulation"],                    email: "cksdn57@pusan.ac.kr",     photo: IMG + "ChanwooJeong.png" + RAW },
  { name: "Yoonji Jang",   degree: "M.S. course",  topics: ["Learning-based Locomotion", "Control and System Identification"], email: "gefeum@pusan.ac.kr", photo: IMG + "YoonjiJang.jpg" + RAW },
  { name: "Yunho Lee",     degree: "M.S. course",  topics: ["Mechanical Design", "Reinforcement Learning"],           email: "dldbsgh8408@naver.com",   photo: IMG + "YunhoLee.jpg" + RAW },
  { name: "Junju Park",    degree: "M.S. course",  topics: ["Dexterous Manipulation", "Reinforcement Learning"],      email: "bjj5218@pusan.ac.kr",     photo: IMG + "JunjuPark.jpg" + RAW },
  { name: "Jintae Kim",    degree: "M.S. course",  topics: ["Mechanical Design", "Humanoid"],                    email: "jintae2001@naver.com",    photo: IMG + "JintaeKim.png" + RAW },
  { name: "Seongjun Heo",  degree: "M.S. course",  topics: ["Imitation Learning", "Manipulation"],                    email: "timetravel1016@gmail.com",photo: IMG + "SeongjunHeo.jpg" + RAW },
  { name: "Sangwon Yi",    degree: "B.S. course",  topics: ["Reinforcement Learning", "Locomotion"],                  email: "yangbanpro@gmail.com",    photo: IMG + "SangwonYi.jpg" + RAW },
  { name: "Minjeong Kang", degree: "B.S. course",  topics: ["Robot Control", "Reinforcement Learning"],               email: "kmjiss34@gmail.com",      photo: PLACEHOLDER },
  { name: "Seungmin Lim",  degree: "B.S. course",  topics: ["Imitation Learning"],                                    email: "tmdals3086@naver.com",    photo: IMG + "SeungminLim.jpg" + RAW },
  { name: "Hyeongjun Cho", degree: "B.S. course",  topics: ["Imitation Learning", "Manipulation", "Locomotion"],      email: "whgudwns0921@naver.com",  photo: IMG + "HyeongjunCho.jpg" + RAW },
  { name: "Junje Hur",     degree: "B.S. course",  topics: ["Imitation Learning", "Manipulation"],                    email: "willy1517@naver.com",     photo: IMG + "JunjeHur.jpg" + RAW },
];

// 졸업생: photo가 없으면 기본 이미지(PLACEHOLDER)가 쓰입니다. employment는 비워도 됩니다.
window.ALUMNI = [
  { name: "Euichan Heo",     degree: "M.S.",  year: "2026", employment: "Researcher, CAMEL Lab",                           photo: IMG + "EuichanHeo.png" + RAW },
  { name: "Dongju Kim",      degree: "M.S.",  year: "2026", employment: "Institute for Human & Machine Cognition (IHMC)",  photo: IMG + "DongjuKim.jpg" + RAW },
  { name: "Yeongsu Choi",    degree: "M.S.",  year: "2026", employment: "Openpath Robotics",                               photo: IMG + "YeongsooChoi.png" + RAW },
  { name: "Sangbum Son",     degree: "B.S.",  year: "2026", employment: "",                                                photo: IMG + "SangbeomSon.png" + RAW },
  { name: "Jihoon Park",     degree: "Ph.D. Candidate", year: "", employment: "",                                          photo: IMG + "JihoonPark.jpg" + RAW },
  { name: "Hosun Kang",      degree: "Ph.D.", year: "2025", employment: "Openpath Robotics" },
  { name: "Jiwook Choi",     degree: "Ph.D.", year: "2025", employment: "삼성중공업" },
  { name: "Jaehyeong Park",  degree: "M.S.",  year: "2025", employment: "LIG Nex1" },
  { name: "Hokyun Ryu",      degree: "B.S.",  year: "2025", employment: "한화에어로스페이스" },
  { name: "Dongyun Kim",     degree: "B.S.",  year: "2025", employment: "한화에어로스페이스" },
  { name: "Jeongmin Lee",    degree: "B.S.",  year: "2025", employment: "애니아이" },
  { name: "Hyunjae Cha",     degree: "M.S.",  year: "2024", employment: "Openpath Robotics" },
  { name: "Wookjin Ahn",     degree: "M.S.",  year: "2024", employment: "HD 현대로보틱스" },
  { name: "Yeongwoo Kwon",   degree: "M.S.",  year: "2024", employment: "Openpath Robotics" },
  { name: "Yoonjeong Kim",   degree: "B.S.",  year: "2023", employment: "Wonik Robotics" },
  { name: "Sangjun Choi",    degree: "B.S.",  year: "2023", employment: "Hanwha Solutions" },
  { name: "Sunghyeon Hwang", degree: "M.S.",  year: "2022", employment: "Institute for Advanced Engineering" },
  { name: "Seunghyeon Lee",  degree: "M.S.",  year: "2022", employment: "LG 생산기술원" },
  { name: "Jaejun Song",     degree: "B.S.",  year: "2022", employment: "Hyundai Mobis" },
  { name: "Changkyu Song",   degree: "B.S.",  year: "2022", employment: "Samsung Electronics" },
  { name: "Seongho Jin",     degree: "M.S.",  year: "2022", employment: "Korea Institute of Robot and Convergence" },
];
