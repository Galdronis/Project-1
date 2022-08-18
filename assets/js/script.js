// var yelpApiKey = 'k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx'
var restaurantDisplayEl = document.getElementById("restaurant-display");

function placesToEat() {
  var url =
    "https://russelldev-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&location=columbus,oh";

  fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer k4I2EBLwowihaRkeoPtje_qa1xss9NYOJgm5OQLCRNKb66_JliGrhnWlUnnUV952cDYjANT97B8AxJCy1XxtuGiJIwc5xENkXP4n_Bz1OiTgnm63JbvRM62Dxg_7YnYx",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (i = 0; i < data.businesses.length; i++) {
        restaurantData(data.businesses);
      }
    });
}
placesToEat();

function restaurantData(businesses) {
  var restaurantRowEl = document.createElement("tr");

  var restaurantNameEl = document.createElement("td");
  var restaurantYelp = document.createElement("a");
  restaurantYelp.setAttribute("class", "fontSize")
  restaurantYelp.href = businesses[i].url;
  restaurantYelp.textContent = businesses[i].name;
  restaurantNameEl.append(restaurantYelp)

  var addressEl = document.createElement("td");
  addressEl.setAttribute("class", "addressBeGone")

  var phoneNumberEl = document.createElement("td");

  var ratingEl = document.createElement("td");

  restaurantRowEl.append(restaurantNameEl, addressEl, phoneNumberEl, ratingEl);

  restaurantDisplayEl.append(restaurantRowEl);
  addressEl.textContent = businesses[i].location.address1;
  phoneNumberEl.textContent = businesses[i].phone;
  ratingEl.textContent = businesses[i].rating;
}
