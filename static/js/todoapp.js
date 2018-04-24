//LOGIN PAGE
function toggle(type) {
  // $("#loginform").css("visibility","hidden");
  if (type === "login") {
    // login
    $(".hide").css("display", "none");
    $(".clearbtn.login").addClass("active");
    $(".clearbtn.register").removeClass("active");
  } else {
    // register
    $(".hide").css("display", "block");
    $(".clearbtn.register").addClass("active");
    $(".clearbtn.login").removeClass("active");
  }
}

function open_terms() {
  alert("Terms & Conditions");
}

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

//HOME PAGE
function addItem() {
  var input = document.getElementById("InputBox").value;
  var b = document.getElementById("task_list");
  var li = document.createElement("li");
  li.innerText = input;

  if (task_list.childElementCount == 0) {
    task_list.appendChild(li); // insert if ul children countis 0, otherwise insert before
  } else {
    task_list.insertBefore(li, task_list.firstChild);
  }

  //clear InputBox once task is added
  document.getElementById("InputBox").value = "";

  li.onclick = function() {
    this.parentNode.removeChild(this);
  };
}
var input = document.getElementById("InputBox");
// To trigger click upon "Enter"
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 = "Enter"
  if (event.keyCode === 13) {
    document.getElementById("addBtn").click();
  }
});

function clearAll() {
  var list = document.getElementById("task_list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
