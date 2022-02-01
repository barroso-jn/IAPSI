// CARREGA O TOP 100 ATUAL DE CRIPTOMOEDAS

var baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"

fetch(`${baseURL}`, {
    method: "GET",
    headers:{
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then((response)=> {
    if(response.ok){
        response.json().then((json) => {
            console.log(json)

            let coinsData = json
            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            //Loop Starts
            coinsData.forEach(coin => {
                cryptoCoins += `<tr class= "filter">`;
                cryptoCoins += `<td> ${coin.market_cap_rank}</td>`;
                cryptoCoins += `<td><img src= ${coin.image} style="width:50px; height:50px" ></td>`;

                // -------------- FAVORITOS ----------------
                
                // CARREGA TODOS OS IDS GUARDADOS NOS FAVORITOS
                var fav = [];
                if(localStorage.getItem("fav") != null) fav = JSON.parse(localStorage.getItem("fav"));
                
                // SE O ID EXISTE NOS FAVORITOS -> ESTRELA PREENCHIDA
                if(fav.includes("" + coin.id))
                    cryptoCoins += `<td> ${coin.name}&nbsp&nbsp<i class="fav-btn fa-star fas" data-id="${coin.id}"></i></td>`;
                // SENÃO -> ESTRELA NÃO PREENCHIDA
                else
                    cryptoCoins += `<td> ${coin.name}&nbsp&nbsp<i class="fav-btn fa-star far" data-id="${coin.id}"></i></td>`;

                // -----------------------------------------
                cryptoCoins += `<tr class= "filter">`;
                             
            })
            document.getElementById("cryptocurrencies").innerHTML = cryptoCoins;
        })
    }
}).catch((error) =>{
    console.log(error)
})

// -------------- FAVORITOS ----------------

$(document).ready(function(){
    
    $(document).on("click", ".fav-btn", function() {

        // CARREGA TODOS OS IDS GUARDADOS NOS FAVORITOS
        var fav = [];
        if(localStorage.getItem("fav") != null) fav = JSON.parse(localStorage.getItem("fav"));

        // VAI BUSCAR O ID DO OBJETO CLICADO
        var item = $(this).attr("data-id");

        // SE O ID EXISTE NOS FAVORITOS, REMOVE-O
        if(fav.includes($(this).attr("data-id"))) {
            // REMOVE DOS FAVORITOS E MUDA A ESTRELA
            fav.splice(fav.indexOf(item), 1);
            $(this).removeClass("fas").addClass("far");
        // SENÃO ADICIONA-O
        } else {
            // ADICIONA AOS FAVORITOS E MUDA A ESTRELA
            fav.push(item);
            $(this).removeClass("far").addClass("fas");
        }

        // GUARDA AS ALTERAÇÕES
        localStorage.setItem("fav", JSON.stringify(fav));
    });
});

// -----------------------------------------

//LÊ O CONTEUDO DA CAIXA DE PESQUISA E REDIRECIONA PARA A PÁGINA DE RESULTADOS

function save(){
    var resultado = document.getElementById('pesquisa').value;
    var valuePesquisa2 = resultado.toLowerCase();
    localStorage.setItem("resultado", valuePesquisa2);
    console.log(resultado)
    location.href = "./resultado.html";
    }

// FILTRA A CRIPTOMOEDA POR NOME (NÃO FUNCIONA AO APAGAR O INPUT, HÁ QUE DAR REFRESH)


function search_coin() { 
    
        let input = document.getElementById('searchname').value;
        input=input.toLowerCase(); 
        console.log(input);
        let x = document.getElementsByClassName('filter'); 
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) { 
                x[i].style.display="none";
                 }
            else { 
                x[i].style.display="name"; 
                
                } }
            }

// FINALIZAR PESQUISA COM TECLA "ENTER"

// var input = document.getElementById("pesquisa")

// input.addEventListener("keyup", function(event) {
//             if (event.keyCode === 13) {
//               event.preventDefault();
//               document.getElementById("myBtn").click();
//             }
//         })
