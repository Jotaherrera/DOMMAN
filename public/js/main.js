const wordsDisplay = document.querySelector('#words-display');
const sliderControl = document.querySelector('.slider-input');
const stopButton = document.querySelector('.stop-icon');
const playButton = document.querySelector('.play-button');
const playIcon = document.querySelector('#play');

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

function displayWord() {
  if (!isPaused) {
    playIcon.classList.remove('play-icon');
    playIcon.classList.add('pause-icon');
    wordsDisplay.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
  }
  const speed = 1000 / sliderControl.value;
  timeoutCurrentValue = setTimeout(displayWord, speed);
}

let isPlaying = false;
let isPaused = false;
let currentIndex = 0;
let timeoutCurrentValue;
const words = await fetchData();

playButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    isPaused = false;
    playIcon.classList.remove('play-icon');
    playIcon.classList.add('pause-icon');
    displayWord();
  } else {
    playIcon.classList.remove('pause-icon');
    playIcon.classList.add('play-icon');
    isPaused = true;
    clearTimeout(timeoutCurrentValue);
  }
});

stopButton.addEventListener('click', () => {
  isPaused = true;
  isPlaying = false;
  currentIndex = 0;
  clearTimeout(timeoutCurrentValue);
  wordsDisplay.textContent = words[currentIndex];
  playIcon.classList.remove('pause-icon');
  playIcon.classList.add('play-icon');
});
