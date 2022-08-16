// var yelpApiKey = 'k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx'

function placesToEat() {
    var url = 'https://api.yelp.com/v3/businesses/search?term=food&location=columbus,oh'

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })
}
placesToEat()