const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
	text.classList.toggle('show-more');
	if(readMoreBtn.innerText === 'VEZI ARTICOLUL'){
		readMoreBtn.innerText = 'ASCUNDE ARTICOLUL';
	}else{
		readMoreBtn.innerText = 'VEZI ARTICOLUL';
	}
})