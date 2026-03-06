//loading
$(function () {
  var loading = $("#js-loading");
  $(window).on("load", function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
  });
  setTimeout(function () {
    loading.fadeOut("3000");
  }, 8000);
  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
  });

  //audio
  var audio = $("#js-audio").get(0);
  var isPlaying = false;
  audio.volume = 0.5;
  $("#js-audio-play").click(function () {
    if (isPlaying) {
      audio.pause();
      $(".audioSwitch").removeClass("on");
      $(".audioSwitch-text").html("SOUND OFF");
    } else {
      audio.play();
      $(".audioSwitch").addClass("on");
      $(".audioSwitch-text").html("SOUND ON");
    }
  });
  audio.onplaying = function () {
    isPlaying = true;
  };
  audio.onpause = function () {
    isPlaying = false;
  };
});

//スムーススクロール
$('a[href^="#"]').on("click", function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing",
  );
  return false;
});
