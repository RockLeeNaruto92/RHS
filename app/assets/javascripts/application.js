// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require googlemapapi
//= require bootstrap
//= require fancybox
//= require gethost
//= require websocket_rails/main

$(document).ready(function(){
  $("#myModalName").html($("#new_address").data("name"));
  var directional = $("#new_address").data("directional");
  switch(directional){
    case "new_address":
      getElementById("new_address_view").style.display="block";
  }
});

function onClick(){
  $("body").on("hidden.bs.modal", ".modal", function () {
    $(this).removeData("bs.modal");
  });
}


