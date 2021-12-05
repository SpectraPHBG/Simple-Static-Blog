$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $("#wrapper").addClass("flexcontainer1")
        $("#wrapper").removeClass("flexcontainer")
        $("#logo").addClass("logo1")
        $("#logo").removeClass("logo")
        $("#icon").addClass("icon1")
        $("#icon").removeClass("icon")
      }
      else{
        $("#wrapper").removeClass("flexcontainer1")
        $("#wrapper").addClass("flexcontainer")
        $("#logo").removeClass("logo1")
        $("#logo").addClass("logo")
        $("#icon").addClass("icon")
        $("#icon").removeClass("icon1")
      }
    });
  });
  function pageAppear() {
    document.getElementsByTagName("main")[0].style.display = "flex";
    document.getElementsByClassName("bootstrap-iso")[0].style.display = "inline";
  }
