$(document).ready(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
    $("#b1").hide();
    $("#sidebutton1").mouseenter(function(){
      $("#b1").show();
    });
    $("#sidebutton1").mouseleave(function(){
      $("#b1").hide();
    });
    $("#b2").hide();
    $("#sidebutton2").mouseenter(function(){
      $("#b2").show();
    });
    $("#sidebutton2").mouseleave(function(){
      $("#b2").hide();
    });
    $("#b3").hide();
    $("#sidebutton3").mouseenter(function(){
      $("#b3").show();
    });
    $("#sidebutton3").mouseleave(function(){
      $("#b3").hide();
    });
    $("#b4").hide();
    $("#sidebutton4").mouseenter(function(){
      $("#b4").show();
    });
    $("#sidebutton4").mouseleave(function(){
      $("#b4").hide();
    });
  });
  function menuAppear() {
    document.getElementsByClassName("mobilenav")[0].style.height = "516px";
  }
  function menuHide() {
    document.getElementsByClassName("mobilenav")[0].style.height = "0px";
  }
