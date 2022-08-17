// var yelpApiKey = 'k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx'
var restaurantDisplayEl = document.getElementById('restaurant-display')

function placesToEat() {
    var url = 'https://russelldev-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=columbus,oh'

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx',
            
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


function restaurantData() {
    var restaurantRowEl = document.createElement('<tr>');

    var restaurantNameEl = document.createElement('<td>');

    var addressEl = document.createElement('<td>');

    var phoneNumberEl = document.createElement('<td>');

    var ratingEl = document.createElement('<td>');

restaurantRowEl.append(
    restaurantNameEl,
    addressEl,
    phoneNumberEl,
    ratingEl
);

restaurantDisplayEl.append(restaurantRowEl)
}