const login = document.querySelector(".login");
const senha = document.querySelector(".senha");
const mostrar = document.querySelector(".mostrar");
const save = document.querySelector(".save");
var arrayUsuario = [];
var arraySenha = [];
var nome = 0;


    // MOSTRAR SENHA

    mostrar.addEventListener("click",()=>{
        if(senha.type === 'password'){
            senha.type = 'text'
        }
        else if(senha.type === 'text'){
            senha.type = "password"
        }

        console.log(senha.type)
        
    })

    // VERIFICAÇÃO DE LOGIN E SENHA

function verificarDados(nome,senha){
    if(arrayUsuario.includes(nome) && arraySenha.includes(senha)){
        for (let i = 0; i < arrayUsuario.length; i++) {
            if (arrayUsuario[i] === nome && arraySenha[i] === senha) {
              console.log('Usuário e senha estão no mesmo índice');
              break;
            }
          }
    }
}

    // ADICIONAR LOGIN E SENHA

    save.addEventListener("click",()=>{
        var dados = {
            usuario: login.value,
            senha: senha.value
        }

        if(arrayUsuario.includes(dados.usuario)){
            console.log("ja existe esse usuario")
        }else{
            localStorage.setItem("usuario", dados.usuario)
            localStorage.setItem("senha", dados.senha)
            arrayUsuario.push(localStorage.getItem("usuario"))
            arraySenha.push(localStorage.getItem("senha"))
            
        }



        console.log(arrayUsuario);
        console.log(arraySenha);

    })

