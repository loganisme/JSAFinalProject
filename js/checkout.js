function validateForm() {
    let name = document.getElementById("fname").value
    let email = document.getElementById("email").value
    let adr = document.getElementById("adr").value
    let city = document.getElementById("city").value
    let phone = document.getElementById("phone").value
    localStorage.setItem("user", JSON.stringify({name : name,email:email,adr : adr , city:city , phone: phone}))
    window.location("/PROJECTJSA/success.html")

}

function renderCart(){
    let table = document.getElementById("table");
    let cart = [];
    let total = 0
    for (let i = 0; i < list.length; i++) {
      let item = JSON.parse(localStorage.getItem(`${list[i].name}`));
      if (item != null) {
        cart.push(item);
      }
    }
    table.innerHTML += `    
    <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>${cart.length}</b></span></h4>
    <hr><br>
    `
    for (let j = 0; j < cart.length; j++) {
      total+=cart[j][0].price
      table.innerHTML += `
  <div class="item">
      <h5>${cart[j][0].name}</h5>
      <P>quantity : ${cart[j][0].quantity}</P>
      <p>price: ${cart[j][0].price}đ</p>
    </div> <br> `;
    
    }
    table.innerHTML +=`          <hr>
    <p>Total <span class="price" style="color:black"><b>${total}đ</b></span></p>`
}