







// Xử ký sự kiện thêm sản phẩm
var btn = document.getElementById('btn');
var masp = document.getElementById('masp');
var tensp = document.getElementById('tensp');
var loaisp = document.getElementById('loaisp');
var sl = document.getElementById('sl');
var dg = document.getElementById('dg');
var ha = document.getElementById('ha');
// bắt lỗi form thêm sản phẩm

// kiểm tra mã san phẩm 


function getFile(filePath) {
    
    /*Chỉ lấy tên
    return filePath.substr(filePath.lastIndexOf('\\') + 1).spli
    */
    //lấy tên và phần mở rộng
    return filePath.substr(filePath.lastIndexOf('\\') + 1);
}

var t1 = document.getElementById('t1');
btn.onclick = function () {
    var value_masp = document.getElementById('masp').value;
    var value_tensp = document.getElementById('tensp').value;
    var value_loaisp = document.getElementById('loaisp').value;
    var value_sl = document.getElementById('sl').value;
    var value_dg = document.getElementById('dg').value;
    var value_ha = getFile(document.getElementById('ha').value);

    if(value_masp.length != 5){
        alert("Mã sản phẩm phải đủ 5 ký tự");
        masp.focus();
        return false ;
    }
    if(value_tensp.length == 0){
        alert("Tên không được để trống");
        tensp.focus();
        return false;
    }
    if(value_loaisp.length == 0){
        alert("Vui lòng chọn các option ");
        loaisp.focus();
        return false
    }
    if(value_sl <= 0){
        alert("Số lượng phải lớn hơn 0");
        sl.focus();
        return false;
    }
    if(value_dg <= 50000){
        alert("đơn giá phải trên 50000");
        dg.focus();
        return false;
    }
    if(value_ha.length == 0){
        alert("Không được để trống file");
        return false;
    }

    let listproduct = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : [];
    listproduct.push({
        ma: value_masp ,
        ten: value_tensp ,
        loai: value_loaisp ,
        soluong: value_sl ,
        gia : value_dg ,
        hinh: value_ha 
    })
    localStorage.setItem("list-product", JSON.stringify(listproduct) );
    renderproduct();
    resetinput1();
   
}


function renderproduct(){
    let listproduct = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : [];
    let product = `<tr>
    <td>Mã SP</td>
    <td>Tên SP</td>
    <td>Loại </td>
    <td>Số Lượng</td>
    <td>Đơn Giá</td>
    <td>Hình Ảnh</td>  
    <td>Xóa</td>   
    </tr>`
    listproduct.map((value,index)=>{
        product += `<tr>
        <td>${value.ma}</td>
        <td>${value.ten}</td>
        <td>${value.loai}</td>
        <td>${value.soluong}</td>
        <td>${value.gia}</td>
        <td><img width='40px' height='40px' src = './image/${value.hinh}'></td>  
        <td>
        <button onclick="editproduct(${index})"> Edit </button>
        <button onclick="deleteproduct(${index})"> Delete </button>
        </td>   
        </tr>`
    });
    document.getElementById("t1").innerHTML= product;
}

function resetinput1(){
    document.getElementById("masp").value = null ;
    document.getElementById("tensp").value = null ;
    document.getElementById("loaisp").value = null;
    document.getElementById("sl").value = null;
    document.getElementById("dg").value = null ;
    document.getElementById("ha").value=null;
}
function resetinput2(){
    document.getElementById("masp2").value = null ;
    document.getElementById("tensp2").value = null ;
    document.getElementById("loaisp2").value = null;
    document.getElementById("sl2").value = null;
    document.getElementById("dg2").value = null ;
    document.getElementById("ha2").value=null;
}


function editproduct(index){
    $( ".frm2" ).show( );
    $( ".frm1" ).hide( );
    let listproduct = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : [];
    document.getElementById("masp2").value = listproduct[index].ma ;
    document.getElementById("tensp2").value = listproduct[index].ten ;
    document.getElementById("loaisp2").value = listproduct[index].loai ;
    document.getElementById("sl2").value = listproduct[index].soluong ;
    document.getElementById("dg2").value = listproduct[index].gia ;
    document.getElementById("index").value=index;
    document.getElementById("ha2").value=null;
}



function changeproduct(){
    let listproduct = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : [];
    let index = document.getElementById("index").value;

    var value_masp = document.getElementById('masp2').value;
    var value_tensp = document.getElementById('tensp2').value;
    var value_loaisp = document.getElementById('loaisp2').value;
    var value_sl = document.getElementById('sl2').value;
    var value_dg = document.getElementById('dg2').value;
    var value_ha = getFile(document.getElementById('ha2').value);

    if(value_masp.length != 5){
        alert("Mã sản phẩm phải đủ 5 ký tự");
        masp.focus();
        return false ;
    }
    if(value_tensp.length == 0){
        alert("Tên không được để trống");
        tensp.focus();
        return false;
    }
    if(value_loaisp.length == 0){
        alert("Vui lòng chọn các option ");
        loaisp.focus();
        return false
    }
    if(value_sl <= 0){
        alert("Số lượng phải lớn hơn 0");
        sl.focus();
        return false;
    }
    if(value_dg <= 50000){
        alert("đơn giá phải trên 50000");
        dg.focus();
        return false;
    }
    if(value_ha.length == 0){
        alert("Không được để trống file");
        return false;
    }
    else{
    listproduct[index] = {
        ma: document.getElementById("masp2").value ,
        ten: document.getElementById("tensp2").value ,
        loai: document.getElementById("loaisp2").value ,
        soluong: document.getElementById("sl2").value ,
        gia: document.getElementById("dg2").value ,
        hinh: getFile(document.getElementById("ha2").value) ,
    }
    localStorage.setItem("list-product", JSON.stringify(listproduct));
    renderproduct();
    resetinput2();
    }
}

function deleteproduct(index){
    $( ".frm2" ).hide( );
    $( ".frm1" ).hide( );
    let listproduct = localStorage.getItem("list-product") ? JSON.parse(localStorage.getItem("list-product")) : [];
    listproduct.splice(index, 1);
    localStorage.setItem("list-product", JSON.stringify(listproduct));
    renderproduct();
}



