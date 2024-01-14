// comment 2
document.addEventListener("DOMContentLoaded", function() {
	const url = 'https://google.com';
	condst some = '';

  const btns = document.querySelectorAll('.js-button');
	if(btns.length === 0) return;
	btns.forEach(item => {
		item.href = url;
	})
});
