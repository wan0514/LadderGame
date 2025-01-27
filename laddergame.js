const { argv } = require('node:process');

const args = argv.slice(2);
const num = parseInt(args[0]);

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;

if (isNaN(num) || num < MIN_PLAYERS || num > MAX_PLAYERS) {
  console.log(
    `${MIN_PLAYERS}명 이상 ${MAX_PLAYERS}명 이하의 숫자를 입력하세요.`
  );
  process.exit(1);
} else {
  console.log(`사다리 인원은 ${num}명 입니다.`);
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function createLadder(num, height) {
  const widthNumber = num - 1;
  return Array.from({ length: height }, () =>
    Array.from({ length: widthNumber }, () => (getRandomBoolean() ? '-' : ' '))
  );
}

function printLadder(ladder) {
  for (const row of ladder) {
    console.log(`|${row.join('|')}|`);
  }
}

printLadder(createLadder(4, 5));
