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
listToys = JSON.parse(localStorage.getItem("shopList"))
let menu = document.getElementById("shop-menu")
for (let i = 0; i <= listToys.length; i++) {
    menu.innerHTML+=` <a href="./shop${i}.html"><div class="item">
    <div class="main-img"><img src="${listToys[i].img}" alt=""></div>
   <h3>${listToys[i].name}</h3><hr>
    <p>${listToys[i].price}đ/piece</p>
</div></a>`
    
}