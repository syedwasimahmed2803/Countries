let data;
async function fetchData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      console.error("Nah Fam");
      return;
    }
    data = await response.json();
    var section = document.querySelector(".section");

    data.forEach((element) => {
      var div = document.createElement("div");
      div.className = "card";
      section.appendChild(div);
      var flag = document.createElement("img");
      flag.setAttribute("class", "flag");
      flag.setAttribute("src", element.flags.png);
      div.appendChild(flag);
      var commonName = document.createElement("h3");
      commonName.setAttribute("id", "name");
      commonName.textContent = element.name.common;
      div.appendChild(commonName);
      var population = document.createElement("p");
      population.setAttribute("class", "text");
      population.innerHTML = `<span>Population:</span> ${element.population.toLocaleString()}`;
      div.appendChild(population);
      var region = document.createElement("p");
      region.setAttribute("class", "text");
      region.innerHTML = `<span>Region:</span> ${element.region}`;
      div.appendChild(region);
      var capital = document.createElement("p");
      capital.setAttribute("class", "text");
      capital.setAttribute("id", "last-item");
      capital.innerHTML = `<span>Capital:</span> ${element.capital}`;
      div.appendChild(capital);
      // var commonName = element.name.common;
      // console.log(element.flags.png);
      // (flagImg, commonName, "population", "region", "capital").forEach(
      //   (property) => {
      //     var li = document.createElement("li");
      //     li.className = "list-items";
      //     li.textContent =
      //       property === commonName
      //         ? commonName
      //         : flagImg
      //         ? flagImg
      //         : element[property];
      //     ul.appendChild(li);
      //     ul.firstChild.className = "list-items img";
      //   }
      // );

      // section.appendChild(ul);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
var toggle = document.querySelector(".toggle");
toggle.addEventListener("click", toggleMode);
var nav = document.querySelector("nav");
var search = document.getElementById("search");
search.addEventListener("keyup", searchItems);
var section = document.querySelector("section");
var text = document.getElementById("mode");
function searchItems(e) {
  var text = e.target.value.toLowerCase();

  var name = section.getElementsByTagName("h3");
  Array.from(name).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.parentElement.style.display = "block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
}

// function searchItems(e) {
//   var text = e.target.value.toLowerCase();
//   var cards = document.querySelectorAll(".card");

//   cards.forEach(function (card) {
//     var name = card.querySelector("#name").textContent.toLowerCase();
//     var population = card
//       .querySelector("#population")
//       .textContent.toLowerCase();
//     var region = card.querySelector("#region").textContent.toLowerCase();
//     var capital = card.querySelector("#capital").textContent.toLowerCase();

//     if (
//       name.includes(text) ||
//       population.includes(text) ||
//       region.includes(text) ||
//       capital.includes(text)
//     ) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

document.querySelectorAll(".dropdown-content a").forEach((element) => {
  element.addEventListener("click", () => {
    const selectedRegion = element.textContent;
    // console.log(selectedRegion);
    filterByRegion(selectedRegion);
  });
});

function filterByRegion(selectedRegion) {
  document.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
  data.forEach((element) => {
    if (element.region === selectedRegion || selectedRegion === "All") {
      createCard(element);
    }
  });
}

function createCard(element) {
  var section = document.querySelector(".section");
  var div = document.createElement("div");
  div.className = "card";
  if (text.textContent != "Dark Mode") {
    div.classList.add("not-as-dark");
  } else {
    div.classList.remove("not-as-dark");
  }
  section.appendChild(div);
  var flag = document.createElement("img");
  flag.setAttribute("class", "flag");
  flag.setAttribute("src", element.flags.png);
  div.appendChild(flag);
  var commonName = document.createElement("h3");
  commonName.setAttribute("id", "name");
  commonName.textContent = element.name.common;
  div.appendChild(commonName);
  var population = document.createElement("p");
  population.setAttribute("class", "text");
  population.innerHTML = `<span>Population:</span> ${element.population.toLocaleString()}`;
  div.appendChild(population);
  var region = document.createElement("p");
  region.setAttribute("class", "text");
  region.innerHTML = `<span>Region:</span> ${element.region}`;
  div.appendChild(region);
  var capital = document.createElement("p");
  capital.setAttribute("class", "text");
  capital.setAttribute("id", "last-item");
  capital.innerHTML = `<span>Capital:</span> ${element.capital}`;
  div.appendChild(capital);
}

function toggleMode(e) {
  var input = document.getElementById("search");
  var header = document.getElementsByTagName("header")[0];
  var dropdown = document.getElementsByClassName("dropbtn")[0];
  var body = document.getElementsByTagName("body")[0];
  var search = document.querySelector(".search-container");
  var searchIcon = document.querySelector(".fa-magnifying-glass");
  var content = document.querySelectorAll(".dropdown-content a");
  var card = document.querySelectorAll(".card");
  var icon = document.querySelector(".fa-regular");
  if (text.textContent == "Dark Mode") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    text.textContent = "Light Mode";
    section.classList.add("dark");
    body.classList.add("dark");
    nav.classList.add("not-as-dark");
    input.classList.add("not-as-dark");
    dropdown.classList.add("not-as-dark");
    card.forEach((item) => item.classList.add("not-as-dark"));
    search.classList.add("not-as-dark");
    searchIcon.classList.add("not-as-dark");
    // searchIcon.style.backgroundColor = "red";
    // searchIcon.style.color = "hsl(0, 0%, 52%)";

    // dropdownContent.classList.add("not-as-dark");
    // content.classList.add("not-as-dark");
    header.classList.add("dark");
    content.forEach((item) => item.classList.add("not-as-dark"));
  } else {
    text.textContent = "Dark Mode";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    section.classList.remove("dark");
    body.classList.remove("dark");
    nav.classList.remove("not-as-dark");
    input.classList.remove("not-as-dark");
    header.classList.remove("dark");
    dropdown.classList.remove("not-as-dark");
    // dropdownContent.classList.remove("not-as-dark");
    search.classList.remove("not-as-dark");
    searchIcon.classList.remove("not-as-dark");
    content.forEach((item) => item.classList.remove("not-as-dark"));

    card.forEach((item) => item.classList.remove("not-as-dark"));
  }
}
