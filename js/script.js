$(document).ready(function () {
  console.log("제이쿼리 로드 완료");

  $(".kikki").on("click", function () {
    console.log("work");
    $(".dsky").removeClass("unclicked");
    $(".day").removeClass("unclicked");
    $(".night").removeClass("unclicked");
    $(".disl").removeClass("unclicked");
    $(".dsea").removeClass("unclicked");
    $(".nsky2").removeClass("unclicked");
    $(".nsea").removeClass("unclicked");
    $(".nisl").removeClass("unclicked");
    $(".nisl2").removeClass("unclicked");
    $(".letters").removeClass("unclicked");

    $(".dsky").addClass("clicked");
    $(".day").addClass("clicked");
    $(".night").addClass("clicked");
    $(".disl").addClass("clicked");
    $(".dsea").addClass("clicked");
    $(".nsky2").addClass("clicked");
    $(".nsea").addClass("clicked");
    $(".nisl").addClass("clicked");
    $(".nisl2").addClass("clicked");
    $(".letters").addClass("clicked");
  });

  // $(".nkikki").on("click", function () {
  //   console.log("worked");
  //   $(".dsky").addClass("unclicked");
  //   $(".day").addClass("unclicked");
  //   $(".night").addClass("unclicked");
  //   $(".disl").addClass("unclicked");
  //   $(".dsea").addClass("unclicked");
  //   $(".nsky2").addClass("unclicked");
  //   $(".nsea").addClass("unclicked");
  //   $(".nisl").addClass("unclicked");
  //   $(".nisl2").addClass("unclicked");
  //   $(".letters").addClass("unclicked");
  // });

  // var button_clicked = false;

  // $(".kikki").on("click", function () {
  //   if (button_clicked == false) {
  //     console.log("work");
  //     $(".dsky").removeClass("unclicked");
  //     $(".day").removeClass("unclicked");
  //     $(".night").removeClass("unclicked");
  //     $(".disl").removeClass("unclicked");
  //     $(".dsea").removeClass("unclicked");
  //     $(".nsky2").removeClass("unclicked");
  //     $(".nsea").removeClass("unclicked");
  //     $(".nisl").removeClass("unclicked");
  //     $(".nisl2").removeClass("unclicked");
  //     $(".letters").removeClass("unclicked");

  //     $(".dsky").addClass("clicked");
  //     $(".day").addClass("clicked");
  //     $(".night").addClass("clicked");
  //     $(".disl").addClass("clicked");
  //     $(".dsea").addClass("clicked");
  //     $(".nsky2").addClass("clicked");
  //     $(".nsea").addClass("clicked");
  //     $(".nisl").addClass("clicked");
  //     $(".nisl2").addClass("clicked");
  //     $(".letters").addClass("clicked");

  //     button_clicked = true;
  //   } else {
  //     console.log("work");
  //     $(".dsky").removeClass("clicked");
  //     $(".day").removeClass("clicked");
  //     $(".night").removeClass("clicked");
  //     $(".disl").removeClass("clicked");
  //     $(".dsea").removeClass("clicked");
  //     $(".nsky2").removeClass("clicked");
  //     $(".nsea").removeClass("clicked");
  //     $(".nisl").removeClass("clicked");
  //     $(".nisl2").removeClass("clicked");
  //     $(".letters").removeClass("clicked");
  //     button_clicked = false;
  //   }
  // });

  // $(".nkikki").on("click", function () {
  //   if (button_clicked == false) {
  //     console.log("worked");
  //     $(".dsky").addClass("unclicked");
  //     $(".day").addClass("unclicked");
  //     $(".night").addClass("unclicked");
  //     $(".disl").addClass("unclicked");
  //     $(".dsea").addClass("unclicked");
  //     $(".nsky2").addClass("unclicked");
  //     $(".nsea").addClass("unclicked");
  //     $(".nisl").addClass("unclicked");
  //     $(".nisl2").addClass("unclicked");
  //     $(".letters").addClass("unclicked");
  //     $(".dsky").removeClass("clicked");
  //     $(".day").removeClass("clicked");
  //     $(".night").removeClass("clicked");
  //     $(".disl").removeClass("clicked");
  //     $(".dsea").removeClass("clicked");
  //     $(".nsky2").removeClass("clicked");
  //     $(".nsea").removeClass("clicked");
  //     $(".nisl").removeClass("clicked");
  //     $(".nisl2").removeClass("clicked");
  //     $(".letters").removeClass("clicked");
  //     button_clicked = true;
  //   } else {
  //     console.log("work");
  //     $(".dsky").removeClass("unclicked");
  //     $(".day").removeClass("unclicked");
  //     $(".night").removeClass("unclicked");
  //     $(".disl").removeClass("unclicked");
  //     $(".dsea").removeClass("unclicked");
  //     $(".nsky2").removeClass("unclicked");
  //     $(".nsea").removeClass("unclicked");
  //     $(".nisl").removeClass("unclicked");
  //     $(".nisl2").removeClass("unclicked");
  //     $(".letters").removeClass("unclicked");
  //     button_clicked = false;
  //   }
  // });
});
