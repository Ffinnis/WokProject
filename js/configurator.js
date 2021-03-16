//-------- popup ----------
const popup_open = document.querySelectorAll('.popup_open');
const popup__main_close = document.querySelector('.popup__main_close');
const popup = document.querySelector('.popup');
for (let i = 0; i < popup_open.length; i++) {
  popup_open[i].addEventListener('click', (el) => {
    el.preventDefault();
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}
popup__main_close.addEventListener('click', () => {
  popup.classList.remove('active');
  document.body.style.overflowY = 'auto';
});
popup.addEventListener('click', function (e) {
  if (popup === e.target) {
    popup.classList.remove('active');
    document.body.style.overflowY = 'auto';
  }
});

//-------- menu ----------
const header__btn_menu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.menu');
header__btn_menu.addEventListener('click', (el) => {
  header__btn_menu.classList.toggle('active');
  menu.classList.toggle('active');
});

//-------- на выборe конфигуратора ------------
const out__btn = document.querySelectorAll('.out__btn_js');
const config_link = document.querySelectorAll('.config_link ');
for (let i = 0; i < out__btn.length; i++) {
  out__btn[i].addEventListener('click', (el) => {
    for (let i = 0; i < out__btn.length; i++) {
      out__btn[i].classList.remove('active');
      config_link[i].classList.remove('active');
    }
    out__btn[i].classList.add('active');
    config_link[i].classList.add('active');
  });
}

//-------- stick конфигуратор ------------
const out = document.querySelector('.out');
const out__fake = document.querySelector('.out__fake');
const out__container = document.querySelector('.out__container');
const header__configuration = document.querySelector('.header__configuration');
let out_h = out.offsetHeight;
let out__fake_h = out__fake.offsetHeight;
let out_off = out.offsetTop;
let out__fake_off = out__fake.offsetTop;
let flag_scroll = true;
let flag2_scroll = true;
window.addEventListener('scroll', (e) => {
  if (out_off < window.pageYOffset + menu.offsetHeight + 100) {
    menu.classList.remove('active');
    header__btn_menu.classList.remove('active');
  }
  if (window.innerWidth > 640) {
    let dop_h;
    if (window.innerWidth < 768) {
      dop_h = 60;
    } else {
      dop_h = 80;
    }
    if (out_off - dop_h < window.pageYOffset) {
      out.style.position = 'fixed';
      out.style.zIndex = '20';
      out.style.top = '-40px';
      if (flag_scroll) {
        if (window.innerWidth < 768) {
          window.scrollBy(0, -60);
          flag_scroll = false;
        } else {
          window.scrollBy(0, -80);
          flag_scroll = false;
        }
      }
      out__fake.style.height = out_h - 80 + 'px';
      out.classList.add('active');
    } else if (out_off - dop_h * 2 > window.pageYOffset && !flag_scroll) {
      out.style.position = 'relative';
      if (!flag_scroll) {
        if (window.innerWidth < 768) {
          window.scrollBy(0, 60);
          flag_scroll = false;
        } else {
          window.scrollBy(0, 80);
          flag_scroll = false;
        }
        flag_scroll = true;
      }
      out.style.top = '0';
      out.classList.remove('active');
      out__fake.style.height = '0px';
    }
  } else {
    out.style.zIndex = '5';
  }
});

//-------- выбор слайдера в топе ------------
const top__main_item = document.querySelectorAll('.top__main_item');
const window__active_title = document.querySelectorAll('.window__active_title');
const window__img = document.querySelectorAll('.window__img');
const base_price = document.querySelectorAll('.base_price');
for (let i = 0; i < top__main_item.length; i++) {
  top__main_item[i].addEventListener('click', (e) => {
    for (let i = 0; i < top__main_item.length; i++) {
      top__main_item[i].classList.remove('active');
      window__active_title[i].classList.remove('active');
      window__img[i].classList.remove('active');
    }

    top__main_item[i].classList.add('active');
    window__active_title[i].classList.add('active');
    window__img[i].classList.add('active');
    out_off = out.offsetTop;

    switch (e.currentTarget.children[0].innerHTML) {
      case 'Slider 175': {
        active_slider = 'Slider 175';
        base_price[0].childNodes[0].data = '575 000';
        break;
      }
      case 'Slider 180': {
        active_slider = 'Slider 180';
        base_price[0].childNodes[0].data = '749 000';
        break;
      }
      case 'Slider 210': {
        active_slider = 'Slider 210';
        base_price[0].childNodes[0].data = '825 000';
        break;
      }
      case 'Slider 210BR': {
        active_slider = 'Slider 210BR';
        base_price[0].childNodes[0].data = '825 000';
        break;
      }
      case 'Slider 230': {
        active_slider = 'Slider 230';
        base_price[0].childNodes[0].data = '929 000';
        if (base_price[0].childNodes.length === 1) {
          base_price[0].insertAdjacentHTML('beforeend', '<span> руб.</span>');
        }
        break;
      }
      case 'Slider 42': {
        active_slider = 'Slider 42';
        base_price[0].childNodes[0].data = 'по запросу';
        if (base_price[0].childNodes.length > 1) {
          base_price[0].childNodes[1].remove();
        }
        break;
      }
    }
  });
}

let active_slider = 'Slider 175';
let active_color = 'blue';
let oprion_sum = 0;
let active_color_line = '0';

//-------- full sum ------------
const sum = document.querySelector('.sum');
let fullSum = () => {
  console.log();
  optionSum();
  switch (active_slider) {
    case 'Slider 175': {
      sum.childNodes[0].data = 575000 + optionSum();
      if (sum.childNodes.length === 1) {
        sum.insertAdjacentHTML('beforeend', '<span> руб.</span>');
      }
      break;
    }
    case 'Slider 180': {
      sum.childNodes[0].data = 749000 + optionSum();
      if (sum.childNodes.length === 1) {
        sum.insertAdjacentHTML('beforeend', '<span> руб.</span>');
      }
      break;
    }
    case 'Slider 210': {
      sum.childNodes[0].data = 825000 + optionSum();
      if (sum.childNodes.length === 1) {
        sum.insertAdjacentHTML('beforeend', '<span> руб.</span>');
      }
      break;
    }
    case 'Slider 210BR': {
      sum.childNodes[0].data = 825000 + optionSum();
      if (sum.childNodes.length === 1) {
        sum.insertAdjacentHTML('beforeend', '<span> руб.</span>');
      }
      break;
    }
    case 'Slider 230': {
      sum.childNodes[0].data = 929000 + optionSum();
      if (sum.childNodes.length === 1) {
        sum.insertAdjacentHTML('beforeend', '<span> руб.</span>');
      }
      break;
    }
    case 'Slider 42': {
      sum.childNodes[0].data = 'По запросу';
      console.log(sum.childNodes);
      if (sum.childNodes.length > 1) {
        sum.childNodes[1].remove();
      }
      break;
    }
  }
  change_group_slider();
  check_color();
  change_out_img();
};

//-------- check color & line ------------
const color_el = document.querySelectorAll('[name="exterior__color"]');
const line_checker = document.querySelectorAll('[name="line__check_row"]');
active_color = color_el[5].getAttribute('data-val');
const check_color = (e) => {
  for (let i = 0; i < color_el.length; i++) {
    if (color_el[i].checked) {
      active_color = color_el[i].getAttribute('data-val');
    }
  }
  for (let i = 0; i < line_checker.length; i++) {
    if (line_checker[i].checked) {
      active_color_line = i + 1;
      break;
    } else {
      active_color_line = '0';
    }
  }

  // for (let i = 0; i < all_activ_image.length; i++) {
  //     all_activ_image[i].classList.remove('active');
  // }
  // for (let i = 0; i < all_activ_svg.length; i++) {
  //
  //     all_activ_svg[i].classList.remove('active');
  // }
  //
  // const activ_image = document.querySelectorAll('[line="' + active_color_line + '"][color="' + active_color + '"]');
  // for (let i = 0; i < activ_image.length; i++) {
  //     activ_image[i].classList.add('active');
  // }

  //
  // for (let i = 0; i < color_img_check.length; i++) {
  //     color_img_check[i].classList.remove('active');
  //     if (color_img_check[i].getAttribute('color') === active_color){
  //         console.log(color_img_check[i]);
  //         color_img_check[i].classList.add('active');
  //     }
  // }
  // for (let i = 0; i < color_img_check.length; i++) {
  //     color_img_check[i].classList.remove('active');
  //     if (color_img_check[i].getAttribute('color') === active_color &&
  //         color_img_check[i].getAttribute('line') === active_color_line ){
  //
  //         color_img_check[i].classList.add('active');
  //     }
  // }
};

//-------- функция сумма опций ------------
const option_price = document.querySelector('.option_price');
// const line__check_row = document.querySelectorAll('[name=line__check_row]');
const priceArg = document.querySelectorAll('[price]');
const optionSum = () => {
  oprion_sum = 0;
  for (let i = 0; i < priceArg.length; i++) {
    if (priceArg[i].checked) {
      oprion_sum += +priceArg[i].getAttribute('price');
    }
  }
  if (oprion_sum > 0) {
    let arr = [];
    let srt = oprion_sum.toString().split('');
    for (let [i, count] = [srt.length - 1, 1]; i >= 0; i--) {
      count++;
      if (count === 5) {
        arr.unshift(' ');
      }
      arr.unshift(srt[i]);
    }
    option_price.childNodes[0].data = arr.join('');
  } else {
    option_price.childNodes[0].data = oprion_sum;
  }
  return oprion_sum;
};

document.addEventListener('click', (el) => fullSum());

//-------- uncheck radio ------------
const line__check_row = document.querySelectorAll('[name=line__check_row]');
for (let i = 0; i < line__check_row.length; i++) {
  line__check_row[i].addEventListener('click', (e) => {
    for (let i = 0; i < line__check_row.length; i++) {
      if (line__check_row[i].checked && line__check_row[i] !== e.target) {
        line__check_row[i].checked = false;
      }
    }
  });
}

//-------- active group img ------------
const out__block_img = document.querySelectorAll('.out__block_img');

const change_group_slider = () => {
  for (let i = 0; i < out__block_img.length; i++) {
    out__block_img[i].classList.remove('active');
  }
  switch (active_slider) {
    case 'Slider 175': {
      document.querySelector('.slider_img_175').classList.add('active');
      break;
    }
    case 'Slider 180': {
      document.querySelector('.slider_img_180').classList.add('active');
      break;
    }
    case 'Slider 210': {
      document.querySelector('.slider_img_210').classList.add('active');
      break;
    }
    case 'Slider 210BR': {
      document.querySelector('.slider_img_210BR').classList.add('active');
      break;
    }
    case 'Slider 230': {
      document.querySelector('.slider_img_230').classList.add('active');
      break;
    }
    case 'Slider 42': {
      document.querySelector('.slider_img_42').classList.add('active');
      break;
    }
  }
};

document.querySelectorAll('img.svg').forEach(function (element) {
  var imgID = element.getAttribute('id');
  var imgClass = element.getAttribute('class');
  var imgURL = element.getAttribute('src');

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var svg = xhr.responseXML.getElementsByTagName('svg')[0];

      if (imgID != null) {
        svg.setAttribute('id', imgID);
      }

      if (imgClass != null) {
        svg.setAttribute('class', imgClass + ' replaced-svg');
      }
      svg.removeAttribute('xmlns:a');

      if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
        svg.setAttribute(
          'viewBox',
          '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'),
        );
      }
      element.parentElement.replaceChild(svg, element);
    }
  };
  xhr.open('GET', imgURL, true);
  xhr.send(null);
});

// //-------- active out_img ------------
const out_img_175 = document.querySelectorAll('.out_img_175');
const out_img_180 = document.querySelectorAll('.out_img_180');
const out_img_210 = document.querySelectorAll('.out_img_210');
const out_img_210BR = document.querySelectorAll('.out_img_210BR');
const out_img_230 = document.querySelectorAll('.out_img_230');
const out_img_42 = document.querySelectorAll('.out_img_42');
const out__block_item = document.querySelectorAll('.out__block_item');

const change_out_img = () => {
  switch (active_slider) {
    case 'Slider 175': {
      for (let i = 0; i < out_img_175.length; i++) {
        if (out_img_175[i].getAttribute('line') == active_color_line) {
          out_img_175[i].classList.add('active');
          out__block_item[i].classList.add('active');

          if (out_img_175[i].querySelector('.cls-33')) {
            if (active_color_line == 0) {
              out_img_175[i].querySelector('.cls-33').style.fill = '#d6d6d6';
            } else {
              for (let y = 0; y < out_img_175[i].querySelectorAll('.cls-33').length; y++) {
                out_img_175[i].querySelectorAll('.cls-33')[y].style.fill = active_color;
              }
            }
          }
        } else {
          out_img_175[i].classList.remove('active');
          out__block_item[i].classList.remove('active');
        }
      }
      break;
    }
    case 'Slider 180': {
      for (let i = 0; i < out_img_180.length; i++) {
        if (out_img_180[i].getAttribute('line') == active_color_line) {
          out_img_180[i].classList.add('active');
          if (out_img_180[i].querySelector('.cls-33')) {
            if (active_color_line == 0) {
              out_img_180[i].querySelector('.cls-33').style.fill = '#d6d6d6';
            } else {
              for (let y = 0; y < out_img_180[i].querySelectorAll('.cls-33').length; y++) {
                out_img_180[i].querySelectorAll('.cls-33')[y].style.fill = active_color;
              }
            }
          }
        } else {
          out_img_180[i].classList.remove('active');
        }
      }
      break;
    }
    case 'Slider 210': {
      for (let i = 0; i < out_img_210.length; i++) {
        if (out_img_210[i].getAttribute('line') == active_color_line) {
          out_img_210[i].classList.add('active');
          if (out_img_210[i].querySelector('.cls-33')) {
            if (active_color_line == 0) {
              out_img_210[i].querySelector('.cls-33').style.fill = '#d6d6d6';
            } else {
              for (let y = 0; y < out_img_210[i].querySelectorAll('.cls-33').length; y++) {
                out_img_210[i].querySelectorAll('.cls-33')[y].style.fill = active_color;
              }
            }
          }
        } else {
          out_img_210[i].classList.remove('active');
        }
      }
      break;
    }
    case 'Slider 210BR': {
      for (let i = 0; i < out_img_210BR.length; i++) {
        if (out_img_210BR[i].getAttribute('line') == active_color_line) {
          out_img_210BR[i].classList.add('active');
          if (out_img_210BR[i].querySelector('.cls-33')) {
            if (active_color_line == 0) {
              out_img_210BR[i].querySelector('.cls-33').style.fill = '#d6d6d6';
            } else {
              for (let y = 0; y < out_img_210BR[i].querySelectorAll('.cls-33').length; y++) {
                out_img_210BR[i].querySelectorAll('.cls-33')[y].style.fill = active_color;
              }
            }
          }
        } else {
          out_img_210BR[i].classList.remove('active');
        }
      }
      break;
    }
    case 'Slider 230': {
      for (let i = 0; i < out_img_230.length; i++) {
        if (out_img_230[i].getAttribute('line') == active_color_line) {
          out_img_230[i].classList.add('active');
          if (out_img_230[i].querySelector('.cls-33')) {
            if (active_color_line == 0) {
              out_img_230[i].querySelector('.cls-33').style.fill = '#d6d6d6';
            } else {
              for (let y = 0; y < out_img_230[i].querySelectorAll('.cls-33').length; y++) {
                out_img_230[i].querySelectorAll('.cls-33')[y].style.fill = active_color;
              }
            }
          }
        } else {
          out_img_230[i].classList.remove('active');
        }
      }
      break;
    }
    case 'Slider 42': {
      for (let i = 0; i < out_img_42.length; i++) {
        if (out_img_42[i].getAttribute('line') == active_color_line) {
          out_img_42[i].classList.add('active');
          if (out_img_42[i].querySelector('.cls-33')) {
            if (active_color_line == 0) {
              out_img_42[i].querySelector('.cls-33').style.fill = '#d6d6d6';
            } else {
              for (let y = 0; y < out_img_42[i].querySelectorAll('.cls-33').length; y++) {
                out_img_42[i].querySelectorAll('.cls-33')[y].style.fill = active_color;
              }
            }
          }
        } else {
          out_img_42[i].classList.remove('active');
        }
      }
      break;
    }
  }
};
