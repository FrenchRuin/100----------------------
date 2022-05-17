$(function () {

  const $container = $('#slides > .screen > .slides-container');
  const $slides = $container.children('li')

  const $btnNext = $('#slides > a.next')
  const $btnPrev = $('#slides > a.prev')

  let nowIdx = 2; //최초 3번째 슬라이드에 on이 붙어있게 설계했으므로..

  let lock = false;

  //다음버튼
  $btnNext.on('click', function (evt) {
    evt.preventDefault();

    if (lock === false) {
      lock = true;

      if (nowIdx < 4) {
        nowIdx++;
      } else {
        nowIdx = 0;
      }

      $slides.removeClass('on').eq(nowIdx).addClass('on')
      $container.stop().animate({ left: -480 }, function () {
        $('#slides > .screen > .slides-container > li').first().appendTo($container);
        $container.css({
          left: -240
        })
        lock = false;
      })
    }


  })
  $btnPrev.on('click', function (evt) {
    evt.preventDefault();
    if (lock === false) {
      lock = true;
      if (nowIdx > 0) {
        nowIdx--;
      } else {
        nowIdx = 4;
      }

      $slides.removeClass('on').eq(nowIdx).addClass('on')
      $container.stop().animate({ left: 0 }, function () {
        $('#slides > .screen > .slides-container > li').last().prependTo($container);
        $container.css({
          left: -240
        })
        lock = false;
      })
    }

  })


})