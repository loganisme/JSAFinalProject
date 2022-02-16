let list = JSON.parse(localStorage.getItem("shopList"));

function addToCart() {
  let idex = document.getElementById("item-number").value;
  let quantity = document.getElementById("quantity").value;
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  let realCart = [];
  if (quantity === "") {
    alert("vui lòng nhập số lượng");
  } else {
    alert(`đã thêm ${list[idex - 1].name} vào giỏ hàng`);
      cart.push({
        id: idex,
        name: list[idex - 1].name,
        quantity: quantity,
        price: list[idex - 1].price,
        img :list[idex - 1].img
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      let simi = cart.filter(el => el.id == idex)
      console.log(simi);
      let totalSimi = 0
      let totalPrice=0
      for (let i = 0; i < simi.length; i++) {
        totalSimi += Number(simi[i].quantity)
      }
      totalPrice = simi[0].price*totalSimi
      console.log(totalSimi);
      console.log(totalPrice);
      realCart.push({
        id: idex,
        name: list[idex - 1].name,
        quantity: totalSimi,
        price: totalPrice,
        img :list[idex - 1].img
      })
      localStorage.setItem(`${list[idex - 1].name}`,JSON.stringify(realCart))

  }
}

function renderRealCart() {
  let table =document.getElementById("table")
  let cart = []
  for (let i = 0; i < list.length; i++) {
  let item = JSON.parse(localStorage.getItem(`${list[i].name}`))
  console.log(item);
  if(item != null){
      cart.push(item)
      console.log(cart);
  }

  }  
  for (let j = 0; j < cart.length; j++) {
    table.innerHTML += `<div class="item">
    <img src="${cart[j][0].img}" alt="">
    <P>quantity : ${cart[j][0].quantity}</P>
    <p>price: ${cart[j][0].price}đ</p>
  </div>`
    
  }

 
  
}
