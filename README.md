# VueExpressNode
Vue와 ExpressJs 통합 개발환경 예제


# 폴더구조

루트/frontend : vue 프로젝트
루트/backend : expressJs 프로젝트

# 테스트 방법

루트/frontend 로 이동: cmd 에서 npm i로 의존성설치
루트/backend 로 이동: cmd 에서 npm i로 의존성설치

루트/frontend 로 이동: npm run build 명령 입력 => vue 프로젝트를 빌드해서 루트/backend/public 에 정적웹소스 생성됩니다.

루트/backend 로 이동: DEBUG=backend:* npm start 명령 입력으로 expressJS 구동 

브라우저에서 http://localhost:3000, http://localhost:3000/LogInPag, http://localhost:3000/movie, http://localhost:3000/movie/1
등으로 동작 화면 확인 가능


# 해당 프로젝트 메뉴얼 

https://blog.hanumoka.net/2018/11/13/vue-20181113-vue-how-to-make-vue-express-project/
