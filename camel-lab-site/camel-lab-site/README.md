# CAMEL Lab 홈페이지 (정적 HTML 버전)

Oopy(노션) 사이트의 내용을 그대로 옮긴 순수 HTML/CSS/JS 사이트입니다.
서버·데이터베이스가 없으므로 **GitHub Pages에 올리면 무료로 운영**할 수 있습니다.

## 폴더 구조

```
index.html          홈 (소개, 사진 슬라이드, 영상, 뉴스)
people.html         구성원
projects.html       프로젝트
publications.html   논문
gallery.html        갤러리
contact.html        연락처
assets/style.css    디자인 (전 페이지 공통)
assets/site.js      메뉴·슬라이드·목록 렌더링 (수정할 일 거의 없음)
data/               ★ 내용은 전부 여기서 수정합니다
  news.js           뉴스
  people.js         교수·학생·졸업생
  projects.js       프로젝트
  publications.js   논문
  gallery.js        갤러리 사진
```

## 내용 수정하는 법

`data/` 폴더의 파일을 메모장이나 VS Code로 열어 항목을 추가·삭제하면 됩니다.
예) 논문 추가 — `data/publications.js`의 해당 분류 맨 위에 한 줄 복사해서 붙이기:

```js
{ type: "IJ", id: "IJ_20", year: 2026, title: "논문 제목", venue: "저널명", authors: "저자1, 저자2, Inho Lee*" },
```

- 사진은 지금처럼 GitHub 저장소 `PNUxCAMEL/camel-lab-images`에 올리고 그 URL을 넣으세요.
- 홈 화면 슬라이드 사진과 유튜브 영상은 `index.html` 안에서 직접 바꿉니다.
- 연락처는 `contact.html` 안에서 직접 바꿉니다.

## ⚠️ Oopy 해지 전에 꼭 할 일

`data/gallery.js`의 사진 중 `oopy.lazyrockets.com` 주소로 시작하는 것들은
노션에 저장된 사진이라 **Oopy를 해지하면 안 보일 수 있습니다.**
노션에서 사진을 내려받아 `camel-lab-images` 저장소에 올린 뒤 URL을 바꿔 주세요.

## GitHub Pages로 무료 배포하기

1. GitHub에서 새 저장소 만들기 (예: `PNUxCAMEL/camel-lab-website`)
2. 이 폴더의 파일 전부를 저장소에 업로드 (웹에서 드래그 앤 드롭 가능)
3. 저장소 **Settings → Pages → Branch: main / (root) → Save**
4. 1~2분 후 `https://pnuxcamel.github.io/camel-lab-website/` 주소로 접속됩니다.

이후에는 `data/` 파일을 수정해서 다시 업로드(커밋)하면 바로 반영됩니다.

### 고유 도메인을 쓰고 싶다면 (선택)
Settings → Pages → Custom domain에 도메인 입력 후, 도메인 업체에서 CNAME을 `pnuxcamel.github.io`로 설정.
도메인 비용(연 1~3만 원) 외에는 무료입니다.

## 로컬에서 미리 보기
폴더에서 `python -m http.server` 실행 후 브라우저에서 `http://localhost:8000` 접속.
