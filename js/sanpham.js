// Lấy tất cả các button "Đặt hàng" trên trang
var addToCartButtons = document.querySelectorAll('.btn-pd');



// console.log(addToCartButtons)
// Bắt sự kiện khi người dùng nhấp vào nút "Đặt hàng"
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Lấy thông tin sản phẩm
        var product = {
            id: button.closest('.card').getAttribute('data-product-id'),
            name: button.closest('.card').getAttribute('data-product-name'),
            price: button.closest('.card').getAttribute('data-product-price'),
            img: button.closest('.card').getAttribute('data-product-img'),
            quantity: 1 // Số lượng sản phẩm mặc định ban đầu là 1
        };

        // Lấy thông tin giỏ hàng từ localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
        var existingProduct = cart.find(function(p) { return p.id === product.id; });
        if (existingProduct) {
            // Nếu sản phẩm đã tồn tại, cập nhật số lượng sản phẩm đã có trong giỏ hàng
            existingProduct.quantity += 1;
            // Thông báo cho người dùng biết sản phẩm đã có sẵn trong giỏ hàng
            alert('Sản phẩm đã có sẵn trong giỏ hàng');
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm sản phẩm vào giỏ hàng
            cart.push(product);
            // Thông báo "Đặt hàng thành công" và chuyển hướng đến trang giỏ hàng
            alert('Đặt hàng thành công!');
            window.location.href = 'giohang.html';
        }

        // Lưu thông tin giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});