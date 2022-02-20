let userDetails = JSON.parse(localStorage.getItem("user"))
let bill = document.getElementById("bill")
function renderBill(){
    let table = document.getElementById("table");
    let cart = [];
    let total = 0
    for (let i = 0; i < list.length; i++) {
      let item = JSON.parse(localStorage.getItem(`${list[i].name}`));
      if (item != null) {
        cart.push(item);
      }
    }
    bill.innerHTML += `    
    <h4>Tên khách hàng : ${userDetails.name}</h4>
    <h4>Số điện thoại đặt hàng : ${userDetails.phone}</h4>
    <h4>Địa chỉ : ${userDetails.adr}</h4>
    <h4>Emails : ${userDetails.email}</h4>
    <hr>
    <h2>ĐƠN HÀNG CỦA BẠN</h2>
    `
    for (let j = 0; j < cart.length; j++) {
      total+=cart[j][0].price
      bill.innerHTML += `
  <div class="item">
      <h5>${cart[j][0].name}</h5>
      <P>quantity : ${cart[j][0].quantity}</P>
      <p>price: ${cart[j][0].price}đ</p>
    </div> <br> `;
    
    }
    bill.innerHTML +=`<h3>Tổng số tiền phải trả ${total}</h3> `     
}