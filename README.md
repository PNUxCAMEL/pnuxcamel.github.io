# CAMEL Lab 홈페이지 관리 매뉴얼

🌐 **홈페이지: https://pnuxcamel.github.io**

| 저장소 | 역할 |
|---|---|
| `PNUxCAMEL/pnuxcamel.github.io` (이 저장소) | 홈페이지 코드. 여기 파일을 고치면 1~2분 뒤 홈페이지에 반영됩니다 |
| `PNUxCAMEL/camel-lab-images` | 사진 저장소. 멤버 사진(`members/`), 프로젝트 그림(`projects/`), 갤러리 앨범(`gallery/`) |

서버·데이터베이스 없이 GitHub Pages로 무료 운영됩니다. 별도 배포 작업은 필요 없고, **파일을 고쳐서 Commit 하는 것 자체가 배포**입니다.

---

## 1. 수정하는 방법 (공통)

### 방법 A — GitHub 웹에서 바로 수정 (글자 몇 줄 고칠 때)
1. 이 저장소에서 고칠 파일 클릭 (예: `data/news.js`)
2. 오른쪽 위 **연필 아이콘(Edit)** 클릭
3. 내용 수정
4. 오른쪽 위 초록색 **Commit changes...** → 팝업에서 다시 **Commit changes**

### 방법 B — GitHub Desktop (사진처럼 파일이 많을 때)
1. GitHub Desktop에서 저장소 열기 → Repository → **Show in Explorer**
2. 열린 폴더에 파일을 넣거나 수정
3. GitHub Desktop으로 돌아와 Summary 입력 → **Commit to main** → **Push origin**

> 웹 업로드는 한 번에 파일 100개 / 파일당 25MB / 총 50MB 정도가 한계입니다. 그 이상은 GitHub Desktop을 쓰세요.

### 수정 후 확인
1~2분 뒤 홈페이지를 **Ctrl+F5**(강력 새로고침)로 열어 확인. 반영이 안 보이면 대부분 브라우저 캐시입니다.

---

## 2. 자주 하는 수정

내용은 전부 `data/` 폴더의 파일 5개에 있습니다. 파일마다 맨 위에 한글 주석으로 형식이 적혀 있으니, **기존 줄 하나를 복사해서 내용만 바꾸는 방식**으로 하면 실수가 없습니다.

### 뉴스 추가 → `data/news.js`
맨 위에 한 줄 추가. `kind`는 `Award` / `Paper` / `Project` / `Patent` / `Lab` 중 하나.
```js
{ date: "2026.09", kind: "Paper", text: "Our paper is accepted in IEEE RA-L." },
```
홈에는 최근 8개만 보이고 "Show all news"로 전체가 펼쳐집니다.

### 논문 추가 → `data/publications.js`
해당 분류(IC/IJ/DJ) 맨 위에 한 줄 추가. `year` 기준으로 자동 정렬됩니다.
```js
{ type: "IJ", id: "IJ_20", year: 2026, title: "논문 제목", venue: "저널명", authors: "저자1, 저자2, Inho Lee*" },
```

### 멤버 추가 / 정보 수정 → `data/people.js`
```js
{ name: "Gildong Hong", degree: "M.S. course", topics: ["Locomotion", "Reinforcement Learning"], email: "hong@pusan.ac.kr", photo: IMG + "GildongHong.jpg" + RAW },
```
- `degree`는 `Ph.D. course` / `M.S. course` / `B.S. course`. 이 값으로 대학원생/학부생 칸이 자동으로 나뉩니다.
- 태그(`topics`)는 `[ ]` 안에 `"글자"`를 쉼표로 구분해서 넣습니다. 따옴표와 쉼표만 지키면 됩니다.
- **사진 넣는 법**: `camel-lab-images` 저장소 → `members` 폴더 안에서 Upload files → 파일명은 영어로 (예: `GildongHong.jpg`) → 위 줄의 `photo`에 그 파일명을 적습니다. 사진이 아직 없으면 `photo: PLACEHOLDER` 로 두면 로봇 그림이 나옵니다.

### 졸업 처리 → `data/people.js`
`STUDENTS`에서 그 사람 줄을 지우고, `ALUMNI` 맨 위에 추가:
```js
{ name: "Gildong Hong", degree: "M.S.", year: "2027", employment: "회사명", photo: IMG + "GildongHong.jpg" + RAW },
```
`employment`는 비워도(`""`) 되고, `photo`를 빼면 로봇 그림이 나옵니다.

### 교수님 경력·수상 → `data/people.js` 맨 위 `PROFESSOR`
`career` / `honors` / `grants` 목록에 `["기간", "내용"]` 형식으로 추가.

### 프로젝트 추가 / 종료 → `data/projects.js`
새 프로젝트는 기존 항목 한 덩어리(`{ ... },`)를 복사해서 채우기. 끝난 프로젝트는 `status: "ongoing"` 을 `"past"` 로 바꾸면 Past Projects로 내려갑니다.
프로젝트 그림은 `camel-lab-images/projects/` 에 올리고 파일명을 `image`에 적습니다.

### 갤러리 → `data/gallery.js`
사진 파일은 `camel-lab-images/gallery/<앨범폴더>/` 안에 있습니다.
- **사진 추가**: 해당 앨범 폴더에 사진 업로드 → `gallery.js`에서 그 앨범의 `images` 목록에 파일명 추가 (파일명에 공백·한글이 있어도 그대로 적으면 됩니다)
- **앨범 추가**: `gallery/` 아래 새 폴더 생성(영어 이름) → 사진 업로드 → `gallery.js`에 앨범 한 덩어리 복사해서 `folder`, `title`, `cover`, `images` 채우기
- **카드 대표 사진**: `cover`에 적힌 파일명
- 사진은 올리기 전에 긴 쪽 1920px 정도로 줄이면 좋습니다 (PowerToys Image Resizer). 화면에는 자동으로 축소본이 표시되므로 큰 파일도 동작은 하지만 저장소가 무거워집니다.

### 홈 화면 → `index.html`
- 슬라이드 사진: `<div class="slide">` 줄의 `src` 주소 교체 / 줄 복사해서 추가
- 유튜브 영상: `<iframe src="https://www.youtube.com/embed/영상ID?rel=0">` 의 영상ID 교체 (유튜브 주소 `watch?v=` 뒤의 11글자)
- 소개 문구: `hero-desc` 부분

### 연락처 → `contact.html`
이메일, 전화, 주소, 지원 폼 링크가 그대로 적혀 있습니다.

### 상단 메뉴 / 로고
- 메뉴 구조: `assets/site.js` 맨 위 `MENU` 목록
- 로고: `assets/logo.png` 파일을 교체 (같은 이름으로 업로드하면 덮어써집니다)

---

## 3. 사진 규칙

- 위치: 멤버 → `camel-lab-images/members/`, 프로젝트 → `projects/`, 갤러리 → `gallery/앨범폴더/`
- 파일명은 **영어·숫자만** (멤버·프로젝트 사진). 갤러리 사진은 이름이 아무래도 상관없지만 영어가 안전합니다.
- 멤버 사진은 세로 3:4 비율(증명사진)이 카드에 딱 맞습니다.
- 크기는 긴 쪽 1920px 이하, 파일 1~2MB 이하 권장. 폰 사진은 그냥 올려도 되고, 카메라 원본(5MB↑)은 줄여서 올리세요.

---

## 4. 문제가 생겼을 때

- **페이지 일부가 텅 비어 보임** → 그 페이지의 `data/*.js`에 쉼표·따옴표·괄호가 빠진 것입니다. 마지막에 고친 줄을 다시 확인하세요. 한 줄의 끝은 항상 `},` 로 끝나야 합니다.
- **되돌리기** → 저장소 상단 **Commits**(시계 아이콘) → 문제 생기기 전 커밋 클릭 → 파일 내용을 복사해서 다시 붙여넣기. GitHub는 모든 이전 버전을 보관합니다.
- **사진이 안 뜸** → (1) 파일명 대소문자·확장자가 정확히 같은지 (`.jpg` vs `.JPG`) (2) 사진 저장소의 맞는 폴더에 올렸는지 확인.
- **수정했는데 안 바뀜** → Ctrl+F5. 그래도 안 되면 저장소 Actions 탭에서 배포가 끝났는지(초록 체크) 확인.

---

## 5. 폴더 구조

```
index.html          홈 (소개, 로봇 그림, 사진 슬라이드, 영상, 뉴스)
people.html         구성원
research.html       연구 분야
projects.html       프로젝트
publications.html   논문
gallery.html        갤러리 (앨범 → 사진)
contact.html        연락처
assets/logo.png     상단 로고
assets/style.css    디자인 (전 페이지 공통)
assets/site.js      메뉴·슬라이드·목록 렌더링 (MENU는 이 파일 맨 위)
data/               ★ 내용은 전부 여기서 수정
  news.js           뉴스
  people.js         교수·학생·졸업생
  projects.js       프로젝트
  publications.js   논문
  gallery.js        갤러리 앨범·사진
```

로컬에서 미리 보려면 폴더에서 `python -m http.server` 실행 후 `http://localhost:8000` 접속.
