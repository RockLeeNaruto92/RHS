var dispatcher = new WebSocketRails(window.location.host + "/websocket");

initState();
bindEvents();
setListener();

function initState(){
  $("#message-input-field").prop('disabled', true);
}

function bindEvents(){
  dispatcher.bind("client_connected", function(response){});

  dispatcher.bind("client_disconnected", function(response){});

  dispatcher.bind("new_message", function(response){
    processNewMessage(response);
  });
}

function setListener(){
  $("#message-input-field").keyup(function(event){
    var message = $("#message-input-field").val();
    if (event.keyCode == 13 && message != ""){
      dispatcher.trigger("new_message", message);
      $("#message-input-field").val("");
    }
  });

  $("#chat-dialog-btn").click(function(){
    if ($("#chat-dialog").css("display") == "none"){
      $("#chat-dialog-btn-text").html("Show chat dialog");
      $('#chat-dialog-btn-img').attr("src",
        "/assets/up-arrow-d80c290488af2b08ec5799b4ca7ae306ea57ecc544629b07a507cf83866d7a7f.png");
    } else {
      $("#chat-dialog-btn-text").html("Hide chat dialog");
      $('#chat-dialog-btn-img').attr("src",
        "assets/down-arrow-16ecbad9e60a0bdd6a4baef8364ecd053d1451e31ffc3b34160d25000c1e9633.png");
    }
    $("#chat-dialog").toggle(500);
  });
}

function processNewMessage(response){
  if (response["is_signed_in"] == true)
    $("#message-input-field").prop('disabled', false);
  else
    $("#message-input-field").val("Login to chat");

  $("#message-history-chat").html($("#message-history-chat").html()
    + formatMessage(response));
}

function formatMessage(response){
  console.log(response["message"]);
  var user = response["user"];
  var message = response["message"];

  if (user != null)
    return "<br><div class=\"col-md-12\">"
      + "<span class=\"label label-default chat-user-name\">"
      + user + "</span>"
      + "<span>" + message + "</span></div>";
  else
    return "";
}
