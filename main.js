// wrapper
let cart = document.getElementById("cart-btn");
let cartwrapper = document.querySelector(".cart-wrapper");
cart.addEventListener("click", () => {
  cartwrapper.classList.toggle("cart-on");
});

let id = 0;
let total = 0;
let cartBody = document.getElementById("cart-body");
let cartTotal = document.getElementById("total");

function addProduct(event) {
  let title =
    event.target.parentElement.parentElement.childNodes[1].textContent;
  let price = event.target.parentElement.childNodes[1].textContent;
  id += 1;
  total += parseInt(price);

  let output = `<td>${id}</td>
  <td>${title}</td>
  <td>${price}</td>`;

  cartBody.innerHTML += output;
  cartTotal.innerHTML = total;
}
// API
// const url = 'https://chinese-food-db.p.rapidapi.com/';
// let searchInput = document.getElementById('search-input')

// searchInput.addEventListener('keyup', (event) =>{
//     if(event.key == 'Enter' && searchInput.value !='') {
//         fetch(`https://chinese-food-db.p.rapidapi.com/`)
//         .then(res => res.json())
//         .then((data) => {
//             console.log(data)
//         })
//     }
// })
const url = 'https://chinese-food-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78a198c0edmshfc7972957faa84cp1060fejsn663dc93fdacd',
		'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
	}
};
async function getProducts() {
	let data = await fetch("https://chinese-food-db.p.rapidapi.com/")
	  .then((response) => response.json())
	  .then((json) => json);
	console.log(data);
	loadProducts(data);
  }
