const objPeople = [
    {
        username: "Mikael",
        password: "bob"
    }
]

function getInfo(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    for (i = 0; i < objPeople.length; i++){
        if(username == objPeople [i].username && password == objPeople [i].password){
            console.log(username + " on nyt kirjautunut sisään!")
            window.location.href = "ota-yhteyttä/yhteys.html";
            return
        }
    }
    console.log("Väärä käyttäjätunnus tai salasana!")
    //console.log("olet nyt kirjautunut sisään! " + username + password)
}