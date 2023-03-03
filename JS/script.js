//Change img
function changeimg(anything){
    document.querySelector(".img-user-perfil").src= anything;
    document.querySelector(".img-user").src = anything;
}



//change text
const nameuser=document.querySelector(".name-user");
function changetext(text){
    nameuser.innerHTML= text;
}


