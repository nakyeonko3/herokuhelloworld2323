const iwantTODO = [
  ' 맛있는 거 치킨 피자 시켜 먹기',
  '500만원 내놔',
  '영화 보기',
  '침대에 누워서 음악 듣기',
  '밖에 나가서 뛰고 오기',
  '친구들이랑 놀러 가기',
  '파파존스 피자 사먹기',
];

for (let i = 0; i < 14; i++) {
  iwantTODO.push('더 열심히 웹개발 공부하기');
}

const button = document.querySelector('button'),
  span = document.querySelector('span'),
  divCount = document.querySelector('.div-count-num'),
  restButton = document.querySelector('.restButton');

function mathRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function init(num) {
  function setInitalWebPage() {
    span.innerText = localStorage.getItem('iwantTODO');
    divCount.innerHTML = `count:${num}`;
    button.addEventListener('click', handleClick);
    restButton.addEventListener('click', resetAll);
  }

  function resetAll(event) {
    event.preventDefault();
    num = 0;
    divCount.innerHTML = `count:${num}`;
    span.innerText = '';
    localStorage.setItem('iwantTODO', '');
    localStorage.setItem('count', 0);
  }

  function handleClick(event) {
    event.preventDefault();
    changeSpanInnerText();
    chageDivCountInnerHTML();
  }

  function chageDivCountInnerHTML() {
    divCount.innerHTML = `count:${++num}`;
    localStorage.setItem('count', num);
  }

  function changeSpanInnerText() {
    span.innerText = iwantTODO[mathRandomInt(iwantTODO.length)];
    localStorage.setItem('iwantTODO', span.innerText);
  }

  setInitalWebPage();
}

const num = localStorage.getItem('count') ?? 0;
init(num);
