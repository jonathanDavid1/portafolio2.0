let check = document.querySelector(".check");

check.addEventListener("click", language);

function language(){
    let id = check.checked;
    if (id){
        location.href = "assets/es/index.html";
    }else{
        location.href= "/index.html"
    }
}