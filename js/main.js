$(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $(".filter__btn").on("click", function () {
    $(".filter__title").removeClass("filter__title--active");
    $(".filter__content").removeClass("filter__content--active");
    $(".filter__column").slideUp("slow");
    $(".filter__form").slideUp("slow");
    $(this).toggleClass("filter__btn--active");
    if ($(this).hasClass("filter__btn--active")) {
      $(".filter__content:not(:last-child)").slideDown("slow");
    } else {
      $(".filter__content:not(:last-child)").slideUp("slow");
    }
  });

  $(".filter__view-btn").on("click", function () {
    $(".filter__view-btn").removeClass("filter__view-btn--active");
    $(this).trigger("blur");
    $(this).addClass("filter__view-btn--active");
  });

  $(".filter__view-btn--list").on("click", function () {
    $(".shop__content").addClass("list");
  });

  $(".filter__view-btn--grid").on("click", function () {
    $(".shop__content").removeClass("list");
  });

  $(".footer__open").on("click", function () {
    if ($(".footer__open").hasClass("footer__open--active")) {
      $(".footer__info--out").slideUp("slow");
      $(".footer__open").removeClass("footer__open--active");
      $(".footer__wrap").removeClass("footer__open--active");
      $(".footer__column").removeClass("footer__column--active");
    } else {
      $(this).addClass("footer__open--active").closest(".footer__column").addClass("footer__column--active");
      $(".footer__column--active").find(".footer__info--out").slideDown("slow");
    }
    // $('.footer__info--out').slideUp('slow');
    // $('.footer__open').removeClass('footer__open--active');
    // $('.footer__wrap').removeClass('footer__open--active');
    // $('.footer__column').removeClass('footer__column--active');
    // $(this).addClass('footer__open--active').closest('.footer__column').addClass('footer__column--active');
    // $('.footer__column--active').find('.footer__info--out').slideDown('slow');
  });

  $(".footer__open").on("blur", function () {
    $(".footer__info--out").slideUp("slow");
    $(".footer__open").removeClass("footer__open--active");
    $(".footer__wrap").removeClass("footer__open--active");
    $(".footer__column").removeClass("footer__column--active");
  });

  $(".product__items--big").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    asNavFor: ".product__items--thumb",
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $(".product__items--thumb").slick({
    initialSlide: 1,
    // draggable: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    variableWidth: false,
    slidesToShow: 3,
    asNavFor: ".product__items--big",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  let config = {
    controls: {
      scope: "local",
    },
  };

  let containerEl1 = document.querySelector('[data-ref="container-popular"]');
  let mixer1;
  if (containerEl1) {
    mixer1 = mixitup(containerEl1);
  }

  let containerEl2 = document.querySelector('[data-ref="container-design"]');
  let mixer2;
  if (containerEl2) {
    mixer2 = mixitup(containerEl2, config);
  }

  let containerEl3 = document.querySelector('[data-ref="container-filter"]');
  let mixer3;
  if (containerEl3) {
    mixer3 = mixitup(containerEl3, config);
  }

  $(".filter__sort").styler();
  console.log(123);
});
