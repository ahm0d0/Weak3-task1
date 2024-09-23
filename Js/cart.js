// Authentication
if (!localStorage.getItem("user")) {
  window.location.replace("authentication.html");
}

let cartParent = document.querySelector("#cartParent");
let CartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
let TotalPrice = document.querySelector("#TotalPrice");
let removeBtn = document.querySelectorAll(".removeBtn");
let messageItemRemoved = document.querySelectorAll("#messageItemRemoved");

let mapingCart =
  CartArray.lentgh != 0
    ? CartArray.map((item, index) => {
        return `
     <div id="${item.id}" class="flex items-center justify-between mb-4 mt-5">
  <div class="flex items-center">
    <img
      src="${item.img}"
      alt="Product Image"
      class="w-20 object-cover rounded cartImg"
    />
    <div class="ml-4">
      <h3 class="text-lg font-semibold">${item.ProductName}</h3>
      <p class="text-gray-700">EGP.${item.Price}</p>
    </div>
  </div>
  <button id="${item.id}" class="bg-red-500 text-white p-2 rounded removeBtn">Remove</button>
  </div>
  <hr >
    `;
      }).join("")
    : "";

// set items in page
cartParent.innerHTML = mapingCart;
// get the price from my fake api
let GetPrice = CartArray.lentgh != 0 ? CartArray.map((item) => item.Price) : "";
// sum all prices

let totalPrice =
  GetPrice &&
  GetPrice.reduce((item, next) => {
    return item + next;
  }, 0);

TotalPrice.innerHTML = "EGP." + totalPrice;

// DeletBtn
removeBtn = document.querySelectorAll(".removeBtn");

let CartLentgh = document.getElementById("CartLentgh");

let cartScore = CartArray.length;

CartLentgh.innerHTML = cartScore;

removeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    CartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let newArray = CartArray.filter((item) => !btn.id.includes(item.id));
    localStorage.setItem("cartProducts", JSON.stringify(newArray));

    let findId = CartArray.find((item) => item.id == btn.id);
    CartLentgh.innerHTML -= 1;
    console.log(findId.id);
    cartParent.removeChild(document.getElementById(findId.id));
    // window.location.reload();
  });
});

let LogoutBtn = document.getElementById("LogoutBtn");
console.log(LogoutBtn);

LogoutBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("hi");
});
