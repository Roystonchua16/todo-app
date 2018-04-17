//loginpage//
function RegisterBtn() {
    document.getElementById("loginform").style.visibility = "hidden";
}

//homepage//
document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById('myInput').value;
    if (value) addItem(value);
  });

function addItem(item){
    var item = document.createElement('li');
    item.innerHTML = text;

    var buttons = docuent.createElement('div');
    buttons.classList.add('buttons');
}  
 