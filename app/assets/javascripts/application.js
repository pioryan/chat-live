// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require offcanvas
//= require ie10-viewport-bug-workaround


jQuery(document).ready(function() {
  $("#conversation").scrollTop($("#conversation").prop("scrollHeight"));

  var source = new EventSource('/messages/events'),
      message;
  source.addEventListener('messages.create', function (e) {
    message = JSON.parse(e.data);
    //$("#messages").append($('<li>').text(message.name + ': ' + message.content));
    $("#messages").append($('<div class="col-xs-10 col-sm-10 bubble-right">').text(message.content));
    $("#messages").append($('<div class="col-xs-2 col-sm-2">').text(message.name));
    $("#conversation").scrollTop($("#conversation").prop("scrollHeight"));

  });

  $("body").on("ajax:success", "#message_content", function(){
      alert("hello")
  });
});
