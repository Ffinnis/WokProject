//-------- menu ----------
const header__btn_menu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.menu');
header__btn_menu.addEventListener('click', (el) => {
  header__btn_menu.classList.toggle('active');
  menu.classList.toggle('active');
});
//-------- gallery ----------
const bar_item = document.querySelectorAll('.block-5__bar_item');
const nav_name = document.querySelectorAll('.nav_name');
for (let i = 0; i < bar_item.length; i++) {
  bar_item[i].addEventListener('click', (el) => {
    swiper2.slideToLoop(i, 1800, true);
    for (let i = 0; i < bar_item.length; i++) {
      bar_item[i].classList.remove('active');
      nav_name[i].classList.remove('active');
    }
    bar_item[i].classList.add('active');
    nav_name[i].classList.add('active');
  });
}

//-------- ask btn ----------
const ask__main_title = document.querySelectorAll('.ask__main_title');
for (let i = 0; i < ask__main_title.length; i++) {
  ask__main_title[i].addEventListener('click', (el) => {
    ask__main_title[i].classList.toggle('active');
    ask__main_title[i].nextElementSibling.classList.toggle('active');
  });
}
//-------- opinions more ----------
const offer__opinions_bottom = document.querySelectorAll('.offer__opinions_bottom');
for (let i = 0; i < offer__opinions_bottom.length; i++) {
  offer__opinions_bottom[i].addEventListener('click', (el) => {
    el.preventDefault();
    offer__opinions_bottom[i].parentElement.classList.toggle('active');
    offer__opinions_bottom[i].previousElementSibling.lastElementChild.addEventListener(
      'click',
      (el) => {
        offer__opinions_bottom[i].parentElement.classList.remove('active');
      },
    );
  });
}
//-------- item table ----------
const item_btns = document.querySelectorAll('.item-block-4__main_btn');
const item_table = document.querySelectorAll('.item-block-4__main_table');
for (let i = 0; i < item_btns.length; i++) {
  item_btns[i].addEventListener('click', (el) => {
    el.preventDefault();
    for (let k = 0; k < item_btns.length; k++) {
      item_btns[k].classList.remove('active');
      item_table[k].classList.remove('active');
    }
    item_btns[i].classList.add('active');
    item_table[i].classList.add('active');
  });
}
//-------- item table5 ----------
const item_btns5 = document.querySelectorAll('.item-block-5__main_btn');
const item_table5 = document.querySelectorAll('.item-block-5__main_table');
for (let i = 0; i < item_btns5.length; i++) {
  item_btns5[i].addEventListener('click', (el) => {
    el.preventDefault();
    for (let k = 0; k < item_btns5.length; k++) {
      item_btns5[k].classList.remove('active');
      item_table5[k].classList.remove('active');
    }
    item_btns5[i].classList.add('active');
    item_table5[i].classList.add('active');
  });
}
//-------- popup ----------
const popup_open = document.querySelectorAll('.popup_open');
const popup__main_close = document.querySelector('.popup__main_close');
const popup = document.querySelector('.popup');
for (let i = 0; i < popup_open.length; i++) {
  popup_open[i].addEventListener('click', (el) => {
    el.preventDefault();
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
    header__btn_menu.classList.remove('active');
    menu.classList.remove('active');
  });
}
popup__main_close.addEventListener('click', () => {
  popup.classList.remove('active');
  document.body.style.overflow = 'auto';
});
popup.addEventListener('click', function (e) {
  if (popup === e.target) {
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

//-------- compare----------
//
// let count = 0;
// const compare_header = document.querySelector('.compare_header');

//-------- zoomer img----------
const zoomer = document.querySelectorAll('.zoomer');
const zoom = document.querySelector('.zoom');
const zoom__main_close = document.querySelector('.zoom__main_close');
const zoom__img = document.querySelector('.zoom__img');
const zoom__main_next = document.querySelector('.zoom__main_next')
const zoom__main_prev = document.querySelector('.zoom__main_prev')
if (zoomer.length > 0) {
  for (let i = 0; i < zoomer.length; i++) {
    zoomer[i].classList.add('swiper-slide-active');
    zoomer[i].style.cursor = 'pointer';
    zoomer[i].addEventListener('click', (el) => {
      el.preventDefault();
      if (zoom__img.childNodes.length === 1) {
        zoom__img.append(el.target.cloneNode(true));
      }
      zoom.classList.add('active');
      document.body.style.overflow = 'hidden';
      header__btn_menu.classList.remove('active');
      menu.classList.remove('active');
    });
  }
  zoom__main_next.addEventListener('click', () => {
    let next_img = document.querySelector('.block-5__main .swiper-slide-active .swiper-slide-next');
    zoom__img.lastElementChild.remove();
    zoom__img.append(next_img.lastElementChild.cloneNode(true));
    const arrow_right = document.querySelector('.block-5__arrow-right');
    arrow_right.click()
  })
  zoom__main_prev.addEventListener('click', () => {
    let prev_img = document.querySelector('.block-5__main .swiper-slide-active .swiper-slide-prev');
    zoom__img.lastElementChild.remove();
    zoom__img.append(prev_img.lastElementChild.cloneNode(true));
    const arrow_left = document.querySelector('.block-5__arrow-left');
    arrow_left.click()
  })
  zoom__main_close.addEventListener('click', () => {
    zoom.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (zoom__img.lastElementChild) {
      zoom__img.lastElementChild.remove();
    }
  });
  zoom.addEventListener('click', function (e) {
    if (zoom === e.target) {
      zoom.classList.remove('active');
      document.body.style.overflowY = 'auto';
      if (zoom__img.lastElementChild) {
        zoom__img.lastElementChild.remove();
      }
    }
  });
}

//-------- compare ----------
const sl_175 = document.querySelector('.sl-175');
const sl_180 = document.querySelector('.sl-180');
const sl_210 = document.querySelector('.sl-210');
const sl_210BR = document.querySelector('.sl-210BR');
const sl_230 = document.querySelector('.sl-230');
const sl_42 = document.querySelector('.sl-42');
const compare_header = document.querySelector('.compare_header');
const btn_comparison = document.querySelectorAll('.item-slider__header_btn-comparison');
const col__body_title = document.querySelectorAll('.col-2__body_title');

//
let compare_count = localStorage.getItem('compare_count');
//
//
// for (let i = 0; i < btn_comparison.length; i++) {
//     btn_comparison[i].addEventListener('click', (el)=>{
//         if (!localStorage.getItem(el.target.getAttribute('model'))){
//             localStorage.setItem(el.target.getAttribute('model'), 'true');
//             conpare_visible();
//         }else {
//             console.log('no')
//             localStorage.setItem(el.target.getAttribute('model'), 'false');
//             conpare_visible();
//         }
//
//     }, )
// }
//
// if (compare_count > 0) {
//     compare_header.children[0].style.visibility = 'auto';
//     compare_header.children[0].innerHTML = compare_count;
// }else  {
//     compare_header.children[0].style.visibility = 'hidden';
// }

let conpare_visible = () => {
  compare_count = 0;

  if (localStorage.getItem('175') === 'true') {
    compare_count++;

    // sl_175.classList.add('active')
  }
  if (localStorage.getItem('180') === 'true') {
    compare_count++;

    // sl_175.classList.add('active')
  }
  if (localStorage.getItem('210') === 'true') {
    compare_count++;

    // sl_175.classList.add('active')
  }
  if (localStorage.getItem('210BR') === 'true') {
    compare_count++;

    // sl_175.classList.add('active')
  }
  if (localStorage.getItem('230') === 'true') {
    compare_count++;

    // sl_175.classList.add('active')
  }
  if (localStorage.getItem('42') === 'true') {
    compare_count++;

    // sl_175.classList.add('active')
  }

  localStorage.setItem('compare_count', compare_count);

  if (compare_count > 0) {
    compare_header.children[0].style.visibility = 'visible';
    compare_header.children[0].innerHTML = compare_count;
  } else {
    compare_header.children[0].style.visibility = 'hidden';
  }
};
conpare_visible();

for (let i = 0; i < col__body_title.length; i++) {
  col__body_title[i].addEventListener('click', (e) => {
    localStorage.setItem(e.target.getAttribute('data-model'), 'false');
    conpare_visible();
    e.target.parentElement.parentElement.classList.remove('active');
  });
}
for (let i = 0; i < btn_comparison.length; i++) {
  btn_comparison[i].addEventListener('click', (e) => {
    if (
      localStorage.getItem(e.target.getAttribute('data-model')) &&
      localStorage.getItem(e.target.getAttribute('data-model')) === 'false'
    ) {
      localStorage.setItem(e.target.getAttribute('data-model'), 'true');
      conpare_visible();
    } else {
      localStorage.setItem(e.target.getAttribute('data-model'), 'false');
      conpare_visible();
    }
  });
}

if (sl_175) {
  console.log(localStorage.getItem('175') === 'true');
  if (localStorage.getItem('175') === 'true') {
    sl_175.classList.add('active');
    // sl_175.classList.add('active')
  } else {
    sl_175.classList.remove('active');
  }
}
if (sl_180) {
  if (localStorage.getItem('180') === 'true') {
    sl_180.classList.add('active');
    // sl_175.classList.add('active')
  } else {
    sl_180.classList.remove('active');
  }
}
if (sl_210) {
  if (localStorage.getItem('210') === 'true') {
    sl_210.classList.add('active');
    // sl_175.classList.add('active')
  } else {
    sl_210.classList.remove('active');
  }
}
if (sl_210BR) {
  if (localStorage.getItem('210BR') === 'true') {
    sl_210BR.classList.add('active');
    // sl_175.classList.add('active')
  } else {
    sl_210BR.classList.remove('active');
  }
}
if (sl_230) {
  if (localStorage.getItem('230') === 'true') {
    sl_230.classList.add('active');
    // sl_175.classList.add('active')
  } else {
    sl_230.classList.remove('active');
  }
}
if (sl_42) {
  if (localStorage.getItem('42') === 'true') {
    sl_42.classList.add('active');
    // sl_175.classList.add('active')
  } else {
    sl_42.classList.remove('active');
  }
}

/* animation */
for (btn_comp of btn_comparison) {
  btn_comp.addEventListener('click', (e) => {
    var image = e.target.parentNode.parentNode.children[1].querySelector('img');
    var span_img = e.target.parentNode.parentNode.children[1].querySelector('span');
    var s_image = image.cloneNode(false);
    span_img.appendChild(s_image);
    span_img.classList.add('active');
    setTimeout(() => {
      span_img.removeChild(s_image);
      span_img.classList.remove('active');
    }, 500);
  });
}
