//loginpage//
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

function addItem(){
    let value = $('#myInput').val().trim();
    if (value !== undefined && value !== "") {
        // var item = document.createElement('li');
        item.innerText = value;

        // var buttons = document.createElement('div');
        // buttons.classList.add('buttons');

        $("#task_list").append(item);
        $("#myInput").val("");
    }
}