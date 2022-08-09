// var restBtn = document.getElementById("Restaurants");
// var inputEl = inputEl = document.getElementById("restaurant-search");
// var searchEl = document.getElementById("search-button");

//  document.getElementById("search-button").addEventListener("click", displaySearch);
// // fetch()
 
// // // api started as yelp. Changed to google maps 
// // // var apiKey = I7L1ibgINPyP62JknbdhQ6DQoOWwrd9XyiFYAYt1drLIPWt5_gEHkO0a8PHjTJCGZgKXjwtGq0qFgsmh2jplhqzm9t84OexWw9xcc6jpKdt9NXQ3U9pl8sgpiJboYnYx
// // // // https://api.yelp.com/v3/businesses/search
// // // // https://api.yelp.com/v3/autocomplete

// function myFunction() {
//     document.getElementById("Restaurants").classList.toggle("show");
//   }
//   console.log(myFunction)
//   function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("Restaurants");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }

// // Autocomplete function
//   let autocomplete;
//   function initAutocomplete() {
//     autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('autocomplete'),
//       {
//         types: ['resataurants']
//         componentRestrictions: {'United States': ['US']}
//         fields: ['place_id', 'geometry', 'name']
      
//       });
  // }

  
// Global variables
var restaurant = "";
var apiKey = "AIzaSyCI8qKDZXrRqQBs8uKJaOP0J1D7gVbA-Ds"

// Fucntion for restaurant search
var getRestNames = ();
  let rest = $("#search-rest").val();
  nearRest = $("#search-rest").val();

  let queryURL = "https://api.yelp.com/v3/businesses/search?term=" + rest "&location=denver" + apiKey;
  fetch(queryURL)
  console.log(rest)


/* DROPDOWN function*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}