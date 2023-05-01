const wordsDisplay = document.querySelector('#words-display');
const sliderControl = document.querySelector('.slider-input');
const pauseButton = document.querySelector('.pause-icon');
const stopButton = document.querySelector('.stop-icon');
const playButton = document.querySelector('.play-icon');

async function fetchData() {
  try {
    const response = await fetch('/words');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const words = await fetchData();
wordsDisplay.textContent = words[0];

let lastIndex = 0;
let isPaused = false;
let isStopped = false;
let isPlaying = false;

function displayWord() {
  if (isPaused) {
    return;
  }

  isPlaying = true;
  playButton.disabled = true;
  wordsDisplay.textContent = words[lastIndex];
  lastIndex = (lastIndex + 1) % words.length;

  if (!isStopped) {
    const sliderValue = sliderControl.value;
    const displayDelay = 1000 / sliderValue;
    setTimeout(displayWord, displayDelay);
  }
}

pauseButton.addEventListener('click', () => {
  isPlaying = false;
  playButton.disabled = false;
  isPaused = !isPaused;
});

stopButton.addEventListener('click', () => {
  isPlaying = false;
  isPaused = true;
  isStopped = true;
  lastIndex = 0;
  wordsDisplay.textContent = words[0];
  playButton.disabled = false;
});

playButton.addEventListener('click', () => {
  isPaused = false;
  isStopped = false;
  if (!isPlaying) {
    displayWord();
  }
});
