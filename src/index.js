import './style.css';

console.log('funguju!');
//3.cviceni//
const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('#nav');
navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('.nav-closed');
});

const navLinkElms = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinkElms.length; i++) {
  navLinkElms[i].addEventListener('click', () => {
    navElm.classList.toggle('.nav-closed');
  });
}

//4.cvicení//
const orderBtnElm = document.querySelector('#order-btn');
const drinkCupElm = document.querySelector('.drink__cup');

let ordered = false;

orderBtnElm.addEventListener('click', () => {
  if (!ordered) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});
