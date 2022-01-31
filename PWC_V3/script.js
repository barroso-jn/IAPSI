

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
    

