function validateForm() {
  const phoneNumRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const emailRegex =/^([a-z0-9])+(@gmail\.com)$/gm
    let name = document.getElementById("fname").value
    let email = document.getElementById("email").value
    let adr = document.getElementById("adr").value
    let city = document.getElementById("city").value
    let phone = document.getElementById("phone").value
    if (phoneNumRegex.test(phone)&& emailRegex.test(email)) {alert("đặt hàng thành công")
    localStorage.setItem("user", JSON.stringify({name : name,email:email,adr : adr , city:city , phone: phone}))
    window.location("/PROJECTJSA/success.html")
    }else{
      alert("vui lòng nhập đúng số điện thoại hoặc email")
    }

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