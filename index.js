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