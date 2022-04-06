function logar(){

    const login = document.getElementById("login").value;

    const senha = document.getElementById("senha").value;
    
    if(login == "admin" && senha == "admin"){
        alert("Logado");
        location.href = "home.html";
    }else{
        alert("login e/ou senhas incorretos");
    }
}


