$(function () {
  // 顯示gotop
  $(".anchor").hide(); // 20230210 新增
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".anchor").fadeIn(300);
    } else {
      $(".anchor").fadeOut(300);
    }
  });

  // right nav
  // go top
  // 向上捲動
  $(".goTop").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".goOrder").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".go-reserve2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top }, 1000);
  });

  // right nav
  $(".btn-app").hover(
    function () {
      $(this).attr("src", "./image/btn_App_Store_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_App_Store.png");
    }
  );
  $(".btn-google").hover(
    function () {
      $(this).attr("src", "./image/btn_Google_Play_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_Google_Play.png");
    }
  );
  $(".btn-inquiry").hover(
    function () {
      $(this).attr("src", "./image/btn_Inquire_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_Inquire.png");
    }
  );
  $(".btn-fb").hover(
    function () {
      $(this).attr("src", "./image/btn_FB_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_FB.png");
    }
  );
  $(".btn-ig").hover(
    function () {
      $(this).attr("src", "./image/btn_IG_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_IG.png");
    }
  );
});

// 翻轉禮物
$(document).ready(function () {
  $(".gift01").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift02").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift03").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift04").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift05").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift06").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift07").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
});

// 壁紙的所有點擊事件
document.addEventListener("DOMContentLoaded", function () {
  var events = [
    "event01",
    "event02",
    "event03",
    "event04",
    "event05",
    "event06",
  ];

  var step1 = document.querySelector(".step1");
  var step2 = document.querySelector(".step2");
  var step3 = document.querySelector(".step3");
  var closeWallpaperBtn = document.querySelector(".colse-wallpaper");
  var openStep2Btn = document.querySelector(".open-step2");
  var openStep1Btn = document.querySelector(".open-step1");
  var openStep3Btn = document.querySelector(".open-step3");
  var dragContainer = document.querySelector("#drag-container");
  var wallpaperContent = document.querySelector(".wallpaper-content");

  // 點擊事件01
  for (var i = 0; i < events.length; i++) {
    (function (eventId) {
      var event = document.getElementById(events[eventId]);
      event.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止預設行為
        var wallpaperContent = document.querySelector(".wallpaper-content");
        var eventPapper = document.getElementById(events[eventId] + "-papper");

        wallpaperContent.style.display = "flex";
        eventPapper.style.display = "block";
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        dragContainer.style.display = "none";

        // 修改 .section2 的 margin-bottom 為 13rem
        var section2 = document.querySelector(".section2");
        section2.style.marginBottom = "13rem";
      });
    })(i);
  }

  // 關閉所有事件
  closeWallpaperBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    var wallpaperContent = document.querySelector(".wallpaper-content");

    wallpaperContent.style.display = "none";
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    dragContainer.style.display = "block";

    // 隱藏之前開啟的事件壁紙
    for (var i = 0; i < events.length; i++) {
      var eventPapper = document.getElementById(events[i] + "-papper");
      eventPapper.style.display = "none";
    }
    // 修改 .section2 的 margin-bottom 回原來的值 (9rem)
    var section2 = document.querySelector(".section2");
    section2.style.marginBottom = "9rem";
  });

  // 開啟步驟2，關閉步驟1
  openStep2Btn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    step1.style.display = "none";
    step2.style.display = "block";
    step3.style.display = "none";
  });

  // 開啟步驟1，關閉步驟2
  openStep1Btn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
  });

  // 開啟步驟3，關閉步驟2
  openStep3Btn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "block";
  });
});

// menu-icon 動畫
$(".menu-icon").bind("click", function () {
  $(this).toggleClass("active");
  $(this).find("div").removeClass("no-animation");
});

$(function () {
  // ham icon 漢堡選單
  $(".menu-icon").click(function (e) {
    e.preventDefault();
    $(".dropdown").toggleClass("active");
  });

  $(".dropdown li a").click(function (e) {
    $(".dropdown").toggleClass("active");
  });

  // $("body").click(function (e) {
  //   $(".dropdown").removeClass("active");
  // });
});

$("body").click(function (e) {
  var container = $(".dropdown");
  var btn = $(".menu-icon");
  // 判斷點擊的地方不是DIV或按鈕
  if (
    !container.is(e.target) &&
    !container.has(e.target).length &&
    !btn.is(e.target) &&
    !btn.has(e.target).length
  ) {
    container.removeClass("active");
    $(".menu-icon").removeClass("active");
  }
});
