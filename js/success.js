let userDetails = JSON.parse(localStorage.getItem("user"))
let bill = document.getElementById("bill")
function renderBill(){
    let cart = [];
    let total = 0
    for (let i = 0; i < list.length; i++) {
      let item = JSON.parse(localStorage.getItem(`${list[i].name}`));
      if (item != null) {
        cart.push(item);
      }
    }
    bill.innerHTML += `    
    <h3>Tên khách hàng : ${userDetails.name}</h3>
    <h3>Số điện thoại đặt hàng : ${userDetails.phone}</h3>
    <h3>Địa chỉ : ${userDetails.adr}</h3>
    <h3>Thành phố : ${userDetails.city} </h3>
    <h3>Emails : ${userDetails.email}</h3>
    <hr>
    <h1>ĐƠN HÀNG CỦA BẠN</h1>
    `
    for (let j = 0; j < cart.length; j++) {
      total+=cart[j][0].price
      bill.innerHTML += `
  <div class="item">
  <img src="${cart[j][0].img}"alt="">
      <h3>${cart[j][0].name}</h3>
      <P>quantity : ${cart[j][0].quantity}</P>
      <p>price: ${cart[j][0].price}đ</p>
    </div> <br> `;
    
    }
    bill.innerHTML +=`<h1 style="color:#660000;text-align:center;font-size: 24px;border:10px solid black;padding: 2rem 1rem;min-height: 3em;background: #ffd73e33;">Tổng số tiền phải trả ${total}VNĐ ✨</h1><hr> ` 
    resetLocalStorage()    
}

function backToHome() {
    resetLocalStorage()
    window.location.href ="./home.html"
    alert("cảm ơn khách hàng đã mua tin tưởng mua sắm <3")
}

function resetLocalStorage() {
    localStorage.clear()
}
function shopMore(){
    resetLocalStorage()
    window.location.href = "./shop.html"
    alert("cảm ơn khách hàng đã mua tin tưởng mua sắm <3")
}