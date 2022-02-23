
localStorage.setItem("shopList", JSON.stringify([{id:1,name:"Nhà chơi cầu trượt Hàn Quốc cho bé kèm bàn ghế",price:6270000,img:"https://sudospaces.com/babycuatoi/2020/03/hn777-nha-choi-han-quoc-bbt-global-cho-eb-2-medium.jpg"},
{id:2,name:"Đồ chơi xếp hình xe ô tô cho bé trai",price:129000,img:"https://sudospaces.com/babycuatoi/2021/12/5105-medium.png"},
{id:3,name:"Bộ trống đồ chơi cho bé 9 chi tiết cỡ lớn kèm ghế ngồi ",price:245000,img:"https://sudospaces.com/babycuatoi/2021/03/m6309-do-choi-trong-am-nhac-cho-be-medium.jpg"},
{id:4,name:"Đồ chơi bàn đá bóng Bida, Bi-a, Billard, Bi lắc cho bé",price:235000,img:"https://sudospaces.com/babycuatoi/2021/06/3623-do-choi-ban-bong-da-bi-lac-cho-be-medium.jpg"},
{id:5,name:"Đồ chơi máy gắp thú bông loại lớn ",price:2346000,img:"https://sudospaces.com/babycuatoi/2021/08/5373-d-do-choi-may-gap-thu-bong-loai-lon-2-medium.jpg"},
{id:6,name:"Đồ chơi búp bê 51cm thân mềm cho bé ",price:100000,img:"https://sudospaces.com/babycuatoi/2020/07/kt5100f-do-choi-bup-be-51cm-than-mem-cho-be-medium.jpg"},
{id:7,name:"Xe điện trẻ em Địa hình",price:1000000,img:"https://sudospaces.com/babycuatoi/2021/03/bbt-3355x-o-to-dien-tre-em-medium.jpg"},
{id:8,name:"Bể bơi phao cầu trượt cá sấu chúa có vòi phun mưa",price:635000,img:"https://sudospaces.com/babycuatoi/2020/01/intex-57165-be-boi-phao-cau-truot-intex-2-1-medium.jpg"},
{id:9,name:"Bộ đèn bàn máy chiếu học vẽ thông minh size to cho bé",price:139000,img:"https://sudospaces.com/babycuatoi/2021/01/ym6886-do-choi-den-ban-may-chieu-cho-be-1-medium.jpg"},
{id:10,name:"Đồ chơi bàn trang điểm gỗ cao cấp cho bé",price:369000,img:"https://sudospaces.com/babycuatoi/2020/04/jync017-ghe-ngoi-go-cao-cap-cho-be-1-2-medium.jpg"},
]))
let list = JSON.parse(localStorage.getItem("shopList"));
function addToCart() {
  let idex = document.getElementById("item-number").value;
  let quantity = document.getElementById("quantity").value;
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  let realCart = [];
  if (quantity === "" ) {
    alert("vui lòng nhập số lượng");}
  else if ( quantity < 0 ) {
      alert("vui lòng nhập số lượng > 0");
  } else {
    alert(`đã thêm ${list[idex - 1].name} vào giỏ hàng`);
    cart.push({
      id: idex,
      name: list[idex - 1].name,
      quantity: quantity,
      price: list[idex - 1].price,
      img: list[idex - 1].img,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    let simi = cart.filter((el) => el.id == idex);
    let totalSimi = 0;
    let totalPrice = 0;
    for (let i = 0; i < simi.length; i++) {
      totalSimi += Number(simi[i].quantity);
    }
    totalPrice = simi[0].price * totalSimi;
    console.log(totalSimi);
    console.log(totalPrice);
    realCart.push({
      id: idex,
      name: list[idex - 1].name,
      quantity: totalSimi,
      price: totalPrice,
      img: list[idex - 1].img,
    });
    localStorage.setItem(`${list[idex - 1].name}`, JSON.stringify(realCart));
  }
}

function renderRealCart() {
  let table = document.getElementById("table");
  let cart = [];
  let total = 0
  for (let i = 0; i < list.length; i++) {
    let item = JSON.parse(localStorage.getItem(`${list[i].name}`));
    if (item != null) {
      cart.push(item);
    }
  }
  for (let j = 0; j < cart.length; j++) {
    total+=cart[j][0].price
    table.innerHTML += `<div class="item">
    <img src="${cart[j][0].img}" alt="">
    <h3>${cart[j][0].name}</h3>
    <P>quantity : ${cart[j][0].quantity}</P>
    <p>total: ${cart[j][0].price}đ</p>
  <i style="transform: translate(700%);font-size: 22px;" class="fas fa-trash" onclick="deleteItem(${cart[j][0].id})"></i>
 
  </div>`;
  }
  if(table.innerHTML == ""){
    document.getElementById("payment-button").style.display = "none"
    document.getElementById("total").style.border ="none"
    table.innerHTML = `<h1 style="text=align:center;    margin: 153px;" >Chưa có sản phầm nào trong giỏ hàng ! Vui lòng đi mua sắm</h1>`
  }
  else{
    document.getElementById("total").innerHTML =`  <h1>TOTAL : ${total}đ</h1>`
    document.getElementById("payment-button").style.display = "block"
  }
}

function deleteItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"))
  if(confirm(`bạn muốn xoá ${list[index - 1].name} ra khỏi giỏ hàng?`)){
  localStorage.removeItem(`${list[index - 1].name}`);
  let newCart = cart.filter(el=> {return el.id != index})
  localStorage.setItem("cart", JSON.stringify(newCart))
    location.reload();
  }
}
