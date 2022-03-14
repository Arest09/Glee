$(function () {

  /* shop */
  let btn = document.querySelector('.shop__btns')
  let btnGrid = document.querySelector('.shop__btn--grid')
  let btnList = document.querySelector('.shop__btn--list')
  let prod = document.querySelector('.shop__items')
  let item =Array.from(document.querySelectorAll('.product__item'))
  
  btn.addEventListener('click', (event) => {
    if (event.target.closest('.shop__btn')) {

      for (let i of document.querySelectorAll('.shop__btn')) {
        i.classList.remove('active');
      }
      event.target.closest('.shop__btn').classList.add('active')
      console.log(event.target)
    }
    if (event.target.closest('.shop__btn--list')) {
      prod.classList.add('shop__items--list') 
    }
    if (event.target.closest('.shop__btn--grid')) {
      prod.classList.remove('shop__items--list')

    }

  })

  /*  */
  $(".star").rateYo({
    starWidth: "10px",
    readOnly: true,
  });

  $('.shop-price__input').ionRangeSlider({

    onStart: function (data) {
      $('.shop-price__from').text(data.from);
      $('.shop-price__to').text(data.to);
    },
    onChange: function (data) {
      document.querySelector('.shop-price__from').textContent = data.from
      document.querySelector('.shop-price__to').textContent = data.to
    },
  })


  $('.slider').slick({
    dots: true,
    arrows: false,
  });
  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__bottom-items');




})