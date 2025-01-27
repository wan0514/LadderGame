const { argv } = require('node:process');

const args = argv.slice(2);
const num = parseInt(args[0]);

if (num < 2 || num > 8) {
  console.log('2명 이상 8명 이하의 숫자를 입력하세요.');
  return;
} else {
  console.log(`사다리 인원은 ${num}명 입니다.`);
}
