//Бургер меню
const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.burger')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('open')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('nav')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('open')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('open')
			body.classList.remove('lock')
		})
	})
}

//Смена картинок
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioItems = document.querySelector('.portfolio-items');

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    const portfolioBtnsArr = Array.from(portfolioBtns.children);
    portfolioBtnsArr.forEach(el => {
      el.classList.remove('portfolio-btn-active');
      event.target.classList.add('portfolio-btn-active');
    })
    const portfolioImagesArr = Array.from(portfolioItems.children);
    portfolioImagesArr.forEach((el, index) => el.src = `./assets/img/${event.target.dataset.image}/${index + 1}.jpg`)
  }
}
portfolioBtns.addEventListener('click', changeImage);

//Видеоплеер

const player = document.querySelector('.video-player');
const poster = document.querySelector('.poster');
//далее константы обращаются к player и ищут элемент внутри .video-player
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const volume = player.querySelector('.volume');
const volumeIcon = player.querySelector('.volume-icon');
const toggle = player.querySelector('.play');
const playBtn = player.querySelector('.btn-play');
const time = player.querySelector('.time');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';//тернарный оператор
  video[method]();
  //аналогичное действие
  // if (video.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }
}

function toggleMute() {
  if(video.muted) {
    video.muted = false;
    volumeIcon.classList.remove('mute');
  } else {
    video.muted = true;
    volumeIcon.classList.add('mute');
  }
}
volumeIcon.addEventListener('click', toggleMute);

function updateButton() {
  if(this.paused) {
    toggle.classList.remove('pause');
    playBtn.style.display = 'block';
  } else {
    toggle.classList.add('pause');
    playBtn.style.display = 'none';
  }
}

function inputRange(input) {
  const value = input.value;  
  input.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #C8C8C8 ${value}%, #C8C8C8 100%)`;
}
progress.addEventListener('input', () => inputRange(progress));
volume.addEventListener('input', () => inputRange(volume));


function changeVolume() {
	video.volume = this.value / 100;  
  if(video.volume <= 0.01) {
    video.muted = true;
    volumeIcon.classList.add('mute');
  } else {
    video.muted = false;
    volumeIcon.classList.remove('mute');
  }
}
volume.addEventListener('input', changeVolume);

function changeProgress() {
	video.currentTime = this.value / 100 * video.duration;
  if(video.currentTime < video.duration) {
    video.play();
  }
}
progress.addEventListener('input', changeProgress);

function timer() {
  progress.value = (video.currentTime / video.duration) * 100;
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }
  time.innerHTML = `${minutes}:${seconds}`;
}

video.addEventListener('timeupdate', timer);

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100 || 0;
  progress.value = percent;
  inputRange(progress);
}

function removePoster() {
  poster.style.opacity = '0';
  poster.style.pointerEvents = 'none';
  setTimeout(function() {poster.style.display = 'none';}, 1000)
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton); 
video.addEventListener('timeupdate', handleProgress);
playBtn.addEventListener('click', togglePlay);
playBtn.addEventListener('click', removePoster);
poster.addEventListener('click', removePoster);
poster.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);