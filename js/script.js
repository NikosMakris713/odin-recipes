let menuClicked = false;

let clickMenu = () => {
	if (menuClicked == false) {
		document.getElementById('menu-elements-mobile').classList.add('clicked-menu-elements-mobile');
		document.getElementById('line1').classList.add('clicked-line1');
		document.getElementById('line2').classList.add('clicked-line2');
		document.getElementById('line3').classList.add('clicked-line3');
		document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
		menuClicked = true;
	} else {
		document.getElementById('menu-elements-mobile').classList.remove('clicked-menu-elements-mobile');
		document.getElementById('line1').classList.remove('clicked-line1');
		document.getElementById('line2').classList.remove('clicked-line2');
		document.getElementById('line3').classList.remove('clicked-line3');
		document.getElementsByTagName('BODY')[0].style.overflow = 'visible';
		menuClicked = false;
	}
};
