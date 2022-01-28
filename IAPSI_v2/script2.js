// Carregar Top100

var baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"


const API = fetch(`${baseURL}`, {
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
            if(coinsData.length > 0 )  {
                var cryptoCoins = []
            }

            //Loop Starts
            coinsData.forEach(coin => {
                var row = `<tr>
							<td class="rank"> ${coin.market_cap_rank}</td>;
							<td class="image"><img src=" ${coin.image}" style="width:50px; heigth:50px" onclick = detalhes()></td>
							<td class="name"> ${coin.name} </td>
                            <td class="coin"><div class ="clk"><button onclick="favoritos()">Favoritos</button></div></td>
					  </tr>`
			cryptocurrencies.innerHTML += row
                // cryptoCoins += `<tr>`;
                // cryptoCoins += `<td class="rank"> ${coin.market_cap_rank}</td>`;
                // cryptoCoins += `<td class="image"><img src=" ${coin.image}" style="width:50px; heigth:50px" onclick = detalhes()></td>`;
                // cryptoCoins += `<td class="name"> ${coin.name} </td>`;
                // cryptoCoins += `<td class="coin"> ${coin.current_price} €</td>`;
                // cryptoCoins += `<td class="coin"> ${coin.price_change_24h} €</td>`;"</tr>";
                // cryptoCoins += `<td class="coin"><div class ="clk"><a href="javascript:void"><i class="far fa-heart"></i></i></a></div></td>`;"</tr>";
                             
            })
            document.getElementById("cryptocurrencies").innerHTML = row;
        })
    }
}).catch((error) =>{
    console.log(error)
})


function myFunction(){
var resultado = document.getElementById('pesquisa').value;
sessionStorage.setItem("resultado", resultado);
location.href = "./resultado.html"

}

// var resultado = sessionStorage.getItem("resultado");
// console.log(resultado);
// var valuePesquisa = resultado.toLowerCase();
// $('.cryptocurrencies').empty(); // .html('');
// $('.panel-title').text('Resultados da pesquisa ' 
// 		+ valuePesquisa);

//         $.ajax({
//             method: "GET",
//             url: "https://api.coingecko.com/api/v3/coins/"+ valuePesquisa +"?localization=false" 
//             }).done(function(res){
//             console.log(res);

//             $.each(res.Search, function(index, result){
//                 // Criar novo clone
//                 var liMedia = cloneMedia.clone();
                
// 			$('.rank', liMedia).text(result.market_cap_rank)
// 			$('.nome', liMedia).text(result.name)
			
// 			// Adicionar o clone à tabela original
// 			$('.media-list').append(liMedia);
// })
//             })
        

function favoritos(){
    var resultado = document.getElementById('pesquisa').value;
    sessionStorage.setItem("resultado", resultado);
    location.href = "./resultado.html"
}
// $('#btSearch').on('click', function() {

// 	var value = $('#pesquisa').val();
//     var valuePesquisa = value.toLowerCase();
    
//     console.log(valuePesquisa)
// 	$('.cryptocurrencies').empty(); // .html('');
// 	$('.panel-title').text('Resultados da pesquisa ' 
// 		+ valuePesquisa);

//         $.ajax({
//             method: "GET",
//             url: "https://api.coingecko.com/api/v3/coins/"+ valuePesquisa +"?localization=false" 
//             }).done(function(res){
//             console.log(res);

//             $.each(res.Search, function(index, result){
//                 // Criar novo clone
//                 var liMedia = cloneMedia.clone();
//                 $('.rank', liMedia).text(result.market_cap_rank);
//                 $('.name', liMedia).text(result.name);
//                 $('.media-list').append(liMedia);
// })
//             })
//         })
