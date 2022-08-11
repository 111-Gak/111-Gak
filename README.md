# 111 TIL GAK

https://111-gak.vercel.app/

**게시판에 초록 하트를 가득 채워보세요.**  
당신의 TIL Today I Learn 리스트를 체크할 수 있는 사이트입니다.  
오늘의 배울 것을 3가지 정해보고, 실천 해보세요.  

---
 💚 2022년 8월 11일 배포 완료하였습니다.

### 배포
- 어플리케이션 배포에 Vercel 사용
  - https://111-gak.vercel.app/
- Json-server 배포에 Heroku 사용

### 팀원
Front-end 두선아 https://github.com/dusunax  
Front-end 김영건 https://github.com/0gunkim  
Front-end 김현지 https://github.com/kimhyunjee

### 작업일정
- **작업 일정** : 2022년 8월 5일 ~ 8월 11일
- **오전 회의** : AM 9시 ~ AM 10시
- **오후 회의** : PM 8시~ PM 9시


### 와이어프레임
- 메인페이지  
![image](https://user-images.githubusercontent.com/94776135/184176143-98d1ad62-7878-495f-836f-9cf89441beca.png)
- 글 작성
![image](https://user-images.githubusercontent.com/94776135/184176217-056ed95a-cb91-4736-a3eb-67d1d49736ce.png)
- 헤더  
![image](https://user-images.githubusercontent.com/94776135/184176329-73ad337d-7ab2-4f4a-b14d-166dcd49f265.png)
- 글 목록  
![image](https://user-images.githubusercontent.com/94776135/184176375-e72a9c04-a863-4da7-97d6-49dcb0bc079e.png)
- 글 상세  
![image](https://user-images.githubusercontent.com/94776135/184176460-f06aff5a-5372-4875-b0b3-753a3d3eae91.png)
- 글 수정  
![image](https://user-images.githubusercontent.com/94776135/184176548-192c950b-7c20-430c-913f-67b08d5d154f.png)

### 8월 5일 금요일: 계획 수립
- 주제 마인드맵
![image](https://user-images.githubusercontent.com/94776135/184176957-d4e66ff7-5680-4669-ad1f-44abefa6350e.png)
- 페이지별 요구 기능    
![image](https://user-images.githubusercontent.com/94776135/184176673-3e91055b-91c0-4e8e-ad94-9e47a9e27b09.png)
- 변수 리스트 및 역할 분담    
![image](https://user-images.githubusercontent.com/94776135/184176706-8260b9e7-9b80-481b-a186-556ae6b9681a.png)
- 나중에 추가: 모달   
![image](https://user-images.githubusercontent.com/94776135/184177925-05105ad6-22f6-45d7-a2d9-f6f7071b9c04.png)

### 8월 6일 토요일: 9시 회의
- 프로젝트 작명:
    - 1일 1TIL 각
        - 111-GAK
        - 111 TIL GAK
- 목표 수립:
    - 8월 7일 일요일까지 심화 학습자료 학습 완료
    - 8월 8일 월요일: 프로젝트 코드 작성 시작

### 8월 8일 월요일: 코드 컨벤션
- 문자 Case 예시  
  ![image](https://user-images.githubusercontent.com/94776135/184177843-e92642dc-054d-48de-bd20-3bbcd86e29b9.png)

- **리소스**
  1. 폴더 directory
    - kebab-case
  2. 자바스크립트 파일 javaScript
    - lowerCamelCase
  3. 리액트 컴포넌트 React Component
    - PascalCase
  4. 기타 파일
    - kebab-case
    - 이미지, 아이콘 등
- **코드**
  1. 상수
    - UPPER_CASE
  2. 컴포넌트
    - PascalCase
  3. 컴포넌트가 아닌 나머지
    - lowerCamelCase
- **코드 작성**
  - 버그 예방
    - props는 읽기 전용으로 사용하며, 직접 수정하지 않는다.
    - 부모 컴포넌트가 아닌 다른 컴포넌트의 함수를 사용하지 않는다.
    (의존성 역전 방지)
    - console.log()를 모두 지운다.
  - 클린 코드
    - 하나의 파일에 하나의 React Component만 만든다.
    - 가능하면 컴포넌트 안에서 함수를 생성하지 않는다.
    - inline CSS를 사용하지 않는다.
  - ES6
    - spread 연산자를 사용한다.
    - 구조 분해 할당을 사용한다.
    - let과 const만 사용한다.
    - 되도록 화살표 함수를 사용한다.
        - 띄어쓰기를 = () => {} 사용한다.
  - 컴포넌트 export 타입 선택
    - [x]  A타입: 주로 사용

        ```jsx
        export default function Test(){

        }
        ```

    - [ ]  ~~B타입~~

        ```jsx
        const Test = () => {

        }

        export default Test;
        ```

    - [ ]  ~~C타입~~

        ```jsx
        const Test = () => {

        }
        const Test2 = () => {

        }

        export {Test, Test2};
        ```
- **기타**
  - 깃허브 Commit message는 소문자에 띄어쓰기, 명령문을 사용한다.
  - CSS class는 kebob-case를 사용한다.
    
---

### Vercel 배포 & 깃허브 organization

- 깃허브
    - [https://github.com/111-Gak](https://www.notion.so/link-8a466d6941c54bb18132dc1edbef2530)
    - [x]  111-Gak-Dev의 각 branch에서 작업하기 ⇒ Vercel 배포는 각 분기마다 한 번씩
    - [ ]  각종 KEY는 .env에 보관하고 팀원과 공유하기
- Vercel
    - [**https://111-gak.vercel.app/**](https://111-gak.vercel.app/)
    - [**https://vercel.com/111-gak**](https://vercel.com/111-gak)

### Json-server

1. **시동 코드** (3001로 실행!)
    - 연결 확인하기: [http://localhost:3001/posts](http://localhost:3001/posts)
    
    ```bash
    yarn json-server --watch server/db.json --port 3001
    ```
    
2. **리액트 실행** (dev로 해주세요!)
    
    ```bash
    yarn start:dev
    ```
    
3. **기본 예시**
    
    ```jsx
    const [posts, setPosts] = useState(null);
    
    const fetchPosts = async () => {
      const {data} = await axios.get("http://localhost:3001/posts");
      setPosts(data);
    }
    
    useEffect(()=>{
      fetchPosts();
      console.log(posts);
    }, [])
    ```
    
4. **json-sever 데이터**
    
    ```jsx
    {
      "posts": [
        {
          "postId": 0,
          "username": "이름1",
          "createdAt": "2022-01-01",
          "title": "TIL제목1",
          "done": 0,
          "check": [
            {
                "text": "할 일1",
                "checked": 0
            },
            {
                "text": "할 일2",
                "checked": 1
            },
            {
                "text": "할 일3",
                "checked": 2
            }
          ]
        },
        {
          "postId": 1,
          "username": "이름2",
          "createdAt": "2022-02-02",
          "title": "TIL제목2",
          "done": 0,
          "check": [
            {
                "text": "할 일1",
                "checked": 0
            },
            {
                "text": "할 일2",
                "checked": 1
            },
            {
                "text": "할 일3",
                "checked": 2
            }
          ]
        }
      ],
      "comment": [
        {
          "postId": 0,
          "comments": [
              {
                  "commentId": 0,
                  "commentUsername": "김영희",
                  "commentText": "화이팅하세요!",
                  "commentCreatedAt": "0000-00-00"
              },
              {
                  "commentId": 1,
                  "commentUsername": "유재석",
                  "commentText": "반갑습니다.",
                  "commentCreatedAt": "0000-00-00"
              }
          ]
        }
      ]
    }
    ```
    
### API 통신 & 리덕스 스토어 사용팁

1. 리덕스 / 디스패치 / 액션
    - 포스트를 수정 또는 작성할 때 post모듈을 사용한다.
        - editPost()
        - writePost()
    - 코멘트를 수정, 또는 작성할 때 comment 모듈을 사용한다.
        - editComment()
        - writeComment()
2. json 서버 / axios / 서버요청
    - 포스트를 읽어오거나, 삭제하거나, 수정 내용을 저장할 때 /post로 요청한다.
        - /posts
        - /posts/postId
    - 코멘트를 읽어오거나, 삭제하거나, 수정 내용을 저장할 때 /comment로 요청한다.
        - /post/postId/comments
        - /post/postId/comments/commentId

--- 
### API 명세  
전체 게시글 GET /posts  
게시글 작성 POST /write  
게시글 보기 GET /post/:postId  
게시글 수정 PATCH /post/:postId  
게시글 삭제 DELETE /post/:postId  
체크 리스트 전체 불러오기 GET /checklists  
특정 체크 리스트 GET post/:postId/checklists/  
코멘트 추가 POST /comment  
코멘트 불러오기 GET /post/:postId/comments  
코멘트 삭제 DELETE /post/:postId/comment/:commentId  

---

### 스크린샷
![메인페이지-220812](https://user-images.githubusercontent.com/94776135/184171552-f095f08d-05e7-4da7-9eb6-8f11c0e9c6b2.png)
![글목록-220812](https://user-images.githubusercontent.com/94776135/184171558-f681c68d-5122-4f8c-b5a2-8e4da16a64ae.png)
![글작성-220812](https://user-images.githubusercontent.com/94776135/184171549-8e683ca9-6e4e-4ab4-9a1d-1ac78799a8d9.png)
![글A-220812](https://user-images.githubusercontent.com/94776135/184171555-08a9d577-ba71-432e-97aa-5a9bdc6c67a0.png)
![글B-220812](https://user-images.githubusercontent.com/94776135/184171557-ceaab172-e4d4-4181-9ba3-ce5368ab227a.png)
![글수정-220812](https://user-images.githubusercontent.com/94776135/184171537-9b860e0d-ff32-425e-a1fc-77c6de522c9d.png)

### Github 이슈 목록

- 해결한 이슈
  ![image](https://user-images.githubusercontent.com/94776135/184179560-e569f741-f50d-42a6-9fc8-586425dbcbc3.png)
- 8월 11일, 해결하지 못한 이슈
  ![image](https://user-images.githubusercontent.com/94776135/184179518-8937accb-36b2-432a-a3ee-f71abef2dbfb.png)
