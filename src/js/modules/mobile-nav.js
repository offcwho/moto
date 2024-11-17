function mobileNav() {
	// Mobile nav button
	const navBtn = document.getElementById("btn")
	const nav = document.getElementById("menu");

	navBtn.onclick = function () {
		nav.classList.toggle('header__navigation--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;