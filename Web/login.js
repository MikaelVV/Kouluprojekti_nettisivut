//Luodaan valmiit käyttäjätunnukset.
const objPeople = [
    {
        username: "VAMK",
        password: "1234"
    }
]

function getInfo(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password2").value

    for (i = 0; i < objPeople.length; i++){
        if(username == objPeople [i].username && password == objPeople [i].password){
            console.log(username + " on nyt kirjautunut sisään!")
            window.location.href = "tilaukset/orderlist.html";
            return
        }else{
            alert("Väärä käyttäjätunnus tai salasana!")
        }
    }
}

function showPassword(){
    const x = document.getElementById("password2");
    if (x.type === "password"){
        x.type = "text";
        
    }else{
        x.type = "password";
    }
}