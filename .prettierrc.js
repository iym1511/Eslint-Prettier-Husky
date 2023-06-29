module.exports = {
  printWidth: 100, // 한줄에 몇줄만큼 쓸건지
  singleQuote: true, // "" 아님 '' 뭐쓸건지 true = ''
  arrowParens: 'avoid', //  arrow function parameter가 하나일 경우 괄호 생략
};

// 실행 : npx prettier .
// . 는 현재 디랙토리를 뜻함
// npm prettier write . 하면 프리티어 적용

// plugin 새로운 능력 부여
// 미리셋팅한것 받아쓰는게 config
