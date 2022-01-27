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
            if(coinsData.length > 0 || coinsData.length <100)  {
                var cryptoCoins = ""
            }

            //Loop Starts
            coinsData.forEach(coin => {
                cryptoCoins += "<tr>";
                cryptoCoins += `<td class="coin"> ${coin.market_cap_rank}</td>`;
                cryptoCoins += `<td class="coin"><img src=" ${coin.image}" style="width:50px; heigth:50px" onclick = detalhes()></td>`;
                cryptoCoins += `<td class="coin"> ${coin.name} </td>`;
                // cryptoCoins += `<td class="coin"> ${coin.current_price} €</td>`;
                // cryptoCoins += `<td class="coin"> ${coin.price_change_24h} €</td>`;"</tr>";
                cryptoCoins += `<td class="coin"> <button type="submit" id="myButton">Favoritos</button></td>`;"</tr>";
                             
            })
            document.getElementById("cryptocurrencies").innerHTML = cryptoCoins;
        })
    }
}).catch((error) =>{
    console.log(error)
})

document.getElementById("pesquisa").onclick = function () {
    location.href = "./detalhes.html";
};

// $('#btsearch').on('click', function() {

// 	var valuePesquisa = $('#pesquisa').val();
//     console.log(valuePesquisa)
// 	$('.cripto').empty(); // .html('');
// 	$('.panel-title').text('Resultados da pesquisa ' 
// 		+ valuePesquisa);

// $.ajax({
//     method: "GET",
//     url: "https://api.coingecko.com/api/v3/coins/"+valuePesquisa+"?localization=false"
    
        
// }).done(function(res){
//     console.log(res);

//     $.each(res.Search, function(index, result){
//         // Criar novo clone
//         var liCoin = res.clone();
//         // Alterar no clone
        
//         $('.rank', liCoin).text(result.market_cap_rank)
//         $('.name', liCoin).text(result.name)
//         $('.symbol', liCoin).text(result.symbol)
//         $('.price', liCoin).text(result.current_price)
        // $('a', liMedia).attr('href', 
        //     "https://www.imdb.com/title/" + result.imdbID)
        // Adicionar o clone à tabela original
//         $('.cripto').append(liCoin);
//     })
// })  

		// $.each(res.Search, function(index, result){
		// 	// Criar novo clone
		// 	var liMedia = cloneMedia.clone();
		// 	// Alterar no clone
		// 	$('#image', liMedia).attr('src', result.Poster);
		// 	$('.title', liMedia).text(result.Title)
		// 	$('.ano', liMedia).text(result.Year)
		// 	$('a', liMedia).attr('href', 
		// 		"https://www.imdb.com/title/" + result.imdbID)
		// 	// Adicionar o clone à tabela original
		// 	$('.cripto').append(liMedia);
		// })
// 	})
// })





function search_coin() { 
    let input = document.getElementById('pesquisa').value 
    console.log(input)
    input=input.toLowerCase(); 
    let x = $(cryptoCoins);
    console.log(x) 







    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none";
         } else { 
             x[i].style.display="list-item"; } 
            }
 }
    
// document.getElementById('myButton').onclick = function(){
//     sessionStorage.setItem('criptomoeda', cryptoCoins)
// };

// console.log(criptomoeda);
// $(function() {
// 		$('cryptocurrencies').submit(function(){
// 			localStorage.setItem('nome', $('#nome').val());
// 		})

// 	else if($("#contacto").length > 0){
// 		// Estamos no contacto.html
// 		var guardado = localStorage.getItem('nome');
// 		$('#nome').text(guardado);
// 	}

// 	$('#localClear').on('click', function(){
// 		localStorage.removeItem('nome');
// 	})
// })



// $(function() {

// 	if($("#formNome").onclick()==true) {
// 		// Estamos no index.html
// 		$('#formNome').submit(function(){
// 			localStorage.setItem('favoritos', $('#nome').val());
// 		})
// 	}
// 	else if($("#contacto").length > 0){
// 		// Estamos no contacto.html
// 		var guardado = localStorage.getItem('nome');
// 		$('#nome').text(guardado);
// }})

//LER BARRA DE PESQUISA
// $('#pesquisa').on('click', function() {

// 	var valuePesquisa = $('#pesquisa').val();
//     console.log(pesquisa);
// 	$('.detalhes').empty(); // .html('');
// 	$('.panel-title').text('Resultados da pesquisa ' 
// 		+ valuePesquisa);

// 	$.ajax({
// 		method: "GET",
// 		url: 'https://api.coingecko.com/api/v3/coins/'
// 			+ valuePesquisa
// 	}).done(function(res){
// 		console.log(res);

// 		$.each(res.Search, function(index, result){
// 			// Criar novo clone
// 			var liMedia = cloneMedia.clone();
// 			// Alterar no clone
// 			$('#image', liMedia).attr('src', result.Poster);
// 			$('.name', liMedia).text(result.name)
// 			$('.rank', liMedia).text(result.Year)
//             $('.price', liMedia).text(result.market_cap_rank)
// 			$('a', liMedia).attr('href', 
// 				"https://www.imdb.com/title/" + result.imdbID)
// 			// Adicionar o clone à tabela original
// 			$('.detalhes').append(liMedia);
// 		})
// 	})
// })