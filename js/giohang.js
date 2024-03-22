// Lấy thông tin giỏ hàng từ localStorage
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var index = 0;
// Hiển thị thông tin sản phẩm trên trang giỏ hàng
var cartItems = document.querySelector(".cart-items");
var totalPrice = 0;
cart.forEach(function (product, index) {
  cartItems.innerHTML += `
  <div class="cart-items mb-2  p-2 ">
  <div class="row">
     <div class="col">
     <img src="${product.img}" alt="" class="cart-item-img img-fluid rounded-3" alt="Shopping item" >
     </div>
      
      <div class="ms-1 col d-flex flex-column  justify-content-center  align-items-start";  >
     <div class="">
     <h4 class="cart-item-name">${product.name}</h4>
     <p class="cart-item-price text-warning  " style="font-weight:bold;">${product.price}đ</p>    </div>  
         
      </div>
      

      <div class="col cart-item-quantity d-flex  justify-content-end  align-items-center" >
      <div>
      <button class="decrease-quantity" style="background-color:none; border:none; width:30px;" data-index="${index}">-</button>
<span class="quantity">${product.quantity}</span>
<button class="increase-quantity" style="background-color:none; border:none; width:30px;" data-index="${index}">+</button>

<button class="remove-item  ms-2 text-center" style="border:none;width:30px;" data-index="${index}" >X</button>

</div> 
  </div> 
  </div>
  
  
</div>
          
      `;
  totalPrice += parseInt(product.price);
});
// Hiển thị tổng giá trị giỏ hàng
var x = totalPrice + 80000;
document.querySelector(".total-price").innerHTML = totalPrice + "đ";
document.querySelector(".x").innerHTML = x + "đ";

// Lắng nghe sự kiện click nút "Xóa" trên mỗi sản phẩm
var removeButtons = document.querySelectorAll(".remove-item");
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var index = this.getAttribute("data-index");
    cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật thông tin giỏ hàng
    location.reload(); // Tải lại trang để cập nhật thông tin giỏ hàng và tổng giá trị giỏ hàng mới
  });
});
// Lắng nghe sự kiện click nút "+" trên mỗi sản phẩm
var increaseButtons = document.querySelectorAll(".increase-quantity");
increaseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var index = this.getAttribute("data-index");
    cart[index].quantity++; // Tăng số lượng sản phẩm
    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật thông tin giỏ hàng
    location.reload(); // Tải lại trang để cập nhật thông tin giỏ hàng và tổng giá trị giỏ hàng mới
  });
  var cartItems = document.querySelectorAll(".cart-items");
var totalPrice = 0;
cart.forEach(function (product, index) {
  totalPrice -= parseInt(product.price) * product.quantity;
});
document.querySelector(".total-price").innerHTML = totalPrice + "đ";
document.querySelector(".x").innerHTML = totalPrice + 80000 + "đ";

});
// Lắng nghe sự kiện click nút "-" trên mỗi sản phẩm
var decreaseButtons = document.querySelectorAll(".decrease-quantity");
decreaseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var index = this.getAttribute("data-index");
    if (cart[index].quantity > 1) {
      // Đảm bảo số lượng sản phẩm không được nhỏ hơn 1
      cart[index].quantity--; // Giảm số lượng sản phẩm
      localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật thông tin giỏ hàng
      location.reload(); // Tải lại trang để cập nhật thông tin giỏ hàng và tổng giá trị giỏ hàng mới
    }
  });
  var cartItems = document.querySelectorAll(".cart-items");
var totalPrice = 0;
cart.forEach(function (product, index) {
  totalPrice += parseInt(product.price) * product.quantity;
});
document.querySelector(".total-price").innerHTML = totalPrice + "đ";
document.querySelector(".x").innerHTML = totalPrice + 80000 + "đ";

});
  


function dhtc(){
  var dh = document.querySelectorAll(".dh")
  
   var frm = document.forms['tt-fr'];
   var ten = frm.ten;
   var sdt = frm.sdt;
   var dc = frm.dc;

   if(ten.value.length==""){
     alert(" tên không được rỗng")
     return false
   }
   if(sdt.value.length!=""){
    if(sdt.value.length > 10){
      alert("Số điện thoại không được lớn hơn 10 số")
      return false
   }

   }
   else{
    alert(" số điện thoại không được rỗng")
    return false;
   }
   
   if(dc.value.length==""){
      alert("địa chỉ không được rỗng")
      return false
   }
   if(cart!=null){
    alert("Đặt hàng thành công")
  }
  
  return true
}

