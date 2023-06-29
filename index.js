'asd';

'ASD';

const hello = 'world';

// package.json
// scripts 안에서 원하는 단어로 npm 단축어를 생성할수 있다.
// npm run format 을 하면 prettier --write . 이 실행된다 (run안해도됨)

// 파일이 많아지면 전부 포멧팅되는데 수정된 파일만 포멧팅 해주려면
// npx prettier --write --cache . 실행 후 한번더 같은 명령어를 입력하면
// 변화없는 페이지에는 cashed가 뜨면서 변화가있는 파일만 포멧팅됨!!

// eslint도 같이 설정해줌
// cache를 저장하기위해 캐쉬가 저장될 eslintcache 파일이 생김
// 하지만 github에는 올라갈 필요가 없기때문에 .gitignore 사용 (각자 작업하는게 달라서 충돌 가능성 있음)

// prettier 는 캐쉬파일이 node_modules안에 있기때문에 따로 gitignore처리를 해줄필요가없다.
// 강의 02:32:00 부터듣자 husky 사용준비 -끝-
