//cARREGAR TOP 100

var baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"

$.ajax({
    url: `${baseURL}`,
    type: 'GET', 
    dataType: 'json',  
    success: function(data) {  
        console.log(data);
        for (var i=0; i<data.length; i++) {
            var row = $('<tr class="cryptocurrencies" ><td>' + data[i].market_cap_rank + '</td><td> <img src=' + data[i].image + ' style="width:50px; heigth:50px"></td><td>' + data[i].name + '</td><td class="coin"><button type="submit" class="btn btn-light" onclick=favoritos()><i class="far fa-heart"></i></button></td></tr>');
            $('#leaderboard').append(row);
        }           
            },
         

    error: function(xhr, textStatus, errorThrown) {  
                console.log('Não existe nenhuma opção com este ID. Por favor insira um ID válido');  
                
            }  
        })


function favoritos(){
    var favoritos= document.getElementsByTagName('tr').value
    console.log(favoritos)
    }


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
            } }
        }

// SALVAR VALOR DA PESQUISA AO CLICAR NO BOTÃO DE PESQUISAR

function save(){
    var resultado = document.getElementById('pesquisa').value;
    var valuePesquisa2 = resultado.toLowerCase();
    sessionStorage.setItem("resultado", valuePesquisa2);
    location.href = "./resultado.html";
 
    }