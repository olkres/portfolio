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