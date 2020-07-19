export default function testBrowseryCompatability() {

	var isChrome = !!window.chrome;
	var isFirefox = typeof InstallTrigger !== 'undefined';

	if (!isChrome && !isFirefox) {
		alert('You are using a browser that is not Chrome or Firefox! Please use either of these browsers for HeroVR.')
	}

	window.havePointerLock = 'pointerLockElement' in document ||
	    'mozPointerLockElement' in document ||
	    'webkitPointerLockElement' in document;

	if (!havePointerLock) console.warn('PointerLock not supported on your browser!');
}