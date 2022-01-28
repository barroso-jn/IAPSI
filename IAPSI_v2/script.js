    var resultado = sessionStorage.getItem("resultado");
    console.log(resultado);
    var valuePesquisa = resultado.charAt(0).toUpperCase() + resultado.slice(1)
    var valuePesquisa2 = resultado.toLowerCase();

    var baseURL = "https://api.coingecko.com/api/v3/coins/"
    var baseURL2 = "/markets?vs_currency=eur"
    var myArray = []


    $.ajax({
        method:'GET',
        url:baseURL + valuePesquisa2,
        success:function(response){
            myArray = response
            buildTable(myArray)
            console.log(myArray)
        }
    })

    function buildTable(myArray){
		var table = document.getElementById('cryptocurrencies')

		for (var i = 0; i < myArray.length; i++){
			var row = `<tr>
							<td>${myArray[i].market_cap_rank}</td>
							<td>${myArray[i].name}</td>
							<td>${myArray[i].symbol}</td>
					  </tr>`
			table.innerHTML += row


		}
	}

    
    // 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false'
// const API2 = fetch(`${baseURL}${valuePesquisa2}`, {
//     method: "GET",
//     headers:{
//         'Content-type' : 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     success: function(data){
//         $.each(data.data, function(i, d){
//             var s = d.shares ? '<td>'+d.shares.count+'</td>' : '';
//             $('.tabla').append('<tr><td>'+d.created_time+'</td><td>'+d.permalink_url+'</td><td>'+d.id+'</td>'+s+'</tr>');
//         });
//           },
//     }
// }).then((response)=> {
//     if(response.ok){
//         response.json().then((json) => {
//             console.log(json)

//             let coinsData2 = json
//             if(coinsData2.length > 0 )  {
//                 var cryptoCoins = []
//             }

//             //Loop Starts
//             coinsData2.foreach(coin => {
//                 cryptoCoins += `<tr>`;
//                 cryptoCoins += `<td class="rank"> ${coin.market_cap_rank}</td>`;
//                 cryptoCoins += `<td class="image"><img src=" ${coin.image}" style="width:50px; heigth:50px" onclick = detalhes()></td>`;
//                 cryptoCoins += `<td class="name"> ${coin.name} </td>`;
//                 // cryptoCoins += `<td class="coin"> ${coin.current_price} €</td>`;
//                 // cryptoCoins += `<td class="coin"> ${coin.price_change_24h} €</td>`;"</tr>";
//                 cryptoCoins += `<td class="coin"> <button type="submit" id="myButton">Favoritos</button></td>`;"</tr>";
                             
//             })
//             document.getElementById("cryptocurrencies").innerHTML = cryptoCoins;
//         })
//     }
// }).catch((error) =>{
//     console.log(error)
// })
    // $('.cryptocurrencies').empty(); // .html('');
    // $('.panel-title').text('Resultados da pesquisa ' 
    //         + valuePesquisa);
    
    //         $.ajax({
    //             method: "GET",
    //             url: "https://api.coingecko.com/api/v3/coins/"+ valuePesquisa2 +"?localization=false" 
    //             }).done(function(res){
    //             console.log(res);
    
    //             $.each(res.Search, function(index, result){
    //                 // Criar novo clone
    //                 var liMedia = cloneMedia.clone();
                    
    //             $('.rank', liMedia).text(result.market_cap_rank)
    //             $('.nome', liMedia).text(result.name)
                
    //             // Adicionar o clone à tabela original
    //             $('.media-list').append(liMedia);
    // })
                // })