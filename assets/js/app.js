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
/* Show Pop Up # 1 */
$(document).ready(function () {
  $(".show-popup-1").on("click", function () {
    $(".pu-1").css("display", "block");
    $(".-pop-up-1").animate({ opacity: "1", "margin-top": "0px" }, 150);
  });
});

/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */

/* >>>>>>>>> STEP # 1 <<<<<<<< */
$(document).ready(function () {
  $(".datepicker").datepicker({
    autoclose: true,
    format: "dd-mm-yyyy",
    todayHighlight: true,
    maxViewMode: "months",
    orientation: "bottom left",
  });

  $(".datepicker").on("changeDate", function () {
    if ($(".available-timeline").hasClass("active")) {
    } else {
      $(".available-timeline").addClass("active");
    }
  });

  /* >>>>>>>>> STEP # 2 <<<<<<<< */
  $(".limited-time").on("click", function () {
    $(".pu-1").css("display", "none");
    $(".pu-3").css("display", "block");
  });
  $(".high-time").on("click", function () {
    $(".pu-1").css("display", "none");
    $(".pu-3").css("display", "block");
  });

  /* >>>>>>>>> STEP # 3 <<<<<<<< */
  $(".pu-3 .continue").on("click", function () {
    $(".pu-3").css("display", "none");
    $(".pu-4").css("display", "block");
  });

  /* >>>>>>>>> STEP # 4 <<<<<<<< */
  $(".pu-4 .continue").on("click", function () {
    $(".pu-4").css("display", "none");
    $(".pu-5").css("display", "block");
  });

  /* >>>>>>>>> STEP # 5 <<<<<<<< */
  $(".pu-5 .continue").on("click", function () {
    $(".pu-5").css("display", "none");
    $(".pu-6").css("display", "block");
  });

  /* >>>>>>>>> STEP # 6 <<<<<<<< */
  $(".pu-6 .continue").on("click", function () {
    $(".pu-6").css("display", "none");
    $(".pu-7").css("display", "block");
  });

  /* >>>>>>>>> STEP # 7 <<<<<<<< */
  $(".pu-7 .continue").on("click", function () {
    $(".pu-7").css("display", "none");
    $(".pu-9").css("display", "block");
  });

  /* >>>>>>>>> STEP # 8 <<<<<<<< */
  $(".pu-9 .continue").on("click", function () {
    $(".pu-9").css("display", "none");
    $(".pu-10").css("display", "block");
  });

  /* >>>>>>>>> STEP # Last <<<<<<<< */
  $(".pu-10 .continue").on("click", function () {
    $(".pu-10").css("display", "none");
    $(".pu-11").css("display", "block");
  });
});

jQuery(document).ready(function () {
  jQuery(".checkbox").change(function () {
    if ($(this).prop("checked")) {
      alert("Do you want to cheched?"); //checked
    } else {
      alert("Do you want to un-cheched?"); //not checked
    }
  });
});
