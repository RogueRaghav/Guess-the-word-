function adduser(){
    p1name=document.getElementById("p1name").value;
    p2name=document.getElementById("p2name").value;
    localStorage.setItem("p1name",p1name);
    localStorage.setItem("p2name",p2name);
    window.location="game_page.html";
    

}

