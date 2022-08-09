
//MAPS

//API for maps functions
var map = L.map('map').setView([39.74,-104.99], 13);
var modalmap = document.querySelector(".modal")

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var mapBtn = document.getElementById("mapbtn")
mapBtn.addEventListener("click", function(){
    modalmap.classList.add("is-active")
map.invalidateSize(true);
})

var closeBtn = document.getElementById("closebtn")
closeBtn.addEventListener("click", function(){
    modalmap.classList.remove("is-active")
})

//Weather

//Restaurants

//API for restaurant functions

var restBtn = document.getElementById("Restaurants");

restBtn.addEventListener("click", );
fetch()

function myFunction() {
    document.getElementById("Restaurants").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("Restaurants");
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