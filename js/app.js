/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>> Central Tickets LTD <<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */

/* Close Pop Up's */
$(document).ready(function () {
  $(".close-popup").on("click", function () {
    $(".-pop-up-bg").css("display", "none");
  });
});

/* Close Request Change Pop Up when click outside the target DIV */
$(document).mouseup(function (e) {
  var container = $(".-pop-up");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".-pop-up-bg").css("display", "none");
  }
});

/* Show Pop Up's */
/* Show Pop Up # 3 */
$(document).ready(function () {
  $(".show-popup-3").on("click", function () {
    $(".pu-3").css("display", "block");
  });
});

/* Show Pop Up # 4 */
$(document).ready(function () {
  $(".show-popup-4").on("click", function () {
    $(".pu-4").css("display", "block");
  });
});

/* Show Pop Up # 5 */
$(document).ready(function () {
  $(".show-popup-5").on("click", function () {
    $(".pu-5").css("display", "block");
  });
});

/* Show Pop Up # 6 */
$(document).ready(function () {
  $(".show-popup-6").on("click", function () {
    $(".pu-6").css("display", "block");
  });
});

/* Show Pop Up # 7 */
$(document).ready(function () {
  $(".show-popup-7").on("click", function () {
    $(".pu-7").css("display", "block");
  });
});

/* Show Pop Up # 8 */
$(document).ready(function () {
  $(".show-popup-8").on("click", function () {
    $(".pu-9").css("display", "block");
  });
});

/* Show Pop Up # 9 */
$(document).ready(function () {
  $(".show-popup-9").on("click", function () {
    $(".pu-10").css("display", "block");
  });
});

/* Show Pop Up # 10 */
$(document).ready(function () {
  $(".show-popup-10").on("click", function () {
    $(".pu-11").css("display", "block");
  });
});

/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
