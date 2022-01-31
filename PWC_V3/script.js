// SALVAR VALOR DA PESQUISA AO CLICAR NO BOTÃO DE PESQUISAR

function save(){
    var resultado = document.getElementById('pesquisa').value;
    var valuePesquisa2 = resultado.toLowerCase();
    sessionStorage.setItem("resultado", valuePesquisa2);
    location.href = "./resultado.html";
    }

// BUSCAR O RESULTADO DA PESQUISA EM FORMATO DE JSON E CONSTRUIR TABELA

var resultado = sessionStorage.getItem("resultado");
var URL = "https://api.coingecko.com/api/v3/coins/" + resultado
console.log(URL)

$.ajax({
    url: `${URL}`,
    type: 'GET', 
    dataType: 'json',  
    success: function(data) {  
        console.log(data);
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].market_cap_rank + '</td><td>' + data[i].symbol + '</td><td>' + data[i].name + '</td></tr>');
            $('#leaderboard').append(row);
        }           
            },
         

    error: function(xhr, textStatus, errorThrown) {  
                console.log('Não existe nenhuma opção com este ID. Por favor insira um ID válido');  
                
            }  
        })
      

// FINALIZAR PESQUISA COM TECLA "ENTER"

var input = document.getElementById("pesquisa")

input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
              event.preventDefault();
              document.getElementById("myBtn").click();
            }
        })


//FUNÇÃO DE FILTRAR PELO NOME


function search_coin() { 
    
    let input = document.getElementById('searchname').value 
    input=input.toLowerCase(); 
    console.log(input)
    let x = document.getElementsByClassName('cryptocurrencies'); 
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none";
             }
        else { 
            x[i].style.display="name"; 
            input=""
            } }
        }