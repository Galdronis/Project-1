// var yelpApiKey = 'k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx'

function placesToEat() {
    var url = 'http://russelldev-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=columbus,oh'

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        
    })
}
placesToEat()