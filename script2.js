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
                cryptoCoins += "<tr>";
                cryptoCoins += `<td> ${coin.market_cap_rank}</td>`;
                cryptoCoins += `<td> ${coin.symbol}</td>`;
                cryptoCoins += `<td> ${coin.name}</td>`;
                cryptoCoins += `<td> ${coin.current_price}</td>`;
                cryptoCoins += `<td> ${coin.price_change_24h}</td>`;"</tr>";              
            })
            document.getElementById("cryptocurrencies").innerHTML = cryptoCoins;
        })
    }
}).catch((error) =>{
    console.log(error)
})

