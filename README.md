# PINTEREST 클론코딩

![ezgif com-gif-maker](https://user-images.githubusercontent.com/85213997/138467799-61c667d8-67b9-408f-89a3-325dbac5011a.gif)

<hr />

## 📋 목차

### 1. [프로젝트 설명](#-프로젝트-설명)<br/>

### 2. [개발 기간](#-개발-기간)<br/>

### 3. [팀원소개](#-팀원소개)<br/>

### 4. [사용기술](#-tools)<br/>

### 5. [기능소개](#-기능소개)<br/>

### 6. [배운 점](#배운-점-or-느낀-점)<br/>

### 7. [API설계](#-API설계)<br/>

<hr />

## 🎬 프로젝트 설명

<img width="1262" alt="스크린샷 2021-10-22 오후 4 16 00" src="https://user-images.githubusercontent.com/85213997/138410284-05feec46-2388-40c2-b070-9cf8235102f7.png">

<hr />

## 📅 개발 기간

-   `2021년 10월 18일(월) ~ 2021년 10월 22일(금) / 총 5일`
-   `설계 1일 / 개발 4일`

<hr />

### 📹 시연영상 [Youtube](https://www.youtube.com/watch?v=19ARAJSV664)

다양한 기능이 있는 Pinterest를 클론코딩했습니다.

<hr />

## 🧑🏽‍🤝‍🧑🏽 팀원소개

### FRONT END

-   이수창(https://github.com/eternalclash)
-   윤상준(https://github.com/highjoon)
-   이성민(https://github.com/sungminleeme)

### BACK END

-   황창환(https://github.com/changchanghwang)
-   정창우(https://github.com/changpro1)

<hr />

## 🛠 Tools

-   React
-   상태관리 (Redux)
-   스타일 (styled-components)
-   라우터 (connected-react-router)
-   통신 (Axios)
-   배포 (AWS S3)

<hr />

## 💻 기능소개

-   로그인/회원가입/로그인 유지 (JWT 인증 방식).
-   사진 등록, 댓글, 좋아요 기능.
-   내가 작성한 게시물 확인.
-   게시물 검색.

<hr />

## 💭 배운 점 or 느낀 점

-   이수창 :힘들었던 과제였던 만큼 하는 동안에는 너무나도 어려웠지만 정말 많은 걸 느끼고 보람찬 프로젝트 였던 것 같다. 정말 운이 좋게도 좋은 사람들이랑 합을 맞춰서 많은 걸 느끼고 배운 것 같다는 생각이 들었다. 특히 백엔드와 통신을 할 때 서로의 지식을 많이 알면 알수록 통신을 할 때 에러가 났을 때 구체적인 판단을 할 수 있겠구나라는 생각을 많이 했고 이번 프로젝트는 뷰가 정말 어려웠던 만큼 나의 약점이 었던 뷰 디자인에 대해 강력한 보완을 한 것 같아서 좋았다.

-   윤상준: 처음으로 신나게 코딩을 했었다. 핏이 맞는 다는 것을 처음으로 느꼈다. 다만 너무 신이 난 나머지 진도를 빼기에 급급하여 디테일을 놓친 것이 아쉬웠다. 다 완성한 줄 알고 최종 검토를 했는데 놓친 부분이 너무 많아서 이를 수정하는데 시간을 많이 썼다. 팀 또는 회사를 고를 때 같이 일하게 될 사람이 얼마나 중요한지를 알 수 있게된 좋은 계기였다.

-   이성민: 스코프가 높아서 걱정이 많이 되었지만 막히는 부분이 있을 때마다 팀원들의 도움으로 무난하게 해결이 가능했다. 팀전원이 마이크를 계속 켜고 계속 소통을 하니까 작업의 능률도 올라가고 분위기도 좋았던 팀이였다.제대로 협업다운 협업을 경험을 하게 되어서 기뻤다. 뷰를 처음부터 짠 적이 처음인데 전체적인 큰 틀을 배울 수 있었고, 부족했던 CSS지식을 보충 할 수 있었던 시간이였다.

<hr />

## 🏘️ API설계

### [전체 API설계](https://www.notion.so/hanghae99clone9/9-de04875486c24c6383d239aaab35ba70)

![스크린샷 2021-10-22 오후 3 59 41](https://user-images.githubusercontent.com/85213997/138408067-5c0a7209-385f-4dda-a5aa-1ceaed5964fa.png)

<hr />

## 🖥️ 깃 규칙

내가 작업중인데 다른사람이 PR(pull request) 한 상황

1. 일단 내거 add후commit
2. git checkout mater
3. git pull origin master
4. git checkout (본인브랜치 ex:sungmin)
5. git merge master (이상황에서 충돌 날수도 있음. 완료하면 메시지쓰고 esc키, :wq 입력 후 엔터)
6. 이제 로컬의 내 브랜치는 최신의 master을 가져온것을 작업하는 것입니다.

참고로 위 5번에서 merge해도 되고 rebase해도 된다. 둘다 충돌이 생길 경우 해결해야 하는 건 똑같다

본인이 작업 한 것을 올 릴경우

1. add > commit > git push origin 본인브랜치
2. 깃헙에 가서 PR를 한후 Merge버튼을 누른다(머지를 해야 본인 브랜치에 올린 파일이랑 master이랑 합쳐짐)
3. merge한후에 터미널로가서 git checkout main
4. git pull( 깃헙에있는 master이랑 로컬에있는 master내용이 차이나기때문)
5. git checkout 본인브랜치로 가서 다시 작업을 시작

git 오류

-   Pull is not possible because you have unmerged files 라고 뜨면 git commit -am '커밋메시지' 최근 커밋된 메세지를 삭제하면 됨
-   ! [rejected] main -> main (fetch first)
    error: failed to push some refs to '[https://github.com/sungminleeme/Sparta.git](https://github.com/sungminleeme/Sparta.git)'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.
-   해당 에러는 원격저장소와 현재 작업중인 로컬저장소가 동기화되지 않았을 때 발생한다. 동기화되지 않은 상태에서 다시 push하면 데이터가 소실될 수 있어 하고 경고해주는 것.

-   해결방안
-   동기화를 위해 pull >> git pull origin main
-   강제로 push >> git push origin +main(덕분에 2시간 Readme 정리한것 다 날아 감ㅜㅜ)

강제로 푸쉬하면 그전에 변경사항은 다 삭제하니까 진짜로 주의해야됨!

<hr />

### 🔨 커밋 컨벤션

-   프론트앤드

    Add: 추가

    Update:수정

    Fix:완료

-   백엔드
    feat:새로운기능추가
    fix:버그 수정
    docs:문서 수정
    style:코드 포맷팅, 세미콜론 누락, 코드변경이 없는 경우
    refactor:코드 리팩토링test:테스트 코드, 리팩토링 테스트 코드 추가
    chore:빌드 업무 수정, 패키지 매니저 수정
    > 제목은 50자 미만, 문장의 끝에 마침표 넣지 않음 과거 시제 사용하지 않고 명령어로 작성제목 외에 추가적으로 정보를 전달하고 싶을 경우 본문에 추가 정보 기입예시 : [feat] comment CRUD 기능 추가

<hr />

### 애매했던 부분

-   각 페이지의 최상위 컴포넌트에서 useSelector로 전체 데이터를 받아온 후 하위 컴포넌트로 전달해주는 방식으로 데이터를 관리했는데, 맞는 방식인지 알아볼 필요가 있음.

-   현재 로그인 유지 방식은 로컬 쿠키에 있는 토큰을 백엔드로 전송하고,
    백엔드에서 해당 토큰이 인증이 안되어있으면 400 에러, 되어있으면 200에러를 받고 프론트에서는 각각 isLogin = false, isLogin = true로 내려줌.
    이후 App.js에서 isLogin의 true/false 여부를 체크하여 로그인을 유지하는 방식. 맞는건지?

-   로그인이 되었을 때와 안되었을 때 렌더링되어야 하는 컴포넌트가 다르기때문에, 삼항연산자를 통해 isLogin이 true면 거기에 맞는 컴포넌트를, false면 거기에 맞는 컴포넌트를 렌더링함. 맞는 방식인지?
