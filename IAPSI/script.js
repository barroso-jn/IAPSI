var valuePesquisa = $('#pesquisa').val();
var baseURL = "https://api.coingecko.com/api/v3/coins/"+valuePesquisa +"?localization=false"

const API = fetch(`${baseURL}`, {
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
//             if(coinsData.length > 0 )  {
//                 var cryptoCoins = ""
//             }

//             //Loop Starts
//             coinsData.forEach(coin => {
//                 cryptoCoins += "<tr>";
//                 cryptoCoins += `<td class="coin"> ${coin.market_cap_rank}</td></tr>`;
//                 cryptoCoins += `<td class="coin"><img src=" ${coin.image}" style="width:50px; heigth:50px" onclick = detalhes()></td></tr>`;
//                 cryptoCoins += `<td class="coin"> ${coin.name} </td></tr>`;
//                 cryptoCoins += `<td class="coin"> ${coin.current_price} €</td></tr>`;
//                 cryptoCoins += `<td class="coin"> ${coin.price_change_24h} €</td></tr>`;
//                 cryptoCoins += `<td class="coin"> <button type="submit" id="myButton">Favoritos</button></td>`;"</tr>";
                             
//             })
//             document.getElementById("cryptocurrencies").innerHTML = cryptoCoins;
//         })
//     }
}).catch((error) =>{
    console.log(error)
})