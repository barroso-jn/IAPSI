//LÊ O CONTEUDO DA CAIXA DE PESQUISA E REDIRECIONA PARA A PÁGINA DE RESULTADOS

function save(){
    var resultado = document.getElementById('pesquisa').value;
    var valuePesquisa2 = resultado.toLowerCase();
    localStorage.setItem("resultado", valuePesquisa2);
    console.log(resultado)
    
    location.href = "./resultado.html";
    }

// VAI BUSCAR A URL DA MOEDA PRETENDIDA E CONSTROI A TABELA DE PESQUISA (NÃO FUNCIONAL)

var resultado = localStorage.getItem("resultado");
console.log(resultado)
var URL2 = "https://api.coingecko.com/api/v3/coins/" + resultado
console.log(URL2)

fetch(`${URL2}`, {
    method: "GET",
    headers:{
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
// }).then((response)=> {
//     if(response.ok){
//         response.json().then((json) => {
//             console.log(json)

//             let coinsData = json
//             if(coinsData.length > 0) {
//                 var cryptoCoins = ""
//             }

//             Loop Starts
//             coinsData.forEach(coin => {
//                 cryptoCoins += "<tr>";
//                 cryptoCoins += `<td> ${coin.market_cap_rank}</td>`;
//                 cryptoCoins += `<td><img src= ${coin.image} style="width:50px; height:50px" ></td>`;

//                 // -------------- FAVORITOS ----------------
                
//                 // carrega todos os IDs guardados nos favoritos
//                 var fav = [];
//                 if(localStorage.getItem("fav") != null) fav = JSON.parse(localStorage.getItem("fav"));
                
//                 // se o ID existe nos favoritos, estrela preenchida
//                 if(fav.includes("" + coin.id))
//                     cryptoCoins += `<td> ${coin.name}&nbsp&nbsp<i class="fav-btn fa-star fas" data-id="${coin.id}"></i></td>`;
//                 // senão, estrela não preenchida
//                 else
//                     cryptoCoins += `<td> ${coin.name}&nbsp&nbsp<i class="fav-btn fa-star far" data-id="${coin.id}"></i></td>`;

//                 // -----------------------------------------

                             
//             })
//             document.getElementById("cryptocurrencies").innerHTML = cryptoCoins;
//         })
//     }
}).catch((error) =>{
    console.log(error)
})
    
// FINALIZAR PESQUISA COM TECLA "ENTER"

var input = document.getElementById("pesquisa")

input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
              event.preventDefault();
              document.getElementById("btn-search").click();
            }
        })