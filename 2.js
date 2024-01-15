// version 0.0.1
console.log('raw, from github')
document.addEventListener("DOMContentLoaded", function() {
	const url = 'https://www.jsdelivr.com/';

  const btns = document.querySelectorAll('.js-button');
	if(btns.length === 0) return;
	btns.forEach(item => {
		item.href = url;
	})
});
